let aktifA = document.querySelectorAll("nav ul li a");

aktifA.forEach(function (link) {
  link.addEventListener("click", function (e) {
    aktifA.forEach(function (gambar) {
      if (gambar.classList.contains("aktif")) {
        gambar.classList.remove("aktif");
      }
    });
    e.target.classList.add("aktif");
  });
});

let humburgerMenu = document.querySelector(".humburger-menu");
let navbar = document.querySelector("nav ul");
let badan = document.querySelector("body");

humburgerMenu.addEventListener("click", function () {
  navbar.classList.toggle("slide");
  document.body.classList.toggle("transparant");
});
