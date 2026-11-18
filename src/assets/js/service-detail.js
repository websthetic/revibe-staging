// Treatment pages (layouts/service-detail.html): the card carousels ([data-carousel]).
// Desktop, when the row fits on screen: the section grows by the row's overflow and pins (.cs-pinned),
// and scrolling down slides the row sideways. Otherwise (phones, short screens, reduced motion)
// the row is a swipe carousel. Both keep the "01 / 06" count and the progress bar up to date.
(function () {
	const carousels = [...document.querySelectorAll("[data-carousel]")];
	if (!carousels.length) return;

	const desktop = window.matchMedia("(min-width: 62.5rem)");
	const still = window.matchMedia("(prefers-reduced-motion: reduce)");

	const items = carousels.map((section) => ({
		section,
		pin: section.querySelector(".cs-pin"),
		rail: section.querySelector(".cs-rail"),
		track: section.querySelector(".cs-track"),
		cards: [...section.querySelectorAll(".cs-card")],
		now: section.querySelector(".cs-count-now"),
		bar: section.querySelector(".cs-progress-bar"),
		distance: 0,
	}));

	const pad = (n) => (n < 10 ? "0" : "") + n;

	function show(c, progress) {
		c.bar.style.transform = "scaleX(" + Math.max(0.04, progress) + ")";
		const index = Math.min(c.cards.length, Math.round(progress * (c.cards.length - 1)) + 1);
		c.now.textContent = pad(index);
	}

	function setup() {
		items.forEach((c) => {
			c.section.classList.remove("cs-pinned");
			c.section.style.height = "";
			c.track.style.transform = "";
			c.distance = 0;
			if (!desktop.matches || still.matches) return;

			const distance = c.track.scrollWidth - c.rail.clientWidth;
			// pin only when there is something to slide and the panel fits under the fixed header (84px + 24px)
			if (distance <= 0 || c.pin.offsetHeight + 108 > window.innerHeight) return;
			c.distance = distance;
			c.section.classList.add("cs-pinned");
			c.section.style.height = window.innerHeight + distance + "px";
		});
		onScroll();
	}

	function onScroll() {
		items.forEach((c) => {
			if (!c.distance) return;
			const top = c.section.getBoundingClientRect().top;
			const progress = Math.min(1, Math.max(0, -top / c.distance));
			c.track.style.transform = "translateX(" + -progress * c.distance + "px)";
			show(c, progress);
		});
	}

	// swipe mode: the count and bar follow the rail's own scroll
	items.forEach((c) => {
		c.rail.addEventListener(
			"scroll",
			() => {
				if (c.distance) return;
				const max = c.rail.scrollWidth - c.rail.clientWidth;
				show(c, max > 0 ? c.rail.scrollLeft / max : 0);
			},
			{ passive: true }
		);
	});

	let frame = 0;
	window.addEventListener(
		"scroll",
		() => {
			if (frame) return;
			frame = requestAnimationFrame(() => {
				frame = 0;
				onScroll();
			});
		},
		{ passive: true }
	);

	let resizeTimer;
	window.addEventListener("resize", () => {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(setup, 150);
	});
	desktop.addEventListener("change", setup);
	still.addEventListener("change", setup);
	// fonts change card heights; measure again once they are in
	if (document.fonts) document.fonts.ready.then(setup);
	setup();
})();
