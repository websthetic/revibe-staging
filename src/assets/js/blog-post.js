// Blog posts (layouts/post.html): builds the contents list from the post's h2s,
// in the sidebar on desktop and a fold-open list above the text on phones,
// and marks the section in view in the sidebar list.
(function () {
	const content = document.getElementById("post-content");
	if (!content) return;

	const headings = [...content.querySelectorAll("h2")];
	if (!headings.length) return;

	headings.forEach((h, i) => {
		if (!h.id) {
			const slug = h.textContent.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
			h.id = "section-" + (i + 1) + (slug ? "-" + slug : "");
		}
	});

	const desktop = document.querySelector(".cs-toc");
	const mobile = document.querySelector(".cs-toc-mobile");

	[desktop, mobile].forEach((box) => {
		if (!box) return;
		const list = box.querySelector(".cs-toc-list");
		headings.forEach((h) => {
			const li = document.createElement("li");
			const a = document.createElement("a");
			a.href = "#" + h.id;
			a.className = "cs-toc-link";
			a.textContent = h.textContent.trim();
			li.appendChild(a);
			list.appendChild(li);
		});
		box.hidden = false;
	});

	// picking a section on a phone folds the list away again
	if (mobile) mobile.addEventListener("click", (e) => e.target.closest("a") && (mobile.open = false));

	if (!desktop || !("IntersectionObserver" in window)) return;
	const links = [...desktop.querySelectorAll(".cs-toc-link")];
	const io = new IntersectionObserver(
		(entries) =>
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;
				links.forEach((l) => l.classList.toggle("cs-active", l.getAttribute("href") === "#" + entry.target.id));
			}),
		{ rootMargin: "-20% 0px -70% 0px" }
	);
	headings.forEach((h) => io.observe(h));
})();
