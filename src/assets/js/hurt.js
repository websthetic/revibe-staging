(() => {
	const section = document.querySelector("#hurt");
	if (!section) return;

	const body = section.querySelector(".xr");
	const links = [...section.querySelectorAll(".cs-link")];
	const spots = [...section.querySelectorAll(".hs")];

	// keep the list and the body figure in sync; data-on lights the area up on the x-ray body
	const highlight = (k) => {
		if (body) body.setAttribute("data-on", k);
		links.forEach((a) => a.classList.toggle("cs-active", a.dataset.k === k));
		spots.forEach((s) => s.classList.toggle("on", s.dataset.k === k));
	};

	[...links, ...spots].forEach((el) => {
		el.addEventListener("mouseenter", () => highlight(el.dataset.k));
		el.addEventListener("focusin", () => highlight(el.dataset.k));
	});
	if (links[0]) highlight(links[0].dataset.k);
})();
