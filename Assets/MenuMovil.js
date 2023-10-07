const mylinks = document.getElementById("mylinks");

// Menu en pantalla movil
function displayLinks() {
  mylinks.style.display = "block";
}

const menu = document.getElementById("menu-button");
menu.addEventListener("click", () => {
  displayLinks();
});

document.addEventListener("click", function (event) {
  if (!menu.contains(event.target) && event.target !== mylinks) {
    mylinks.style.display = "none";
  }
});

// if (screen.width > 750 && mylinks.style.display === "none") {
//   mylinks.style.display = "block";
// }
