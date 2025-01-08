const body = document.body;
const content = document.querySelector("#content");
const menuBtn = document.querySelector("#nav-btn");
const navSections = document.querySelector("#nav-sections");

function toggleHidden(element) {
  element.classList.toggle("show");
}

menuBtn.addEventListener("click", () => {
  toggleHidden(navSections);
  if (navSections.classList.value === "show") content.classList.add("blur");
  else content.classList.remove("blur");
});

const downloadCV = document.querySelector('#dwnld-cv');

downloadCV.addEventListener('click', () => { browser.downloads.download({ url: './sitemap.txt' }) });