// Recovery pages: benefits list reveal and the hero video.
(() => {
	const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

	// benefits slide in one after another once the list is on screen
	const benefits = document.querySelector("#benefits");
	if (benefits && "IntersectionObserver" in window && !reducedMotion) {
		benefits.classList.add("cs-animate");
		const observer = new IntersectionObserver(
			(entries) => {
				if (!entries[0].isIntersecting) return;
				benefits.classList.add("cs-in-view");
				observer.disconnect();
			},
			{ threshold: 0.15 },
		);
		observer.observe(benefits);
	}

	// with reduced motion the hero video stays on its poster frame
	const video = document.querySelector("#recovery-hero .cs-video");
	if (video && reducedMotion) {
		video.removeAttribute("autoplay");
		video.pause();
	}
})();
