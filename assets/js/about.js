/* About page: only fills the hero stat tiles from THEMES. */
(function () {
  "use strict";
  if (typeof THEMES === "undefined" || !Array.isArray(THEMES)) return;

  const themesEl = document.getElementById("aboutThemes");
  const sectionsEl = document.getElementById("aboutSections");
  const blocksEl = document.getElementById("aboutBlocks");

  const totalSections = THEMES.reduce((s, t) => s + (t.sectionsCount || 0), 0);
  const totalBlocks = THEMES.reduce((s, t) => s + (t.blocksCount || 0), 0);

  if (themesEl) themesEl.textContent = THEMES.length;
  if (sectionsEl) sectionsEl.textContent = totalSections;
  if (blocksEl) blocksEl.textContent = totalBlocks;
})();
