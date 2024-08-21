document.addEventListener("DOMContentLoaded", function () {
  fetch("Navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("navbar").innerHTML = data;
    });

  fetch("Footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("footer").innerHTML = data;
    });
});
