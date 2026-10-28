(() => {
	const map = document.querySelector(".cs-care-map .cs-map");
	if (!map) return;

	const svg = map.querySelector(".cs-map-svg");
	const pop = map.querySelector(".cs-pop");
	const lines = [...svg.querySelectorAll("line")];
	const nodes = [...svg.querySelectorAll(".cs-node")];
	let current = null;

	// stagger the draw-in animation and play it when the map scrolls into view
	lines.forEach((line, i) => (line.style.animationDelay = `${0.25 + i * 0.03}s`));
	nodes.forEach((node, i) => (node.style.animationDelay = `${0.1 + i * 0.08}s`));
	if ("IntersectionObserver" in window) {
		svg.classList.add("cs-animate");
		const observer = new IntersectionObserver(
			(entries) => {
				if (!entries[0].isIntersecting) return;
				svg.classList.add("cs-in-view");
				observer.disconnect();
				// once the longest line has drawn, drop the animation so its fill doesn't override the selection dimming
				setTimeout(() => svg.classList.remove("cs-animate", "cs-in-view"), 2200);
			},
			{ threshold: 0.3 },
		);
		observer.observe(svg);
	}

	const close = (returnFocus) => {
		if (!current) return;
		const last = current;
		current = null;
		nodes.forEach((n) => {
			n.classList.remove("cs-active");
			n.setAttribute("aria-expanded", "false");
		});
		lines.forEach((l) => l.classList.remove("cs-hot"));
		svg.classList.remove("cs-has-selection");
		pop.classList.remove("cs-active");
		pop.hidden = true;
		if (returnFocus) last.focus();
	};

	// on desktop the popup opens beside the circle; on mobile it sits under the map (see local.less)
	const position = (circle) => {
		if (window.innerWidth < 700) {
			pop.style.left = pop.style.top = pop.style.transformOrigin = "";
			return;
		}
		const mapBox = map.getBoundingClientRect();
		const circleBox = circle.getBoundingClientRect();
		const width = Math.min(340, mapBox.width * 0.92);
		const x = circleBox.left - mapBox.left + circleBox.width / 2;
		const y = circleBox.top - mapBox.top + circleBox.height / 2;
		let left = x < mapBox.width / 2 ? x + circleBox.width * 0.62 : x - width - circleBox.width * 0.62;
		left = Math.max(16 - mapBox.left, Math.min(window.innerWidth - 16 - mapBox.left - width, left));
		const top = Math.max(-20, y - 120);
		pop.style.left = `${left}px`;
		pop.style.top = `${top}px`;
		pop.style.transformOrigin = `${x - left}px ${y - top}px`;
	};

	const open = (node) => {
		if (node === current) return close(true);
		const template = map.querySelector(`template[data-node="${node.dataset.node}"]`);
		if (!template) return;
		current = node;

		nodes.forEach((n) => {
			n.classList.toggle("cs-active", n === node);
			n.setAttribute("aria-expanded", String(n === node));
		});
		svg.classList.add("cs-has-selection");

		// light up the lines that touch this circle
		const circle = node.querySelector("circle:not(.cs-ring)");
		const cx = +circle.getAttribute("cx");
		const cy = +circle.getAttribute("cy");
		const touches = (x, y) => Math.abs(x - cx) < 1 && Math.abs(y - cy) < 1;
		lines.forEach((l) => {
			const hot = touches(l.x1.baseVal.value, l.y1.baseVal.value) || touches(l.x2.baseVal.value, l.y2.baseVal.value);
			l.classList.toggle("cs-hot", hot);
		});

		pop.replaceChildren(template.content.cloneNode(true));
		// name the dialog after the circle it describes
		pop.setAttribute("aria-label", pop.querySelector(".cs-pop-title").textContent);
		pop.querySelector(".cs-pop-close").addEventListener("click", (e) => {
			e.stopPropagation();
			close(true);
		});
		pop.hidden = false;
		position(circle);
		// restart the pop-in transition
		pop.classList.remove("cs-active");
		void pop.offsetWidth;
		pop.classList.add("cs-active");
	};

	nodes.forEach((node) => {
		node.setAttribute("aria-expanded", "false");
		node.setAttribute("aria-controls", pop.id);
		node.addEventListener("click", (e) => {
			e.stopPropagation();
			open(node);
		});
		node.addEventListener("keydown", (e) => {
			if (e.key === "Enter" || e.key === " ") {
				e.preventDefault();
				open(node);
			}
		});
	});

	document.addEventListener("click", (e) => {
		if (!map.contains(e.target)) close(false);
	});
	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape") close(map.contains(document.activeElement));
	});
	window.addEventListener("resize", () => current && position(current.querySelector("circle:not(.cs-ring)")));
})();
