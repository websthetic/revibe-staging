// FAQ accordion (components/faq.html): a link to a question's id opens that answer.
(() => {
	const openTarget = () => {
		const id = decodeURIComponent(location.hash.slice(1));
		const target = id && document.getElementById(id);
		if (target && target.matches(".cs-faq-item")) target.open = true;
	};
	window.addEventListener("hashchange", openTarget);
	openTarget();
})();
