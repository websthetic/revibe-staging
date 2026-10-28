// Pop-up forms: "Book your session" (any [data-book]), "Request to book" (any [data-request])
// "Request a free consult" (any [data-consult], on performance training pages)
// and "Apply to join Revibe" (any [data-apply], on the careers page).
// Markup lives in _includes/components/popup-forms/, styles in global.less.
// The open/close helpers are shared as window.RevibePopups (used by caremap-quiz.js).
(() => {
	const bookPopup = document.getElementById("book-popup");
	const requestPopup = document.getElementById("request-popup");
	const consultPopup = document.getElementById("consult-popup");
	const caremapPopup = document.getElementById("caremap-popup");
	const applyPopup = document.getElementById("apply-popup");
	if (!bookPopup && !requestPopup && !consultPopup && !caremapPopup && !applyPopup) return;

	const CLINIC_KEY = "revibe-clinic";
	const FOCUSABLE = 'a[href], button:not([disabled]), input:not([type="hidden"]):not([tabindex="-1"]), select, textarea, [tabindex]:not([tabindex="-1"])';
	const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

	// Remember the clinic someone last picked (private windows can block storage, so fail quietly)
	const getClinic = () => {
		try {
			return localStorage.getItem(CLINIC_KEY) || "";
		} catch (e) {
			return "";
		}
	};
	const setClinic = (key) => {
		try {
			localStorage.setItem(CLINIC_KEY, key);
		} catch (e) {}
	};

	// Shared open/close with a focus trap; returns focus to whatever opened it
	let current = null;
	let opener = null;

	const open = (popup, trigger, focusTarget) => {
		if (current && current !== popup) close(current, false);
		opener = trigger || opener;
		current = popup;
		popup.hidden = false;
		document.body.classList.add("cs-popup-open");
		requestAnimationFrame(() => popup.classList.add("cs-active"));
		const target = focusTarget || popup.querySelector(FOCUSABLE);
		setTimeout(() => target && target.focus(), 60);
	};

	const close = (popup, restoreFocus = true) => {
		popup.classList.remove("cs-active");
		document.body.classList.remove("cs-popup-open");
		current = null;
		setTimeout(() => (popup.hidden = true), reducedMotion ? 0 : 260);
		if (restoreFocus && opener && opener.focus) opener.focus();
	};

	// a pop-up can veto closing from the X, the backdrop or Escape (the Care Map asks before quitting)
	const guards = new Map();
	const dismiss = (popup) => {
		const guard = guards.get(popup);
		if (guard && guard() === false) return;
		close(popup);
	};

	[bookPopup, requestPopup, consultPopup, caremapPopup, applyPopup].forEach((popup) => {
		if (!popup) return;
		popup.querySelector(".cs-popup-close").addEventListener("click", () => dismiss(popup));
		// clicking the dimmed backdrop closes it
		popup.addEventListener("click", (e) => e.target === popup && dismiss(popup));
	});

	window.RevibePopups = { open, close, beforeClose: (popup, guard) => guards.set(popup, guard) };

	document.addEventListener("keydown", (e) => {
		if (!current) return;
		if (e.key === "Escape") return dismiss(current);
		if (e.key !== "Tab") return;
		// only what is on screen (getClientRects also covers the SVG circles in the Care Map);
		// inert parts behind the Care Map quit question are skipped
		const items = [...current.querySelectorAll(FOCUSABLE)].filter((el) => el.getClientRects().length && !el.closest("[inert]"));
		if (!items.length) return;
		const first = items[0];
		const last = items[items.length - 1];
		if (e.shiftKey && document.activeElement === first) {
			e.preventDefault();
			last.focus();
		} else if (!e.shiftKey && document.activeElement === last) {
			e.preventDefault();
			first.focus();
		}
	});

	// ---------- Book your session ----------
	if (bookPopup) {
		const links = [...bookPopup.querySelectorAll(".cs-clinic-link")];
		links.forEach((link) => link.addEventListener("click", () => setClinic(link.dataset.clinic)));

		const openBook = (trigger) => {
			const mine = getClinic();
			links.forEach((link) => link.classList.toggle("cs-mine", link.dataset.clinic === mine));
			open(bookPopup, trigger, bookPopup.querySelector(".cs-clinic-link.cs-mine") || links[0]);
		};

		document.addEventListener("click", (e) => {
			const trigger = e.target.closest("[data-book]");
			if (!trigger) return;
			e.preventDefault();
			openBook(trigger);
		});
	}

	// ---------- Request-style forms: "Request to book" and "Request a free consult" ----------
	// Each config names its pop-up, the attribute that opens it, its field id prefix,
	// its extra required check and the confirmation message.
	const requestForms = [
		{
			popup: requestPopup,
			trigger: "[data-request]",
			prefix: "request",
			onOpen: (form, trigger) => {
				if (trigger.dataset.service) form.elements.service.value = trigger.dataset.service;
			},
			extraChecks: (form) => [[form.elements.service, "request-service-error", !!form.elements.service.value, "Please pick a service."]],
			doneText: (form, firstName, clinic, phone, service) => {
				const what = service === "Not sure yet" ? "session" : service.toLowerCase();
				return `Thanks, ${firstName}. The ${clinic} team will call you within one business day to book your ${what}. Need us sooner? Call ${phone}.`;
			},
		},
		{
			popup: document.getElementById("consult-popup"),
			trigger: "[data-consult]",
			prefix: "consult",
			// data-variant="team" or "combine" swaps in the team version of the form
			onOpen: (form, trigger) => {
				const variant = trigger.dataset.variant || "individual";
				form.elements.request_type.value = variant;
				const popup = form.closest(".cs-popup");
				popup.querySelectorAll("[data-for]").forEach((el) => {
					const on = el.dataset.for.split(" ").includes(variant);
					el.hidden = !on;
					// a choice left over from the other version should not be sent
					if (!on) el.querySelectorAll("input[type=radio]").forEach((radio) => (radio.checked = false));
				});
				popup.querySelectorAll(`[data-${variant}]`).forEach((el) => (el.textContent = el.dataset[variant]));
				form.querySelectorAll('[data-for]:not([hidden]) input[name="goal"]').forEach((radio) => (radio.checked = radio.value === trigger.dataset.goal));
			},
			extraChecks: (form) =>
				form.elements.request_type.value === "individual"
					? [[form.querySelector('input[name="goal"]'), "consult-goal-error", !!form.querySelector('input[name="goal"]:checked'), "Please pick a goal."]]
					: [[form.elements.team, "consult-team-error", form.elements.team.value.trim().length > 1, "Please add the team or organization."]],
			doneText: (form, firstName, clinic, phone) =>
				`Thanks, ${firstName}. A coach will call you within one business day to book your free 15 minute consult. Need us sooner? Call ${clinic} at ${phone}.`,
		},
		{
			popup: applyPopup,
			trigger: "[data-apply]",
			prefix: "apply",
			// data-role="Physiotherapist" picks the role; a plain "Apply" button clears it
			onOpen: (form, trigger) => (form.elements.role.value = trigger.dataset.role || ""),
			extraChecks: (form) => {
				const file = form.elements.resume.files[0];
				const resumeError = !file
					? "Please attach your resume."
					: !/\.(pdf|docx?)$/i.test(file.name)
						? "Please attach a PDF or Word file."
						: file.size > 8 * 1024 * 1024
							? "Please attach a file under 8 MB."
							: "";
				return [
					[form.elements.role, "apply-role-error", !!form.elements.role.value, "Please pick a role."],
					[form.elements.experience_level, "apply-experience-error", !!form.elements.experience_level.value, "Please pick your experience level."],
					[form.elements.availability, "apply-availability-error", !!form.elements.availability.value, "Please pick full-time or part-time."],
					[form.elements.resume, "apply-resume-error", !resumeError, resumeError],
				];
			},
			doneText: (form, firstName) => `Thanks, ${firstName}. We have your application and the team will be in touch if it is a fit.`,
		},
	];

	requestForms.forEach((config) => {
		const popup = config.popup;
		if (!popup) return;
		const form = popup.querySelector("form");
		const done = popup.querySelector(".cs-request-done");
		const fields = form.elements;
		const submit = form.querySelector('[type="submit"]');
		const submitLabel = submit.textContent;
		const submitError = document.getElementById(`${config.prefix}-submit-error`);

		// tracking fields from the URL
		try {
			const params = new URLSearchParams(location.search);
			["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid"].forEach((key) => {
				if (params.get(key) && fields[key]) fields[key].value = params.get(key);
			});
		} catch (e) {}
		if (fields.page) fields.page.value = (document.querySelector('link[rel="canonical"]') || {}).href || location.pathname;

		const preselectClinic = (key) => {
			key = key || getClinic();
			form.querySelectorAll('input[name="location"]').forEach((radio) => (radio.checked = radio.dataset.clinic === key));
		};

		document.addEventListener("click", (e) => {
			const trigger = e.target.closest(config.trigger);
			if (!trigger) return;
			e.preventDefault();
			done.hidden = true;
			form.hidden = false;
			config.onOpen(form, trigger);
			preselectClinic(trigger.dataset.clinic);
			open(popup, trigger, fields.name);
		});

		form.querySelectorAll('input[name="location"]').forEach((radio) => radio.addEventListener("change", () => setClinic(radio.dataset.clinic)));
		done.querySelector(".cs-done-close").addEventListener("click", () => close(popup));

		// (905) 783-8423 formatting as they type
		fields.phone.addEventListener("input", () => {
			const d = fields.phone.value.replace(/\D/g, "").replace(/^1/, "").slice(0, 10);
			fields.phone.value = d.length > 6 ? `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}` : d.length > 3 ? `(${d.slice(0, 3)}) ${d.slice(3)}` : d;
		});

		// Validation: messages are tied to their field so screen readers announce them
		const setError = (field, id, message) => {
			const el = document.getElementById(id);
			el.textContent = message || "";
			if (message) {
				field.setAttribute("aria-invalid", "true");
				field.setAttribute("aria-describedby", id);
			} else {
				field.removeAttribute("aria-invalid");
				field.removeAttribute("aria-describedby");
			}
			return !message;
		};

		// focusFirst moves focus to the first problem on submit; live re-checks while typing leave focus alone
		const validate = (focusFirst = true) => {
			const p = config.prefix;
			const checks = [
				[fields.name, `${p}-name-error`, fields.name.value.trim().length > 1, "Please add your name."],
				[fields.phone, `${p}-phone-error`, fields.phone.value.replace(/\D/g, "").length >= 10, "Please add a 10 digit phone number."],
				[fields.email, `${p}-email-error`, /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fields.email.value.trim()), "Please add a valid email."],
				[form.querySelector('input[name="location"]'), `${p}-location-error`, !!form.querySelector('input[name="location"]:checked'), "Please pick a clinic."],
				...config.extraChecks(form),
			];
			let firstInvalid = null;
			checks.forEach(([field, id, ok, message]) => {
				if (!setError(field, id, ok ? "" : message) && !firstInvalid) firstInvalid = field;
			});
			if (firstInvalid && focusFirst) firstInvalid.focus();
			return !firstInvalid;
		};

		// re-check as they fix a field that was flagged
		form.addEventListener("input", (e) => e.target.getAttribute("aria-invalid") && validate(false));
		form.addEventListener("change", (e) => e.target.getAttribute("aria-invalid") && validate(false));

		form.addEventListener("submit", (e) => {
			e.preventDefault();
			if (!validate()) return;

			const chosen = form.querySelector('input[name="location"]:checked');
			const clinic = chosen.value;
			const phone = chosen.dataset.phone;
			const service = fields.service ? fields.service.value : fields.role ? fields.role.value : "Performance training";
			submitError.textContent = "";
			submit.disabled = true;
			submit.textContent = "Sending";

			try {
				const lead = { event: "generate_lead", form: form.getAttribute("name"), service, clinic };
				if (fields.request_type) lead.request_type = fields.request_type.value;
				(window.dataLayer = window.dataLayer || []).push(lead);
			} catch (err) {}

			const reset = () => {
				submit.disabled = false;
				submit.textContent = submitLabel;
			};

			// forms with a file (the careers resume) post as multipart; the browser sets that header itself
			const multipart = form.enctype === "multipart/form-data";
			fetch("/", {
				method: "POST",
				headers: multipart ? {} : { "Content-Type": "application/x-www-form-urlencoded" },
				body: multipart ? new FormData(form) : new URLSearchParams(new FormData(form)).toString(),
			})
				.then((response) => {
					if (!response.ok) throw new Error(response.status);
					// services with their own thank you page go there (it also fires the lead event in analytics)
					let pages = {};
					try {
						pages = JSON.parse(form.dataset.thankYou || "{}");
					} catch (err) {}
					// a form-wide thank you page (the consult form) wins over the inline confirmation
					const thankYou = pages[service] || form.dataset.thankYouUrl;
					if (thankYou) {
						window.location.href = thankYou;
						return;
					}
					const firstName = fields.name.value.trim().split(" ")[0];
					done.querySelector(".cs-done-text").textContent = config.doneText(form, firstName, clinic, phone, service);
					form.reset();
					reset();
					form.hidden = true;
					done.hidden = false;
					done.focus();
				})
				.catch(() => {
					reset();
					submitError.textContent = `Sorry, that did not send. Please call ${phone}.`;
				});
		});
	});
})();
