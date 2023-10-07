const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

const registrar = document.getElementById("registrar");
registrar.addEventListener("click", () => {
  const signIn = document.getElementById("sign-in-container");
  const signUp = document.getElementById("sign-up-container");
  signIn.classList.add("block");
  signUp.classList.add("op");
});
