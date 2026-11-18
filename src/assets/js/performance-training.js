// Performance pages: goal tabs (team pages) and the "Show the full report" button on phones.
(() => {
	// Tabs, with arrow-key movement between them (the standard tab pattern)
	document.querySelectorAll("#goals .cs-tabs").forEach((tabs) => {
		const buttons = [...tabs.querySelectorAll('[role="tab"]')];
		const select = (button, focus) => {
			buttons.forEach((b) => {
				const on = b === button;
				b.setAttribute("aria-selected", String(on));
				b.tabIndex = on ? 0 : -1;
				document.getElementById(b.getAttribute("aria-controls")).hidden = !on;
			});
			if (focus) button.focus();
		};
		buttons.forEach((button, i) => {
			button.addEventListener("click", () => select(button));
			button.addEventListener("keydown", (e) => {
				const move = { ArrowRight: 1, ArrowLeft: -1, Home: -i, End: buttons.length - 1 - i }[e.key];
				if (move === undefined) return;
				e.preventDefault();
				select(buttons[(i + move + buttons.length) % buttons.length], true);
			});
		});
	});

	// Report sheets are clipped on phones (CSS, under 700px); the button under each shows the rest
	document.querySelectorAll(".cs-sheet-more button").forEach((button) => {
		button.addEventListener("click", () => {
			const sheet = document.getElementById(button.getAttribute("aria-controls"));
			sheet.classList.remove("cs-sheet-clip");
			button.setAttribute("aria-expanded", "true");
			button.parentElement.hidden = true;
			sheet.setAttribute("tabindex", "-1");
			sheet.focus({ preventScroll: true });
		});
	});
})();
