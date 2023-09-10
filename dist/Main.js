const button = document.querySelector("#menub"),
  menu = document.querySelector("#menu");
function menuf() {
  menu.classList.toggle("active"),
    button.classList.toggle("change"),
    menu.classList.toggle("height"),
    menu.classList.contains("active")
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
}
function reveal() {
  for (var e = document.querySelectorAll(".reveal"), t = 0; t < e.length; t++) {
    var o,
      s = window.innerHeight;
    e[t].getBoundingClientRect().top < s - 150 && e[t].classList.add("active");
  }
}
function online() {
  document.querySelector(".status").innerHTML = "website status:  Online";
}
function offline() {
  document.querySelector(".status").innerHTML = "website status:  Offline";
}
button.addEventListener("click", menuf),
  window.addEventListener("scroll", reveal),
  (topbutton = document.querySelector("#totopbutton")),
  window.addEventListener("scroll", () => {
    window.pageYOffset > 300
      ? topbutton.classList.add("activegtt")
      : topbutton.classList.remove("activegtt");
  }),
  (document.querySelector(".status").innerHTML = "website status:  Online"),
  document.addEventListener("contextmenu", (e) => e.preventDefault());
const darklightbutton = document.querySelector("#tg"),
  darklightbuttonm = document.querySelector("#tg1"),
  darklighttoggle = document.querySelector("#darkmode");
darklightbutton.addEventListener("click", () => {
  "dark" === localStorage.getItem("theme")
    ? (darklighttoggle.classList.toggle("dark"),
      window.localStorage.setItem("theme", "light"))
    : (darklighttoggle.classList.toggle("dark"),
      window.localStorage.setItem("theme", "dark"));
}),
  darklightbuttonm.addEventListener("click", () => {
    "dark" === localStorage.getItem("theme")
      ? (darklighttoggle.classList.toggle("dark"),
        window.localStorage.setItem("theme", "light"))
      : (darklighttoggle.classList.toggle("dark"),
        window.localStorage.setItem("theme", "dark"));
  }),
  darklighttoggle.classList.add(window.localStorage.getItem("theme"));
const showmoreb = document.querySelector("#showmoreb"),
  hidemoreb = document.querySelector("#hidemoreb"),
  showmore = document.querySelector("#showmoreclass"),
  tr = document.querySelector("#tran");
function sc() {
  tr.scrollIntoView();
}
showmoreb.addEventListener("click", () => {
  showmore.classList.toggle("active"),
    showmore.classList.toggle("heightdiv"),
    showmoreb.classList.toggle("hidden");
}),
  hidemoreb.addEventListener("click", () => {
    showmore.classList.toggle("active"),
      showmore.classList.toggle("heightdiv"),
      showmoreb.classList.toggle("hidden");
  });
const ourworks = document.querySelector("#ourwork");
function ourwork() {
  ourworks.scrollIntoView();
}
const services = document.querySelector("#serv");
function serv() {
    // let position = document.querySelector("#serv").getBoundingClientRect();
    // window.scrollTo(position.left, position.top + window.scrollY - 700);
    document.querySelector("#serv").scrollIntoView({ behavior: 'smooth' });
  }
  function serv1() {
    document.querySelector("#serv").scrollIntoView({ behavior: 'smooth' });
}
function soon() {
  ((comingsoon = document.querySelector(".soon")).innerHTML = "Coming Soon"),
    comingsoon.classList.remove("transform"),
    comingsoon.classList.remove("hover:scale-125");
}
function soon1() {
  ((comingsoon1 = document.querySelector(".soon1")).innerHTML = "Coming Soon"),
    comingsoon1.classList.remove("transform"),
    comingsoon1.classList.remove("hover:scale-125");
}
document.addEventListener("click", function () {
  menu.classList.remove("active"),
    button.classList.remove("change"),
    menu.classList.remove("height"),
    (document.body.style.overflow = "visible");
}),
  document.querySelector("nav").addEventListener("click", function (e) {
    e.stopPropagation();
  }),
  window.addEventListener("scroll", () => {
    let e = document.body.scrollTop || document.documentElement.scrollTop,
      t =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight,
      o = (e / t) * 100;
    document.querySelector("#progress").style.width = `${o}%`;
  }),
  (date = new Date()),
  (document.getElementById("copyrights").innerText = date.getFullYear());

  let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".three");
let started = false;

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      nums.forEach((nums) => startcount(nums));
    }
    started = true;
  }
};

function startcount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;

    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 500 / goal);
}
