// Therapists page (/therapists/): the clinic buttons and service chips filter the cards.
// Service chips with nobody at the chosen clinic are hidden. Without this script every therapist shows.
// Styles in therapists.less.
(() => {
	const clinicGroup = document.querySelector("#team-hero .cs-clinic-pick");
	const filters = document.querySelector("#team-grid .cs-filters");
	if (!clinicGroup || !filters) return;

	const clinicButtons = [...clinicGroup.querySelectorAll("[data-clinic]")];
	const chips = [...filters.querySelectorAll("[data-service]")];
	const people = [...document.querySelectorAll("#team-grid .cs-person")];
	const count = filters.querySelector(".cs-count");
	const empty = document.querySelector("#team-grid .cs-empty");

	const KEY = "revibe-clinic";
	let clinic = clinicButtons[0].dataset.clinic;
	let service = "all";

	// start at the clinic they picked last time anywhere on the site
	try {
		const saved = localStorage.getItem(KEY);
		if (clinicButtons.some((b) => b.dataset.clinic === saved)) clinic = saved;
	} catch (e) {}

	const has = (person, attr, value) => person.dataset[attr].split(" ").includes(value);

	const update = () => {
		clinicButtons.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.clinic === clinic)));

		// only offer services someone at this clinic actually provides
		const atClinic = people.filter((p) => has(p, "clinics", clinic));
		chips.forEach((chip) => {
			const key = chip.dataset.service;
			chip.hidden = key !== "all" && !atClinic.some((p) => has(p, "services", key));
		});
		if (chips.find((c) => c.dataset.service === service).hidden) service = "all";
		chips.forEach((chip) => chip.setAttribute("aria-pressed", String(chip.dataset.service === service)));

		let shown = 0;
		people.forEach((p) => {
			const on = has(p, "clinics", clinic) && (service === "all" || has(p, "services", service));
			p.hidden = !on;
			if (on) shown++;
		});
		const clinicName = clinicButtons.find((b) => b.dataset.clinic === clinic).textContent.trim();
		count.textContent = `${shown} ${shown === 1 ? "therapist" : "therapists"} in ${clinicName}`;
		empty.hidden = shown > 0;
	};

	clinicButtons.forEach((button) =>
		button.addEventListener("click", () => {
			clinic = button.dataset.clinic;
			try {
				localStorage.setItem(KEY, clinic);
			} catch (e) {}
			update();
		}),
	);
	chips.forEach((chip) =>
		chip.addEventListener("click", () => {
			service = chip.dataset.service;
			update();
		}),
	);

	clinicGroup.hidden = false;
	filters.hidden = false;
	update();
})();
