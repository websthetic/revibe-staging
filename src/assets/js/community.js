// /community/: highlight arrows, the "Bring Revibe" picker, the photo tabs and lightbox,
// and the partner enquiry pop-up (opened by [data-partner], or by /community/#partner on load).
(() => {
	const wide = window.matchMedia("(min-width: 900px)");
	const hover = window.matchMedia("(hover: hover)");
	const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	const lock = (on) => document.documentElement.classList.toggle("cs-scroll-lock", on);

	// ---------- highlight reel arrows (desktop) ----------
	const track = document.getElementById("highlights-track");
	if (track) {
		const go = (direction) => {
			const card = track.querySelector(".cs-reel");
			const step = card ? card.getBoundingClientRect().width + 20 : 320;
			track.scrollBy({ left: direction * step * 2, behavior: reducedMotion ? "auto" : "smooth" });
		};
		document.querySelector("#highlights .cs-prev").addEventListener("click", () => go(-1));
		document.querySelector("#highlights .cs-next").addEventListener("click", () => go(1));
	}

	// ---------- picker: hover or click an option to swap the panel (desktop) ----------
	const options = [...document.querySelectorAll("#picker .cs-option")];
	const panels = [...document.querySelectorAll("#picker .cs-panel")];
	const pick = (index) => {
		options.forEach((button, i) => {
			button.classList.toggle("cs-on", i === index);
			button.setAttribute("aria-pressed", String(i === index));
		});
		panels.forEach((panel, i) => panel.classList.toggle("cs-on", i === index));
	};
	options.forEach((button, i) => {
		button.addEventListener("click", () => pick(i));
		button.addEventListener("mouseenter", () => {
			if (hover.matches && wide.matches) pick(i);
		});
	});

	// ---------- photo tabs, with arrow keys ----------
	const tabs = [...document.querySelectorAll('#photos [role="tab"]')];
	const selectTab = (tab, focus) => {
		tabs.forEach((t) => {
			const on = t === tab;
			t.setAttribute("aria-selected", String(on));
			t.tabIndex = on ? 0 : -1;
			document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
		});
		if (focus) tab.focus();
	};
	tabs.forEach((tab, i) => {
		tab.addEventListener("click", () => selectTab(tab));
		tab.addEventListener("keydown", (e) => {
			const move = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
			if (!move) return;
			e.preventDefault();
			selectTab(tabs[(i + move + tabs.length) % tabs.length], true);
		});
	});

	// ---------- lightbox: previous and next, arrow keys, Esc ----------
	const lightbox = document.querySelector(".cs-lightbox");
	if (lightbox && typeof lightbox.showModal === "function") {
		const image = lightbox.querySelector("img");
		const caption = lightbox.querySelector("figcaption");
		let set = [];
		let current = 0;
		let name = "";
		const show = (i) => {
			current = (i + set.length) % set.length;
			const photo = set[current];
			image.src = photo.currentSrc || photo.src;
			image.alt = photo.alt;
			caption.textContent = `${name}, ${current + 1} of ${set.length}`;
		};
		document.querySelectorAll("#photos .cs-pane").forEach((pane) => {
			pane.querySelectorAll(".cs-photo-button").forEach((button) => {
				button.addEventListener("click", () => {
					set = [...pane.querySelectorAll(".cs-photo-button img")];
					name = pane.dataset.name;
					show(Number(button.dataset.index));
					lightbox.showModal();
					lock(true);
				});
			});
		});
		lightbox.querySelector(".cs-lb-prev").addEventListener("click", () => show(current - 1));
		lightbox.querySelector(".cs-lb-next").addEventListener("click", () => show(current + 1));
		lightbox.querySelector("[data-lightbox-close]").addEventListener("click", () => lightbox.close());
		lightbox.addEventListener("click", (e) => {
			if (e.target === lightbox) lightbox.close();
		});
		lightbox.addEventListener("keydown", (e) => {
			if (e.key === "ArrowRight") show(current + 1);
			if (e.key === "ArrowLeft") show(current - 1);
		});
		lightbox.addEventListener("close", () => lock(false));
	}

	// ---------- partner enquiry pop-up ----------
	const dialog = document.getElementById("partner");
	if (!dialog || typeof dialog.showModal !== "function") return;
	const radios = [...dialog.querySelectorAll('input[name="partnership_type"]')];
	let opener = null;
	const open = (type, trigger) => {
		opener = trigger || null;
		if (type) radios.forEach((radio) => (radio.checked = radio.value === type));
		dialog.showModal();
		lock(true);
		(type ? document.getElementById("partner-name") : radios[0]).focus();
	};
	// capture, so the smooth scroll on #partner links never runs
	document.addEventListener(
		"click",
		(e) => {
			const trigger = e.target.closest("[data-partner]");
			if (!trigger) return;
			e.preventDefault();
			e.stopPropagation();
			open(trigger.dataset.partner, trigger);
		},
		true,
	);
	dialog.querySelector("[data-partner-close]").addEventListener("click", () => dialog.close());
	dialog.addEventListener("click", (e) => {
		if (e.target === dialog) dialog.close();
	});
	dialog.addEventListener("close", () => {
		lock(false);
		if (opener) opener.focus();
	});
	if (location.hash === "#partner") open();
})();
