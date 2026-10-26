async function loadComponents(params) {
  const header = await fetch("components/header.html");
  const footer = await fetch("components/footer.html");

  document.getElementById("header").innerHTML = await header.text();
  document.getElementById("footer").innerHTML = await footer.text();
}
loadComponents();

//

function openMenu() {
  const menu = document.getElementById("menu-tray");
  const toggle = document.querySelector(".mbl .menu");
  const isOpening = menu.hidden;

  menu.hidden = !isOpening;
  toggle.setAttribute("aria-expanded", String(isOpening));
  toggle.setAttribute(
    "aria-label",
    isOpening ? "Close navigation menu" : "Open navigation menu",
  );
}
