// Memberships page: the "Join <plan>" buttons preselect the plan in the form, and the form sends to Netlify.
(() => {
	const form = document.querySelector("#join .cs-join-form");
	if (!form) return;

	document.querySelectorAll("#plans [data-plan]").forEach((button) =>
		button.addEventListener("click", () => {
			form.elements.membership.value = button.dataset.plan;
		}),
	);

	const status = form.querySelector(".cs-join-status");
	const submit = form.querySelector('[type="submit"]');

	form.addEventListener("submit", (e) => {
		e.preventDefault();
		if (!form.reportValidity()) return;
		submit.disabled = true;
		status.textContent = "Sending…";
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: new URLSearchParams(new FormData(form)).toString(),
		})
			.then((response) => {
				if (!response.ok) throw new Error(response.status);
				const name = form.elements.name.value.trim().split(" ")[0];
				form.reset();
				status.textContent = `Thanks, ${name}. The team will reach out to set up your membership and book your first session.`;
			})
			.catch(() => {
				status.textContent = "Sorry, that did not send. Please call the clinic or try again.";
			})
			.finally(() => (submit.disabled = false));
	});
})();
