(() => {
	const video = document.querySelector("#hero .cs-video");
	const toggle = document.querySelector("#hero .cs-video-toggle");
	if (!video || !toggle) return;

	const setState = (paused) => {
		toggle.setAttribute("aria-pressed", String(paused));
		toggle.setAttribute("aria-label", paused ? "Play background video" : "Pause background video");
	};

	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
		video.removeAttribute("autoplay");
		video.pause();
	}

	video.addEventListener("play", () => setState(false));
	video.addEventListener("pause", () => setState(true));
	setState(video.paused);

	toggle.addEventListener("click", () => (video.paused ? video.play() : video.pause()));
})();
