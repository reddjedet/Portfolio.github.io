const btnSwitch = document.querySelector("#switch");

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle("active");

  //guardar en modo localstorage para que los cambios persistan al f5
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark-mode", "true");
  } else {
    localStorage.setItem("dark-mode", "false");
  }
});

//obtenemos el modo actual
if (localStorage.getItem("dark-mode") == "true") {
  document.body.classList.add("dark");
  btnSwitch.classList.add("active");
} else {
  document.body.classList.remove("dark");
  btnSwitch.classList.remove("active");
}

/* Click en el icono */
const logo = document.querySelector("#logo");

logo.addEventListener("click", () => {
  alert("Quidel Christian quiere ser parte del mundo IT.");
});
