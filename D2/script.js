window.addEventListener("DOMContentLoaded", () => {
  const btnSetDark = document.getElementById("setDark");
  const btnRemDark = document.getElementById("remDark");

  btnSetDark.onclick = setDarkTheme;
  btnRemDark.onclick = remDarkTheme;

  loadThemesStyle();
});

const loadThemesStyle = () => {
  const themeInStorage = localStorage.getItem("theme");

  if (themeInStorage) {
    localStorage.setItem("theme", "dark");
    document.documentElement.classList.add("dark");
  } else {
    localStorage.removeItem("theme");
    document.documentElement.classList.remove("dark");
  }
};

const setDarkTheme = () => {
  localStorage.setItem("theme", "dark");
  loadThemesStyle();
};
const remDarkTheme = () => {
  localStorage.removeItem("theme");
  loadThemesStyle();
};

window.onload = function () {
  const nomeSalvato = localStorage.getItem("nome");
  if (nomeSalvato) {
    document.getElementById("nomeSalvato").textContent = nomeSalvato;
    document.getElementById("name").value = nomeSalvato;
  }
  startCounter();
};

function salvaNome() {
  const nome = document.getElementById("name").value;
  localStorage.setItem("nome", nome);
  document.getElementById("nomeSalvato").textContent = nome;
  document.getElementById("name").value = "";
}

function rimuoviNome() {
  localStorage.removeItem("nome");
  document.getElementById("nomeSalvato").textContent = "";
  document.getElementById("name").value = "";
}

function startCounter() {
  let seconds = 0;
  const previousCounterValue = sessionStorage.getItem("counter");
  if (previousCounterValue) {
    seconds = parseInt(previousCounterValue);
  }

  setInterval(function () {
    seconds++;
    document.getElementById("counter").textContent = seconds;
    sessionStorage.setItem("counter", seconds.toString());
  }, 1000);
}
