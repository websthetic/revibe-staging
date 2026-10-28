// Care Map quiz pop-up (any [data-caremap]): seven questions, the results drawn on the Care Map,
// then a lead form that sends the answers to LeadConnector and shows a printable report.
// Markup in _includes/components/popup-forms/caremap-popup-quiz.html, content in _data/careMapQuiz.js,
// open/close and the focus trap come from popup-forms.js, styles in global.less.
(() => {
	const popup = document.getElementById("caremap-popup");
	if (!popup || !window.RevibePopups) return;

	const data = JSON.parse(document.getElementById("caremap-data").textContent);
	const questions = data.questions;
	const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

	const card = popup.querySelector(".cs-popup-card");
	const screensWrap = popup.querySelector(".cs-cm-screens");
	const closeButton = popup.querySelector(".cs-popup-close");
	const quit = popup.querySelector(".cs-cm-quit");
	const screens = {};
	popup.querySelectorAll("[data-screen]").forEach((el) => (screens[el.dataset.screen] = el));

	// area names and short descriptions come from the circle panels (_data/careMap.js)
	const titles = {};
	const taglines = {};
	popup.querySelectorAll("template[data-node]").forEach((template) => {
		const key = template.dataset.node;
		titles[key] = template.content.querySelector(".cs-cm-panel-title").textContent.trim();
		// first sentence only, e.g. "What your body can handle today."
		taglines[key] = template.content.querySelector(".cs-cm-panel-text").textContent.trim().split(". ")[0].replace(/\.?$/, ".");
	});

	const escapeHtml = (text) => String(text).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
	// "readiness, recovery, and mindset"
	const listAreas = (keys) => {
		const names = keys.map((key) => titles[key].toLowerCase());
		return `${names.slice(0, -1).join(", ")}, and ${names[names.length - 1]}`;
	};

	let answers = [];
	let current = 0;
	let focus = [];
	let highStress = false;

	const show = (name) => {
		Object.entries(screens).forEach(([key, el]) => (el.hidden = key !== name));
		card.scrollTo({ top: 0 });
		screens[name].querySelector("h2").focus({ preventScroll: true });
	};

	// ---------- Questions ----------
	const quiz = screens.quiz;
	const count = quiz.querySelector(".cs-cm-count");
	const track = quiz.querySelector(".cs-cm-track");
	const fill = quiz.querySelector(".cs-cm-fill");
	const question = quiz.querySelector(".cs-cm-question");
	const options = quiz.querySelector(".cs-cm-options");
	const prev = quiz.querySelector("[data-cm-prev]");
	const next = quiz.querySelector("[data-cm-next]");

	const renderQuestion = () => {
		const q = questions[current];
		const label = `Question ${current + 1} of ${questions.length}`;
		count.textContent = label;
		track.setAttribute("aria-valuenow", current + 1);
		track.setAttribute("aria-valuetext", label);
		fill.style.width = `${((current + 1) / questions.length) * 100}%`;
		question.textContent = q.text;
		prev.style.visibility = current ? "visible" : "hidden";
		next.textContent = current === questions.length - 1 ? "See my results" : "Next";
		next.style.visibility = answers[current] === undefined ? "hidden" : "visible";
		options.replaceChildren(
			...q.options.map((option, i) => {
				const button = document.createElement("button");
				button.type = "button";
				button.className = "cs-cm-option";
				button.setAttribute("aria-pressed", String(answers[current] === i));
				button.innerHTML = '<span class="cs-cm-marker" aria-hidden="true"></span><span></span>';
				button.lastChild.textContent = option.text;
				button.addEventListener("click", () => choose(i));
				return button;
			}),
		);
	};

	const choose = (i) => {
		answers[current] = i;
		options.querySelectorAll(".cs-cm-option").forEach((button, n) => button.setAttribute("aria-pressed", String(n === i)));
		next.style.visibility = "visible";
	};

	const goTo = (n) => {
		current = n;
		renderQuestion();
		question.focus({ preventScroll: true });
	};

	popup.querySelector("[data-cm-start]").addEventListener("click", () => {
		answers = [];
		current = 0;
		renderQuestion();
		show("quiz");
	});
	prev.addEventListener("click", () => current > 0 && goTo(current - 1));
	next.addEventListener("click", () => {
		if (answers[current] === undefined) return;
		if (current < questions.length - 1) return goTo(current + 1);
		calculate();
		renderResults();
		show("results");
	});

	// ---------- Results ----------
	// each area adds up its answer scores; the top three are the focus areas, ties broken by data.tieOrder.
	// Three or more answers from the bottom two options count as high stress.
	const calculate = () => {
		const scores = Object.fromEntries(data.areas.map((area) => [area, 0]));
		let low = 0;
		questions.forEach((q, i) => {
			scores[q.area] += q.options[answers[i]].score;
			if (answers[i] >= 2) low++;
		});
		highStress = low >= 3;
		focus = data.areas
			.slice()
			.sort((a, b) => scores[b] - scores[a] || data.tieOrder.indexOf(a) - data.tieOrder.indexOf(b))
			.slice(0, 3);
	};

	// the first tool of each focus area, then their second tools, up to four
	const pickTools = () => {
		const picked = [];
		[0, 1].forEach((n) =>
			focus.forEach((area) => {
				const tool = data.tools[area][n];
				if (tool && !picked.includes(tool) && picked.length < 4) picked.push(tool);
			}),
		);
		return picked;
	};

	const badges = (list) =>
		(list.innerHTML = focus
			.map((key, i) => `<li class="cs-cm-badge cs-rank-${i + 1}"><span>${escapeHtml(data.results.ranks[i])}</span>${escapeHtml(titles[key])}</li>`)
			.join(""));

	const results = screens.results;
	const svg = results.querySelector(".cs-map-svg");
	const nodes = [...svg.querySelectorAll(".cs-node")];
	const lines = [...svg.querySelectorAll("line")];
	const panel = results.querySelector(".cs-cm-panel");
	let openNode = null;

	const centre = (node) => {
		const circle = node.querySelector("circle:not(.cs-ring)");
		return [+circle.getAttribute("cx"), +circle.getAttribute("cy")];
	};

	// focus areas light up, plus the lines joining them to each other and to the centre
	const paintMap = () => {
		const hot = [...focus, "performance"].map((key) => centre(svg.querySelector(`[data-node="${key}"]`)));
		const isHot = (x, y) => hot.some(([cx, cy]) => Math.abs(x - cx) < 1 && Math.abs(y - cy) < 1);
		lines.forEach((line) => line.classList.toggle("cs-hot", isHot(line.x1.baseVal.value, line.y1.baseVal.value) && isHot(line.x2.baseVal.value, line.y2.baseVal.value)));
		nodes.forEach((node) => {
			const key = node.dataset.node;
			const rank = focus.indexOf(key);
			node.classList.remove("cs-rank-1", "cs-rank-2", "cs-rank-3");
			if (rank >= 0) node.classList.add(`cs-rank-${rank + 1}`);
			node.classList.toggle("cs-muted", rank < 0 && key !== "performance");
			node.setAttribute("aria-label", rank >= 0 ? `${titles[key]}, focus area ${rank + 1}` : titles[key]);
		});
	};

	const closePanel = (returnFocus) => {
		if (!openNode) return;
		const last = openNode;
		openNode = null;
		nodes.forEach((node) => {
			node.classList.remove("cs-active");
			node.setAttribute("aria-expanded", "false");
		});
		panel.hidden = true;
		if (returnFocus) last.focus();
	};

	const openPanel = (node) => {
		if (node === openNode) return closePanel(true);
		const template = popup.querySelector(`template[data-node="${node.dataset.node}"]`);
		if (!template) return;
		openNode = node;
		nodes.forEach((n) => {
			n.classList.toggle("cs-active", n === node);
			n.setAttribute("aria-expanded", String(n === node));
		});
		panel.replaceChildren(template.content.cloneNode(true));
		panel.setAttribute("aria-label", titles[node.dataset.node]);
		panel.querySelector(".cs-cm-panel-close").addEventListener("click", () => closePanel(true));
		panel.hidden = false;
		panel.scrollIntoView({ block: "nearest", behavior: reducedMotion ? "auto" : "smooth" });
		panel.querySelector(".cs-cm-panel-title").focus({ preventScroll: true });
	};

	nodes.forEach((node) => {
		node.setAttribute("aria-expanded", "false");
		node.setAttribute("aria-controls", panel.id);
		node.addEventListener("click", () => openPanel(node));
		node.addEventListener("keydown", (e) => {
			if (e.key !== "Enter" && e.key !== " ") return;
			e.preventDefault();
			openPanel(node);
		});
	});

	const renderResults = () => {
		closePanel(false);
		badges(results.querySelector(".cs-cm-badges"));
		results.querySelector(".cs-cm-summary").textContent = data.results[highStress ? "highStress" : "solid"].replace("{areas}", listAreas(focus));
		results.querySelector(".cs-cm-tools").innerHTML = pickTools()
			.map((tool) => `<li>${escapeHtml(tool)}</li>`)
			.join("");
		paintMap();
	};

	// ---------- Lead form ----------
	const lead = screens.lead;
	const form = lead.querySelector("form");
	const fields = form.elements;

	popup.querySelectorAll("[data-cm-lead]").forEach((button) =>
		button.addEventListener("click", () => {
			lead.querySelector(".cs-cm-lead-areas").innerHTML = `Your focus areas: ${focus.map((key) => `<strong>${escapeHtml(titles[key])}</strong>`).join(", ")}`;
			// the clinic they picked last time in any pop-up form
			let mine = "";
			try {
				mine = localStorage.getItem("revibe-clinic") || "";
			} catch (e) {}
			if (!form.querySelector('input[name="location"]:checked')) form.querySelectorAll('input[name="location"]').forEach((radio) => (radio.checked = radio.dataset.clinic === mine));
			show("lead");
		}),
	);
	lead.querySelector("[data-cm-results]").addEventListener("click", () => show("results"));

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
			[fields.firstName, fields.firstName.value.trim().length > 0, "Please add your first name."],
			[fields.email, /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fields.email.value.trim()), "Please add a valid email."],
		];
		let firstInvalid = null;
		checks.forEach(([field, ok, message]) => {
			if (!setError(field, ok ? "" : message) && !firstInvalid) firstInvalid = field;
		});
		if (firstInvalid && focusFirst) firstInvalid.focus();
		return !firstInvalid;
	};
	form.addEventListener("input", (e) => e.target.getAttribute("aria-invalid") && validate(false));

	form.addEventListener("submit", (e) => {
		e.preventDefault();
		if (!validate()) return;

		const firstName = fields.firstName.value.trim();
		const lastName = fields.lastName.value.trim();
		const chosen = form.querySelector('input[name="location"]:checked');
		const person = {
			name: lastName ? `${firstName} ${lastName}` : firstName,
			clinic: chosen ? chosen.value : "",
			concern: fields.concern.value.trim(),
			date: new Date().toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" }),
		};
		if (chosen) {
			try {
				localStorage.setItem("revibe-clinic", chosen.dataset.clinic);
			} catch (err) {}
		}

		try {
			(window.dataLayer = window.dataLayer || []).push({ event: "generate_lead", form: "caremap-quiz", clinic: person.clinic });
		} catch (err) {}

		// the report shows either way, so a failed send never costs them their results
		fetch(data.webhook, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				firstName,
				lastName,
				email: fields.email.value.trim(),
				phone: fields.phone.value.trim(),
				location: person.clinic,
				focus1: titles[focus[0]],
				focus2: titles[focus[1]],
				focus3: titles[focus[2]],
				concern: person.concern,
				source: "CareMap Quiz",
				caremapReport: emailReport(person),
			}),
		}).catch((err) => console.warn("Care Map webhook error:", err));

		renderReport(person);
		show("thanks");
	});

	// ---------- Report ----------
	const report = screens.thanks.querySelector(".cs-cm-report");
	const reportText = () => data.report[highStress ? "highStress" : "solid"].replace("{areas}", listAreas(focus));

	const renderReport = (person) => {
		report.querySelector(".cs-cm-report-date").textContent = person.date;
		report.querySelector(".cs-cm-report-greeting").textContent = `${person.name}'s Care Map`;
		report.querySelector(".cs-cm-report-clinic").textContent = person.clinic || "Revibe";
		badges(report.querySelector(".cs-cm-report-badges"));
		report.querySelector(".cs-cm-report-text").textContent = reportText();
		report.querySelector(".cs-cm-report-areas").innerHTML = data.areas
			.map((key) => {
				const rank = focus.indexOf(key);
				return `<li class="${rank >= 0 ? "cs-focus" : ""}">${rank >= 0 ? `<span class="cs-cm-report-rank">Focus ${rank + 1}</span>` : ""}<strong>${escapeHtml(titles[key])}</strong><span>${escapeHtml(taglines[key])}</span></li>`;
			})
			.join("");
		report.querySelector(".cs-cm-report-tools").innerHTML = pickTools()
			.map((tool) => `<li>${escapeHtml(tool)}</li>`)
			.join("");
		const concern = report.querySelector(".cs-cm-report-concern");
		concern.hidden = !person.concern;
		concern.querySelector("p").textContent = person.concern;
	};

	// a self-contained copy with inline styles, sent with the lead so the team (and emails) can show it
	const emailReport = (person) => {
		const green = "#00ad85";
		const label = (text) => `<div style="font-size:10px;text-transform:uppercase;letter-spacing:0.1em;color:#6b7378;font-weight:700;margin-bottom:8px">${text}</div>`;
		const badgeStyles = [`background:${green};color:#0d0d0d`, "background:#e6f5f1;color:#005a4d", "background:#f7f6f3;color:#005a4d"];
		const cells = data.areas.map((key) => {
			const rank = focus.indexOf(key);
			const tag = rank >= 0 ? `<div style="display:inline-block;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;background:${green};color:#0d0d0d;border-radius:10px;padding:2px 8px;margin-bottom:4px">Focus ${rank + 1}</div><br>` : "";
			return `<td style="padding:16px 20px;border-right:1px solid #edebe6;vertical-align:top;width:33%">${tag}<div style="font-size:13px;font-weight:800;text-transform:uppercase;letter-spacing:0.06em;color:${rank >= 0 ? "#005a4d" : "#8e9aa4"};margin-bottom:4px">${escapeHtml(titles[key])}</div><div style="font-size:11px;color:#6b7378;line-height:1.5">${escapeHtml(taglines[key])}</div></td>`;
		});
		return (
			`<div style="font-family:Montserrat,Arial,sans-serif;max-width:680px;margin:0 auto;border:1px solid #d1d8de;border-radius:16px;overflow:hidden;color:#363636">` +
			`<div style="background:#0d0d0d;padding:20px 28px;display:flex;justify-content:space-between;align-items:center"><span style="font-size:24px;font-weight:800;color:#ffffff;letter-spacing:0.04em">RE<span style="color:${green}">V</span>IBE</span><span style="font-size:12px;color:#d1d8de">Care Map results &nbsp;|&nbsp; ${escapeHtml(person.date)}</span></div>` +
			`<div style="padding:16px 28px;background:#e6f5f1;display:flex;justify-content:space-between;align-items:center"><span style="font-size:20px;font-weight:800;color:#0d0d0d">${escapeHtml(person.name)}</span>${person.clinic ? `<span style="font-size:12px;color:#363636;background:#ffffff;border-radius:20px;padding:3px 12px">${escapeHtml(person.clinic)}</span>` : ""}</div>` +
			`<div style="padding:20px 28px;border-bottom:1px solid #edebe6">${label("Focus areas")}<div style="margin-bottom:12px">${focus.map((key, i) => `<span style="display:inline-block;font-size:13px;font-weight:800;text-transform:uppercase;padding:6px 14px;border-radius:20px;margin:0 6px 6px 0;${badgeStyles[i]}">${escapeHtml(titles[key])}</span>`).join("")}</div><p style="font-size:13px;line-height:1.7;margin:0">${escapeHtml(reportText())}</p></div>` +
			`<table style="width:100%;border-collapse:collapse;border-bottom:1px solid #edebe6"><tr>${cells.slice(0, 3).join("")}</tr><tr>${cells.slice(3).join("")}</tr></table>` +
			`<div style="padding:16px 28px;border-bottom:1px solid #edebe6">${label("Recommended tools")}${pickTools()
				.map((tool) => `<span style="display:inline-block;background:#e6f5f1;border-radius:20px;padding:5px 12px;font-size:12px;color:#005a4d;margin:3px">${escapeHtml(tool)}</span>`)
				.join("")}</div>` +
			(person.concern ? `<div style="padding:16px 28px;background:#f7f6f3;border-bottom:1px solid #edebe6">${label("Main concern")}<p style="font-size:13px;font-style:italic;margin:0">${escapeHtml(person.concern)}</p></div>` : "") +
			`<div style="padding:16px 28px;background:#f7f6f3;text-align:center;font-size:11px;color:#6b7378">${escapeHtml(data.report.footer)}</div></div>`
		);
	};

	screens.thanks.querySelector("[data-cm-print]").addEventListener("click", () => window.print());

	// ---------- Opening, quitting and resetting ----------
	const showQuit = () => {
		quit.hidden = false;
		screensWrap.inert = true;
		closeButton.inert = true;
		quit.querySelector("[data-cm-stay]").focus();
	};

	const hideQuit = (restoreFocus = true) => {
		quit.hidden = true;
		screensWrap.inert = false;
		closeButton.inert = false;
		if (restoreFocus) closeButton.focus();
	};

	quit.querySelector("[data-cm-stay]").addEventListener("click", () => hideQuit());
	quit.querySelector("[data-cm-quit]").addEventListener("click", () => {
		hideQuit(false);
		window.RevibePopups.close(popup);
	});

	// the X, backdrop and Escape ask first once the quiz has started; Escape on the question means "keep going"
	window.RevibePopups.beforeClose(popup, () => {
		if (!quit.hidden) {
			hideQuit();
			return false;
		}
		if (screens.intro.hidden && answers.length) {
			showQuit();
			return false;
		}
		return true;
	});

	// every open starts fresh
	const reset = () => {
		answers = [];
		current = 0;
		focus = [];
		closePanel(false);
		hideQuit(false);
		form.reset();
		[fields.firstName, fields.email].forEach((field) => setError(field, ""));
		Object.entries(screens).forEach(([key, el]) => (el.hidden = key !== "intro"));
		card.scrollTo({ top: 0 });
	};

	document.addEventListener("click", (e) => {
		const trigger = e.target.closest("[data-caremap]");
		if (!trigger) return;
		e.preventDefault();
		reset();
		window.RevibePopups.open(popup, trigger, screens.intro.querySelector("h2"));
	});
})();
