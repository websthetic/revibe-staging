// Clinic page walkthrough video: pause and play button; starts paused for visitors who turn motion off.
document.querySelectorAll("#clinic-gallery .cs-video").forEach((wrap) => {
	const video = wrap.querySelector("video");
	const button = wrap.querySelector(".cs-video-toggle");
	const sync = () => {
		const paused = video.paused;
		wrap.classList.toggle("cs-paused", paused);
		button.setAttribute("aria-label", paused ? "Play the video" : "Pause the video");
	};
	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
		video.removeAttribute("autoplay");
		video.pause();
	}
	button.addEventListener("click", () => (video.paused ? video.play() : video.pause()));
	video.addEventListener("play", sync);
	video.addEventListener("pause", sync);
	sync();
});
