// deklarasi tombol dan menu
const tombol = document.getElementById("hamburger-menu");
const menu = document.querySelector(".menu");

// membuat event click
// pada saat tombol di click, tambahkan class aktif pada class menu
// saat diklik lagi, maka class aktif dihilangkan dari class menu (toggle)
tombol.addEventListener("click", () => {
  menu.classList.toggle("aktif");
});
