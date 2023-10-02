// Install Bootstrap JS
var script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js';
document.head.appendChild(script);
document.body.appendChild(script);

// Navbar Template
const template = document.createElement('template');
template.innerHTML = `
  <h1>Website test</h1>
  <a href="/">Test link</a>
`;
const top = document.getElementById('top')
document.body.insertBefore(template.content, top);