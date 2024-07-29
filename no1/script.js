
const tombol = document.getElementById("hamburger-menu");
const menu = document.querySelector(".menu");

tombol.addEventListener("click", () => {
  menu.classList.toggle("aktif");
});
