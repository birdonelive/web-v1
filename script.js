// Install Bootstrap JS
var script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js';
document.head.appendChild(script);
document.body.appendChild(script);

// Navbar Template
const nben = document.querySelector(".nben")
fetch("/src/nben.html")
.then(res=>res.text())
.then(data=>data{
  nben.innerHTML=data
})