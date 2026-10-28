(() => {
	const section = document.querySelector("#hurt");
	if (!section) return;

	const links = [...section.querySelectorAll(".cs-link")];
	const spots = [...section.querySelectorAll(".cs-spot")];

	// keep the list and the body figure in sync
	const highlight = (key) => {
		links.forEach((a) => a.classList.toggle("cs-active", a.dataset.key === key));
		spots.forEach((s) => s.classList.toggle("cs-active", s.dataset.key === key));
	};

	links.forEach((a) => {
		a.addEventListener("mouseenter", () => highlight(a.dataset.key));
		a.addEventListener("focus", () => highlight(a.dataset.key));
	});
	spots.forEach((s) => s.addEventListener("mouseenter", () => highlight(s.dataset.key)));
})();
