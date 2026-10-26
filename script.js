async function loadComponents(params) {
  const header = await fetch("components/header.html");
  const footer = await fetch("components/footer.html");

  document.getElementById("header").innerHTML = await header.text();
  document.getElementById("footer").innerHTML = await footer.text();
}
loadComponents();

//

function openMenu() {
  var x = document.getElementById("menu-tray");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
