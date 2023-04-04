//nav menu

const button = document.querySelector("#menub"); // Hamburger Icon
const menu = document.querySelector("#menu"); // Menu

button.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// const button2 = document.querySelector("#slang"); // Hamburger Icon
// const menu2 = document.querySelector("#lang"); // Menu

// button2.addEventListener("click", () => {
//   menu2.classList.toggle("hidden");
// });

// reveal items

window.addEventListener("scroll", reveal);

function reveal() {
  var revealitems = document.querySelectorAll(".reveal");

  for (var i = 0; i < revealitems.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = revealitems[i].getBoundingClientRect().top;
    var revealpoint = 100;

    if (revealtop < windowheight - revealpoint) {
      revealitems[i].classList.add("active");
    } else {
      revealitems[i].classList.remove("active");
    }
  }
}
