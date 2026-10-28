// Careers page (/join-our-team/): the "Inside Revibe" team picker and the career pathway tabs
// whose steps light up in turn. Styles in careers.less.
// Without this script the first person and the first track show.
(() => {
	const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

	// a tab list: click or arrow keys pick a tab and show its panel; onSelect(panel) runs after
	const setupTabs = (tabs, onSelect = () => {}) => {
		const panels = tabs.map((tab) => document.getElementById(tab.getAttribute("aria-controls")));
		const select = (index, focus) => {
			tabs.forEach((tab, i) => {
				const on = i === index;
				tab.setAttribute("aria-selected", String(on));
				tab.tabIndex = on ? 0 : -1;
				panels[i].hidden = !on;
			});
			if (focus) tabs[index].focus();
			onSelect(panels[index]);
		};
		tabs.forEach((tab, i) => {
			tab.addEventListener("click", () => select(i));
			// left/right and up/down both work, so the vertical picker on desktop feels right too
			tab.addEventListener("keydown", (e) => {
				const keys = { ArrowRight: i + 1, ArrowDown: i + 1, ArrowLeft: i - 1, ArrowUp: i - 1, Home: 0, End: tabs.length - 1 };
				if (!(e.key in keys)) return;
				e.preventDefault();
				select((keys[e.key] + tabs.length) % tabs.length, true);
			});
		});
		return panels;
	};

	// ---------- Inside Revibe ----------
	const inside = document.getElementById("inside");
	if (inside) {
		const picks = [...inside.querySelectorAll('[role="tab"]')];
		// on phones the faces scroll sideways; keep the picked one in view
		setupTabs(picks, (panel) => {
			const tab = document.getElementById(panel.getAttribute("aria-labelledby"));
			tab.scrollIntoView({ block: "nearest", inline: "nearest", behavior: reducedMotion.matches ? "auto" : "smooth" });
		});
	}

	// ---------- Career pathways ----------
	const pathways = document.getElementById("pathways");
	if (pathways) {
		let timer = null;

		// steps light up one by one, hold, then start again; with reduced motion they all stay lit
		const light = (panel) => {
			clearTimeout(timer);
			const steps = [...panel.querySelectorAll(".cs-step")];
			if (reducedMotion.matches) {
				steps.forEach((s) => s.classList.add("cs-lit"));
				return;
			}
			let n = 0;
			const tick = () => {
				steps.forEach((s, i) => s.classList.toggle("cs-lit", i < n));
				if (n < steps.length) {
					n++;
					timer = setTimeout(tick, 550);
				} else {
					n = 0;
					timer = setTimeout(tick, 1600);
				}
			};
			tick();
		};

		const panels = setupTabs([...pathways.querySelectorAll('[role="tab"]')], light);

		// only animate while the section is on screen
		if ("IntersectionObserver" in window) {
			new IntersectionObserver((entries) => {
				const current = panels.find((panel) => !panel.hidden);
				if (entries[0].isIntersecting) light(current);
				else clearTimeout(timer);
			}).observe(pathways);
		} else {
			light(panels[0]);
		}
	}
})();
