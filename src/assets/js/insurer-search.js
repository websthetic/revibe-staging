// "Which insurers do you direct bill?" (layouts/service.html, s.insurers): typing filters the list
// and says whether we bill that insurer; on phones the list starts at six with a "Show all" button.
(() => {
	const input = document.getElementById("insurer-search");
	const list = document.getElementById("insurer-list");
	if (!input || !list) return;
	const message = document.querySelector(".cs-insurer-message");
	const insurers = [...list.querySelectorAll(".cs-insurer")];
	const toggle = list.querySelector(".cs-insurers-toggle");

	toggle.addEventListener("click", () => {
		const collapsed = list.classList.toggle("cs-collapsed");
		toggle.setAttribute("aria-expanded", String(!collapsed));
		toggle.querySelector("span").textContent = collapsed ? `Show all ${insurers.length} insurers` : "Show fewer";
		if (collapsed) document.getElementById("insurers").scrollIntoView({ behavior: "smooth", block: "start" });
	});

	// compare letters and numbers only, so "sun life" finds "Sun Life Financial"
	const plain = (text) => text.toLowerCase().replace(/[^a-z0-9]/g, "");
	const listOut = (names) => (names.length === 1 ? names[0] : `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`);

	input.addEventListener("input", () => {
		const query = plain(input.value);
		const searching = query.length > 1;
		const hits = [];
		insurers.forEach((item) => {
			const hit = searching && (plain(item.dataset.name).includes(query) || plain(item.dataset.also || "").includes(query));
			item.classList.toggle("cs-hit", hit);
			if (hit) hits.push(item.dataset.name);
		});
		list.classList.toggle("cs-filtering", searching);
		if (!searching) message.textContent = "";
		else message.textContent = hits.length ? `Yes, we direct bill ${listOut(hits)}.` : "Not on our list. Call us with your card in hand and we will check before you book.";
	});
})();
