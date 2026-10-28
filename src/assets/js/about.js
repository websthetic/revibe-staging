// About page (/about-us/): photo thumbnails switch each milestone's gallery, milestones fade in as they
// scroll into view, and the green timeline line fills with scroll. Without this script everything shows
// at once with the first photo of each gallery. Styles in about.less.
(() => {
	const story = document.getElementById("story");
	if (!story) return;
	const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

	// ---------- Galleries ----------
	story.querySelectorAll(".cs-gallery").forEach((gallery) => {
		const frames = [...gallery.querySelectorAll(".cs-frame")];
		const thumbs = [...gallery.querySelectorAll(".cs-thumb")];
		thumbs.forEach((thumb, i) =>
			thumb.addEventListener("click", () => {
				frames.forEach((frame, n) => (frame.hidden = n !== i));
				thumbs.forEach((t, n) => t.setAttribute("aria-pressed", String(n === i)));
			}),
		);
	});

	// ---------- Reveal on scroll ----------
	const moments = [...story.querySelectorAll(".cs-moment")];
	if ("IntersectionObserver" in window && !reducedMotion.matches) {
		story.classList.add("cs-animate");
		const observer = new IntersectionObserver(
			(entries) =>
				entries.forEach((entry) => {
					if (!entry.isIntersecting) return;
					entry.target.classList.add("cs-in-view");
					observer.unobserve(entry.target);
				}),
			{ rootMargin: "0px 0px -15% 0px" },
		);
		moments.forEach((m) => observer.observe(m));
	}

	// ---------- Timeline line ----------
	// fills from the top of the list to the middle of the screen
	const list = story.querySelector(".cs-moments");
	let ticking = false;
	const fill = () => {
		ticking = false;
		const box = list.getBoundingClientRect();
		const progress = Math.min(1, Math.max(0, (window.innerHeight * 0.5 - box.top) / box.height));
		story.style.setProperty("--progress", progress.toFixed(4));
		// light the dots the line has reached
		moments.forEach((m) => {
			const dot = m.querySelector(".cs-dot").getBoundingClientRect();
			m.classList.toggle("cs-reached", dot.top + dot.height / 2 <= window.innerHeight * 0.5);
		});
	};
	const onScroll = () => {
		if (ticking) return;
		ticking = true;
		requestAnimationFrame(fill);
	};
	window.addEventListener("scroll", onScroll, { passive: true });
	window.addEventListener("resize", onScroll);
	fill();
})();
