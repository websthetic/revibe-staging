// Performance training: the goal tabs and the example report bars.
(() => {
	// Tabs, with arrow-key movement between them (the standard tab pattern)
	document.querySelectorAll("#goals .cs-tabs").forEach((tabs) => {
		const buttons = [...tabs.querySelectorAll('[role="tab"]')];
		const select = (button, focus) => {
			buttons.forEach((b) => {
				const on = b === button;
				b.setAttribute("aria-selected", String(on));
				b.tabIndex = on ? 0 : -1;
				document.getElementById(b.getAttribute("aria-controls")).hidden = !on;
			});
			if (focus) button.focus();
		};
		buttons.forEach((button, i) => {
			button.addEventListener("click", () => select(button));
			button.addEventListener("keydown", (e) => {
				const move = { ArrowRight: 1, ArrowLeft: -1, Home: -i, End: buttons.length - 1 - i }[e.key];
				if (move === undefined) return;
				e.preventDefault();
				select(buttons[(i + move + buttons.length) % buttons.length], true);
			});
		});
	});

	// the bars fill in once the report is on screen
	const report = document.querySelector("#how .cs-report");
	if (!report) return;
	if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
	report.classList.add("cs-animate");
	const observer = new IntersectionObserver(
		(entries) => {
			if (!entries[0].isIntersecting) return;
			report.classList.add("cs-in-view");
			observer.disconnect();
		},
		{ threshold: 0.3 },
	);
	observer.observe(report);
})();
