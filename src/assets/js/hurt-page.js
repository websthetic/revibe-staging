// "Where does it hurt" pages (layouts/hurt.html).
// 1. Picking a problem (button or the drawing) zooms the anatomy drawing onto it,
//    labels it, and shows its explanation.
// 2. In the week by week plan, the pinned panel (desktop) follows the week in view.
// 3. On the hub, /where-does-it-hurt/, pointing at an area (list, card or body) lights it up on the body.
(function () {
	const page = document.querySelector(".cs-hurt-page");
	if (!page) return;

	// ---------- 1. Body map ----------
	const svg = page.querySelector(".anat");
	const zoom = svg && svg.querySelector(".zw");
	const callout = svg && svg.querySelector(".callout");
	const buttons = [...page.querySelectorAll(".cs-problem")];
	const names = {};
	buttons.forEach((b) => (names[b.dataset.k] = b.textContent.trim()));

	// zoom onto the problem's spot and point the label at it (drawing units, viewBox 400 x 520).
	// The x-ray drawing (data-xr) is already framed on the area, so it only moves the label.
	const xray = svg && svg.hasAttribute("data-xr");
	function focusDrawing(k) {
		if (!svg || !zoom || !callout) return;
		const spot = svg.querySelector('.spot[data-k="' + k + '"]');
		if (!spot) return;
		const m = /translate\(([-\d.]+)[ ,]+([-\d.]+)\)/.exec(spot.getAttribute("transform") || "");
		if (!m) return;
		const x = +m[1];
		const y = +m[2];
		const s = xray ? 1 : 1.38;
		const tx = xray ? x : x + 0.6 * (200 - x);
		const ty = xray ? y : y + 0.6 * (270 - y);
		zoom.style.transform = "translate(" + (tx - s * x) + "px," + (ty - s * y) + "px) scale(" + s + ")";

		const label = (names[k] || "").toUpperCase();
		const w = 30 + label.length * 13.2;
		const right = tx < 215;
		let lx = right ? tx + 56 : tx - 56 - w;
		const ly = ty < 130 ? ty + 62 : ty - 92;
		lx = Math.max(8, Math.min(392 - w, lx));
		const ex = right ? lx : lx + w;
		const ey = ly + 24;

		callout.querySelector(".co-line").setAttribute("d", "M" + tx + " " + ty + " L" + ex + " " + ey);
		const dot = callout.querySelector(".co-dot");
		dot.setAttribute("cx", ex);
		dot.setAttribute("cy", ey);
		const bg = callout.querySelector(".co-bg");
		bg.setAttribute("x", lx);
		bg.setAttribute("y", ly);
		bg.setAttribute("width", w);
		const text = callout.querySelector(".co-t");
		text.textContent = label;
		text.setAttribute("x", lx + 15);
		text.setAttribute("y", ly + 35);
		svg.classList.add("sel");
	}

	function pick(k) {
		page.dataset.k = k;
		buttons.forEach((b) => {
			const on = b.dataset.k === k;
			b.classList.toggle("cs-active", on);
			b.setAttribute("aria-pressed", on);
		});
		page.querySelectorAll(".cs-info").forEach((i) => i.classList.toggle("cs-active", i.dataset.k === k));
		if (svg) svg.querySelectorAll("[data-k]").forEach((p) => p.classList.toggle("on", p.dataset.k === k));
		focusDrawing(k);
	}

	buttons.forEach((b) => b.addEventListener("click", () => pick(b.dataset.k)));
	if (svg) svg.querySelectorAll("[data-k]").forEach((p) => p.addEventListener("click", () => pick(p.dataset.k)));
	if (buttons.length) pick(buttons[0].dataset.k);

	// ---------- 2. Week by week plan ----------
	const weeks = [...page.querySelectorAll(".cs-week")];
	const stage = page.querySelector(".cs-stage");
	if (!weeks.length) return;

	function setWeek(el) {
		weeks.forEach((w) => w.classList.toggle("cs-active", w === el));
		if (!stage) return;
		stage.querySelector(".big-leg").style.setProperty("--a", el.dataset.angle + "deg");
		stage.querySelector(".cs-stage-number").textContent = el.dataset.week;
		stage.querySelector(".cs-stage-phase").textContent = el.dataset.phase;
		stage.querySelector(".cs-stage-dots").innerHTML = el.querySelector(".cs-dots").outerHTML;
		stage.querySelector(".cs-stage-text").textContent = el.dataset.perWeek === "2" ? "Twice a week" : "Once a week";
	}

	if ("IntersectionObserver" in window) {
		const io = new IntersectionObserver(
			(entries) => entries.forEach((e) => e.isIntersecting && setWeek(e.target)),
			{ rootMargin: "-45% 0px -45% 0px" }
		);
		weeks.forEach((w) => io.observe(w));
	}
})();

// ---------- 3. Hub ----------
(function () {
	const body = document.querySelector("#hurt-hub .xr");
	if (!body) return;
	const list = [...document.querySelectorAll("#hurt-hub .cs-area-link")];
	const cards = [...document.querySelectorAll("#hurt-pick .cs-card[data-k]")];
	const spots = [...body.querySelectorAll(".hs")];

	function highlight(k) {
		body.setAttribute("data-on", k || "");
		spots.forEach((s) => s.classList.toggle("on", s.dataset.k === k));
		list.forEach((a) => a.classList.toggle("cs-active", a.dataset.k === k));
	}

	[...list, ...cards, ...spots].forEach((el) => {
		el.addEventListener("mouseenter", () => highlight(el.dataset.k));
		el.addEventListener("focusin", () => highlight(el.dataset.k));
	});
})();
