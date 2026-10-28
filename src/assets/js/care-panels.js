(() => {
	const panels = [...document.querySelectorAll("#care-panels .cs-panel")];
	if (!panels.length) return;

	// matches the desktop breakpoint in local.less; below it the panels are a swipe carousel
	const desktop = window.matchMedia("(min-width: 56.25rem)");

	const openPanel = (panel) => panels.forEach((p) => p.classList.toggle("cs-active", p === panel));

	panels.forEach((panel) => {
		const link = panel.querySelector(".cs-panel-link");
		panel.addEventListener("mouseenter", () => desktop.matches && openPanel(panel));
		link.addEventListener("focus", () => openPanel(panel));
		// on desktop a tap on a closed panel opens it first; a second tap follows the link
		link.addEventListener("click", (e) => {
			if (desktop.matches && !panel.classList.contains("cs-active")) {
				e.preventDefault();
				openPanel(panel);
			}
		});
	});
})();
