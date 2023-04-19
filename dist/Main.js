//nav menu

const button = document.querySelector("#menub"); // Hamburger Icon
const menu = document.querySelector("#menu"); // Menu

button.addEventListener("click", menuf);
function menuf() {
  menu.classList.toggle("active");
  button.classList.toggle("change");
  menu.classList.toggle("height");
}

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

//go to top reveal

topbutton = document.querySelector("#totopbutton");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    topbutton.classList.add("activegtt");
  } else {
    topbutton.classList.remove("activegtt");
  }
});

// image slider
/*
var i = 0;
var images = [];
var time = 2000;

images[0] = "/m.jpg";
images[1] = "/1.jpg";
images[2] = "/2.jpg";
images[3] = "/3.jpg";

function imageslider() {
  document.slide.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("imageslider()", time);
}

window.onload = imageslider;
*/
// website status

document.querySelector(".status").innerHTML = "website status:  " + "Online";

function online() {
  document.querySelector(".status").innerHTML = "website status:  " + "Online";
}

function offline() {
  document.querySelector(".status").innerHTML = "website status:  " + "Offline";
}

document.addEventListener("contextmenu", (event) => event.preventDefault());

//dark mode

const darklightbutton = document.querySelector("#tg"); // Hamburger Icon
const darklightbuttonm = document.querySelector("#tg1");
const darklighttoggle = document.querySelector("#darkmode"); // Menu

darklightbutton.addEventListener("click", () => {
  // window.localStorage.setItem("theme", "dark");

  if (localStorage.getItem("theme") === "dark") {
    darklighttoggle.classList.toggle("dark");
    window.localStorage.setItem("theme", "light");
  } else {
    darklighttoggle.classList.toggle("dark");
    window.localStorage.setItem("theme", "dark");
  }
});

darklightbuttonm.addEventListener("click", () => {
  // window.localStorage.setItem("theme", "dark");

  if (localStorage.getItem("theme") === "dark") {
    darklighttoggle.classList.toggle("dark");
    window.localStorage.setItem("theme", "light");
  } else {
    darklighttoggle.classList.toggle("dark");
    window.localStorage.setItem("theme", "dark");
  }
});
darklighttoggle.classList.add(window.localStorage.getItem("theme"));

// show more

const showmoreb = document.querySelector("#showmoreb");
const hidemoreb = document.querySelector("#hidemoreb");
const showmore = document.querySelector("#showmoreclass");
const tr = document.querySelector("#tran");

showmoreb.addEventListener("click", () => {
  showmore.classList.toggle("active");
  showmore.classList.toggle("heightdiv");
  showmoreb.classList.toggle("hidden");
});

hidemoreb.addEventListener("click", () => {
  showmore.classList.toggle("active");
  showmore.classList.toggle("heightdiv");
  showmoreb.classList.toggle("hidden");
});

function sc() {
  tr.scrollIntoView();
}

// our work

const ourworks = document.querySelector("#ourwork");

function ourwork() {
  menu.classList.toggle("height");
  ourworks.scrollIntoView();
}

// load

// loader = document.querySelector(".spin-wrapper");

// window.addEventListener("load", () => {
//   loader.classList.toggle("loader");
// });

// store
function soon() {
  document.getElementById("soon").innerHTML = "Coming Soon";
  document.getElementById("soon").classList.remove("transform");
  document.getElementById("soon").classList.remove("hover:scale-125");
}
