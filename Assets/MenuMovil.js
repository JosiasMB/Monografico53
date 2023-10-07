const mylinks = document.getElementById("mylinks");
const closeButton = document.getElementById("close-button");

// Menu en pantalla movil
function displayLinks() {
  mylinks.style.display = "block";
}

const menu = document.getElementById("menu-button");
menu.addEventListener("click", () => {
  displayLinks();
});

closeButton.addEventListener("click", function (event) {
  if (!menu.contains(event.target) && event.target !== mylinks) {
    mylinks.style.display = "none";
  }
});
