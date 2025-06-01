function toggleAccordion(moduleId) {
  const content = document.getElementById(moduleId + "-content");
  const icon = document.getElementById(moduleId + "-icon");

  if (content.classList.contains("hidden")) {
    content.classList.remove("hidden");
    icon.classList.add("rotate-180");
  } else {
    content.classList.add("hidden");
    icon.classList.remove("rotate-180");
  }
}
