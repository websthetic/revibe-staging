// Sample report on the DUTCH test page (layouts/service.html, s.results): tap to see it full size, close with the X, a tap outside it or Escape.
(() => {
	const open = document.querySelector(".cs-report-open");
	const zoom = document.getElementById("report-zoom");
	if (!open || !zoom) return;
	const closeButton = zoom.querySelector(".cs-report-close");

	const show = () => {
		zoom.hidden = false;
		document.documentElement.style.overflow = "hidden";
		closeButton.focus();
	};
	const hide = () => {
		if (zoom.hidden) return;
		zoom.hidden = true;
		document.documentElement.style.overflow = "";
		open.focus();
	};

	open.addEventListener("click", show);
	closeButton.addEventListener("click", hide);
	zoom.addEventListener("click", (e) => e.target === zoom && hide());
	document.addEventListener("keydown", (e) => e.key === "Escape" && hide());
})();
