// Install Bootstrap JS
var script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js';
document.head.appendChild(script);
document.body.appendChild(script);

// Navbar Template
let nb_en = `<link rel="stylesheet" href="style.css">
<script src="script.js"></script>

<header class="p-3 text-bg-dark">
  <div class="container">
    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <li><a href="/" class="nav-link px-2 text-white" style="font-size:1.4em; line-height:85%;"><b>BirdOne  </b></a></li>
        <li><a href="/" class="nav-link px-2 text-white">Home</a></li>
        <li><a href="/montesmart" class="nav-link px-2 text-white">MonteSmart</a></li>
        <li><a href="/wingo" class="nav-link px-2 text-white">Wingo Memorial</a></li>
        <li><a href="#" class="nav-link px-2 text-secondary disabled">Bird Web <span style="font-size:small">(Coming Soon)</span></a></li>
      </ul>

      <div class="text-end">
        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 wingo">
          <li><a href="/th" class="nav-link px-2 text-white"><i class="bi bi-globe2"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
</header>`;



// Navbar Template (OLD)
function navbar(lang) {
  var z, i, elmnt, file, xhttp;

  async function loadNavbar() {
    if lang == "en" {
      const response = await fetch('src/navbar_en.html');
    } else if lang == "th" {
      const response = await fetch('src/navbar_th.html');
    } else {
      alert(`
      Navbar error: Invalid language
      `)
    }
    const navbarHTML = await response.text();
    document.getElementById('navbarContainer').innerHTML = navbarHTML;
  }

  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
            loadNavbar();
          }
          if (this.status == 404) { elmnt.innerHTML = "Navbar unavailable"; }
          elmnt.removeAttribute("w3-include-html");
          navbar();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
};
