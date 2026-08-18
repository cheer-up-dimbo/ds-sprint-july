document.addEventListener("DOMContentLoaded", function () {
  // Figure out the relative path back to the site root from wherever this
  // page lives, by looking at how this very script was referenced.
  var root = "";
  var scripts = document.getElementsByTagName("script");
  for (var i = 0; i < scripts.length; i++) {
    var src = scripts[i].getAttribute("src") || "";
    var idx = src.indexOf("_static/custom.js");
    if (idx !== -1) {
      root = src.slice(0, idx);
      break;
    }
  }

  var homeLink = document.createElement("a");
  homeLink.href = root + "index.html";
  homeLink.className = "home-button";
  homeLink.title = "Home";
  homeLink.textContent = "🏠 Home";

  var navbarEnd = document.querySelector(".navbar-header-items__end");
  if (navbarEnd) {
    navbarEnd.insertBefore(homeLink, navbarEnd.firstChild);
  }
});
