// navbar.js

// document.addEventListener("DOMContentLoaded", function() {
//   const navbar = `
//       <div class="navbar">
//           <a href="../index.html">Home</a>
//           <a href="../français.html">Français</a>
//           <a href="../english.html">English</a>
//           <a href="../mathe.html">Mathe</a>
//           <a href="../programmieren.html">Programmieren</a>
//           <a href="../islam.html">Islam</a>
//           <a href="../العربية.html">العربية</a>
//       </div>
//   `;
//   document.getElementById("navbar").innerHTML = navbar;
// });

document.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
      navbar.style.padding = "5px 0"; // Verkleinert die Navbar beim Scrollen
  } else {
      navbar.style.padding = "10px 0";
  }
});
