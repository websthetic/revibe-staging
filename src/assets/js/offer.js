// Offer landing pages: the claim form sends to Netlify Forms, then goes to the offer's thank you page.
(() => {
	const form = document.getElementById("claim");
	if (!form) return;
	const submit = form.querySelector('[type="submit"]');
	const label = submit.textContent;
	const status = form.querySelector(".cs-claim-status");

	form.addEventListener("submit", (e) => {
		e.preventDefault();
		if (!form.reportValidity()) return;
		submit.disabled = true;
		submit.textContent = "Sending";
		status.textContent = "";
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: new URLSearchParams(new FormData(form)).toString(),
		})
			.then((response) => {
				if (!response.ok) throw new Error(response.status);
				window.location.href = form.dataset.thankYou;
			})
			.catch(() => {
				submit.disabled = false;
				submit.textContent = label;
				status.textContent = "Sorry, that did not send. Please try again or call the clinic.";
			});
	});
})();
