
document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav");
  if (!button || !nav) return;

  button.addEventListener("click", () => {
    const opened = nav.classList.toggle("open");
    button.setAttribute("aria-expanded", opened ? "true" : "false");
    button.textContent = opened ? "×" : "☰";
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      button.setAttribute("aria-expanded", "false");
      button.textContent = "☰";
    });
  });
});
