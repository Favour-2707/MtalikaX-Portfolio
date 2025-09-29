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
