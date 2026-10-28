// Contact page form (/contact-us/): checks the fields, sends to Netlify Forms and goes to the thank you page.
// Without this script the browser posts the form itself (action="/thank-you/"). Styles in contact.less.
(() => {
	const form = document.querySelector("#contact-form form");
	if (!form) return;

	const fields = form.elements;
	const submit = form.querySelector('[type="submit"]');
	const submitLabel = submit.textContent;
	const submitError = document.getElementById("contact-submit-error");

	// tracking fields from the URL
	try {
		const params = new URLSearchParams(location.search);
		["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid"].forEach((key) => {
			if (params.get(key)) fields[key].value = params.get(key);
		});
	} catch (e) {}

	// (905) 783-8423 formatting as they type
	fields.phone.addEventListener("input", () => {
		const d = fields.phone.value.replace(/\D/g, "").replace(/^1/, "").slice(0, 10);
		fields.phone.value = d.length > 6 ? `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}` : d.length > 3 ? `(${d.slice(0, 3)}) ${d.slice(3)}` : d;
	});

	// messages are tied to their field so screen readers announce them
	const setError = (field, message) => {
		const el = document.getElementById(`${field.id}-error`);
		el.textContent = message || "";
		if (message) {
			field.setAttribute("aria-invalid", "true");
			field.setAttribute("aria-describedby", el.id);
		} else {
			field.removeAttribute("aria-invalid");
			field.removeAttribute("aria-describedby");
		}
		return !message;
	};

	const validate = (focusFirst = true) => {
		const checks = [
			[fields.name, fields.name.value.trim().length > 1, "Please add your name."],
			[fields.email, /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fields.email.value.trim()), "Please add a valid email."],
			[fields.phone, fields.phone.value.replace(/\D/g, "").length >= 10, "Please add a 10 digit phone number."],
			[fields.message, fields.message.value.trim().length > 1, "Please add a message."],
		];
		let firstInvalid = null;
		checks.forEach(([field, ok, message]) => {
			if (!setError(field, ok ? "" : message) && !firstInvalid) firstInvalid = field;
		});
		if (firstInvalid && focusFirst) firstInvalid.focus();
		return !firstInvalid;
	};

	// re-check as they fix a field that was flagged
	form.addEventListener("input", (e) => e.target.getAttribute("aria-invalid") && validate(false));

	form.addEventListener("submit", (e) => {
		e.preventDefault();
		if (!validate()) return;
		submitError.textContent = "";
		submit.disabled = true;
		submit.textContent = "Sending";

		try {
			(window.dataLayer = window.dataLayer || []).push({ event: "generate_lead", form: form.getAttribute("name") });
		} catch (err) {}

		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: new URLSearchParams(new FormData(form)).toString(),
		})
			.then((response) => {
				if (!response.ok) throw new Error(response.status);
				window.location.href = form.getAttribute("action");
			})
			.catch(() => {
				submit.disabled = false;
				submit.textContent = submitLabel;
				submitError.textContent = "Sorry, that did not send. Please call or email us instead.";
			});
	});
})();
