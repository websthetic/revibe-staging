// Behaviour for the lower home page sections: first session reveal, reviews carousel and locations carousel.
(() => {
	const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

	// Your first session: draw the timeline and fade the steps in once the section is on screen
	const firstSession = document.querySelector("#first-session");
	if (firstSession) {
		if ("IntersectionObserver" in window) {
			firstSession.classList.add("cs-animate");
			const observer = new IntersectionObserver(
				(entries) => {
					if (!entries[0].isIntersecting) return;
					firstSession.classList.add("cs-in-view");
					observer.disconnect();
				},
				{ threshold: 0.2 },
			);
			observer.observe(firstSession);
		}
	}

	// Reviews: arrow buttons, plus a gentle auto-advance every 5s while the carousel is on screen and not being touched
	const reviews = document.querySelector("#reviews .cs-track");
	if (reviews) {
		const step = () => {
			const card = reviews.querySelector(".cs-card");
			return card ? card.getBoundingClientRect().width + 14 : 300;
		};
		const atEnd = () => reviews.scrollLeft + reviews.clientWidth >= reviews.scrollWidth - 4;
		const next = () => (atEnd() ? reviews.scrollTo({ left: 0, behavior: "smooth" }) : reviews.scrollBy({ left: step(), behavior: "smooth" }));

		document.querySelector("#reviews .cs-prev").addEventListener("click", () => reviews.scrollBy({ left: -step(), behavior: "smooth" }));
		document.querySelector("#reviews .cs-next").addEventListener("click", next);

		let hold = false;
		const section = reviews.closest("section");
		section.addEventListener("mouseenter", () => (hold = true));
		section.addEventListener("mouseleave", () => (hold = false));
		section.addEventListener("focusin", () => (hold = true));
		section.addEventListener("focusout", () => (hold = false));
		reviews.addEventListener("touchstart", () => (hold = true), { passive: true });

		if (!reducedMotion) {
			setInterval(() => {
				if (hold || document.hidden) return;
				const box = reviews.getBoundingClientRect();
				if (box.bottom < 0 || box.top > window.innerHeight) return;
				next();
			}, 5000);
		}
	}

	// Locations: one clinic per slide, with a "1 / 2" counter
	const locations = document.querySelector("#locations .cs-track");
	if (locations) {
		const current = document.querySelector("#locations .cs-current");
		const count = locations.children.length;
		const index = () => Math.round(locations.scrollLeft / locations.clientWidth);
		const go = (direction) => {
			const i = (index() + direction + count) % count;
			locations.scrollTo({ left: i * locations.clientWidth, behavior: reducedMotion ? "auto" : "smooth" });
		};

		document.querySelector("#locations .cs-prev").addEventListener("click", () => go(-1));
		document.querySelector("#locations .cs-next").addEventListener("click", () => go(1));
		locations.addEventListener("scroll", () => (current.textContent = index() + 1), { passive: true });
	}
})();
