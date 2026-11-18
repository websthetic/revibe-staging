// "Call us" pop-up (components/popup-forms/call-us.html): any [data-call] opens it.
// X, Esc or a click outside the card closes it. Without the dialog, the link's tel: href still works.
(() => {
	const dialog = document.getElementById("call-popup");
	if (!dialog || typeof dialog.showModal !== "function") return;
	let opener = null;

	document.addEventListener("click", (e) => {
		const trigger = e.target.closest("[data-call]");
		if (!trigger) return;
		e.preventDefault();
		opener = trigger;
		dialog.showModal();
	});
	dialog.querySelector(".cs-call-close").addEventListener("click", () => dialog.close());
	// a click on the backdrop lands on the dialog itself, outside the card
	dialog.addEventListener("click", (e) => {
		if (e.target === dialog) dialog.close();
	});
	dialog.addEventListener("close", () => opener && opener.focus());
})();
