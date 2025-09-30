// Humberger menu
function myFunction() {
  var nav = document.getElementById("myLinks");
  var icon = document.getElementById("menu-icon");

  nav.classList.toggle("show");

  // Change icon between hamburger and X
  if (nav.classList.contains("show")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times"); // X icon
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
}

// Auto-close menu when link clicked
document.querySelectorAll("#myLinks a").forEach(link => {
  link.addEventListener("click", () => {
    var nav = document.getElementById("myLinks");
    var icon = document.getElementById("menu-icon");
    nav.classList.remove("show");

    // Reset icon back to hamburger
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  });
});


// Darkmode lightmode theme
let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})