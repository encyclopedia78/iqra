// navbar.js

document.addEventListener("DOMContentLoaded", function() {
  const navbar = `
      <div class="navbar">
          <a href="index.html">Home</a>
          <a href="francais.html">Francais</a>
          <a href="english.html">English</a>
          <a href="mathe.html">Mathe</a>
          <a href="about.html">Über Uns</a>
          <a href="services.html">Dienstleistungen</a>
          <a href="contact.html">Kontakt</a>
      </div>
  `;
  document.getElementById("navbar").innerHTML = navbar;
});
