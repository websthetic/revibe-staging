// Same-page # links (href="#story", or "/join-our-team/#open-roles" while on that page) ease to their
// section instead of jumping. Longer trips take a little longer, between 0.7s and 1.4s.
// Respects reduced motion; the browser's normal jump runs then, and when this script doesn't load.
(() => {
	const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

	// slow start, slow finish
	const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

	let frame = null;
	const stop = () => {
		cancelAnimationFrame(frame);
		frame = null;
	};
	// a wheel or touch from the visitor hands control back to them
	["wheel", "touchstart", "keydown"].forEach((type) => window.addEventListener(type, stop, { passive: true }));

	const glide = (target) => {
		// html's scroll-padding-top (root.less) keeps the section clear of the fixed nav
		const offset = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
		const start = window.scrollY;
		const max = document.documentElement.scrollHeight - window.innerHeight;
		const end = Math.min(Math.max(target.getBoundingClientRect().top + start - offset, 0), max);
		const distance = end - start;
		const duration = Math.min(Math.max(Math.abs(distance) * 0.4, 700), 1400);
		let startTime = null;

		stop();
		const step = (now) => {
			if (startTime === null) startTime = now;
			const t = Math.min((now - startTime) / duration, 1);
			window.scrollTo(0, start + distance * ease(t));
			frame = t < 1 ? requestAnimationFrame(step) : null;
		};
		frame = requestAnimationFrame(step);
	};

	document.addEventListener("click", (e) => {
		if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
		const link = e.target.closest("a[href*='#']");
		if (!link || link.target === "_blank") return;

		const url = new URL(link.href, location.href);
		if (url.origin !== location.origin || url.pathname !== location.pathname || !url.hash) return;
		const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
		if (!target || reducedMotion.matches) return;

		e.preventDefault();
		glide(target);

		// keep the address bar and back button in step, and tell listeners like faq.js
		if (location.hash !== url.hash) {
			history.pushState(null, "", url.hash);
			window.dispatchEvent(new HashChangeEvent("hashchange"));
		}
		// move keyboard and screen reader focus to the section without a second jump
		if (!target.hasAttribute("tabindex") && !target.matches("a, button, input, select, textarea, summary")) {
			target.setAttribute("tabindex", "-1");
		}
		target.focus({ preventScroll: true });
	});
})();
