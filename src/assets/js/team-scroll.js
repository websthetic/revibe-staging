// "Who will treat me?" on pages with team.scroll (massage): on desktop the section pins to the screen
// and vertical scrolling slides the row of therapists sideways until the last one is in view.
// Without this script, on phones, or with reduced motion, the row is a plain sideways-scrolling strip (service.less).
(() => {
	const section = document.querySelector("#team.cs-team-scroll");
	if (!section) return;

	const pin = section.querySelector(".cs-team-pin");
	const container = pin.querySelector(".cs-container");
	const row = section.querySelector(".cs-people");
	const desktop = window.matchMedia("(min-width: 56.25rem)");
	const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

	let distance = 0; // how far the row slides, in px
	let ticking = false;

	const active = () => desktop.matches && !reducedMotion.matches;

	const measure = () => {
		if (!active()) {
			section.classList.remove("cs-team-scroll-active");
			section.style.height = "";
			row.style.transform = "";
			return;
		}
		section.classList.add("cs-team-scroll-active");
		// the last therapist stops at the container's right edge
		distance = Math.max(0, row.scrollWidth - container.clientWidth);
		// the section is as tall as the pinned panel plus the sideways distance, so one px down = one px sideways
		section.style.height = `${pin.offsetHeight + distance}px`;
		update();
	};

	const update = () => {
		ticking = false;
		if (!active()) return;
		const top = section.getBoundingClientRect().top;
		const progress = Math.min(Math.max(-top / distance || 0, 0), 1);
		row.style.transform = `translateX(${-progress * distance}px)`;
	};

	window.addEventListener(
		"scroll",
		() => {
			if (ticking) return;
			ticking = true;
			requestAnimationFrame(update);
		},
		{ passive: true },
	);
	window.addEventListener("resize", measure);
	desktop.addEventListener("change", measure);
	reducedMotion.addEventListener("change", measure);
	// photos change the row's width as they load
	row.querySelectorAll("img").forEach((img) => img.complete || img.addEventListener("load", measure, { once: true }));

	// tabbing to a therapist scrolls the page so they slide into view
	row.addEventListener("focusin", (e) => {
		if (!active() || !distance) return;
		const item = e.target.closest(".cs-person");
		const target = Math.min(Math.max(item.offsetLeft + item.offsetWidth - container.clientWidth, 0), distance);
		const sectionTop = section.getBoundingClientRect().top + window.scrollY;
		window.scrollTo({ top: sectionTop + target });
	});

	measure();
})();
