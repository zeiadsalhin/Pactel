const darklightbuttona = document.getElementById("tg11");
const darklighttoggle = document.getElementById("darkmode");

darklightbuttona.addEventListener("click", () => {
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

//

//nav menu

const button = document.querySelector("#menub"); // Hamburger Icon
const menu = document.querySelector("#menu"); // Menu

button.addEventListener("click", menuf);
function menuf() {
  menu.classList.toggle("active");
  button.classList.toggle("change");
  menu.classList.toggle("height");

  if (menu.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
}

//

const post = document.getElementById("parm");

// date of publish
let date = "2020";

// title
let title = "t";

//image
let image = "founder.webp";

// article
let article = "tsadddddddddddddddddd";

//link
let link = "";

//content
let content = `

<div
      class="dark:bg-gray-500 dark:text-gray-200 flex-col w-auto text-left px-5 m-1 mb-20 text-xl md:py-5 py-10 bg-gray-200 shadow-md"
    >
      <h1 class="m-5">${title}</h1>
      <img src="${image}" />
      <span class="text-xs text-gray-600 dark:text-gray-300 p-2">Published ${date}</span>
      <hr class="m-2 border-gray-400 dark:border-gray-200" />
      <p class="text-md mx-auto">${article}</p>
    </div>

          `;

post.insertAdjacentHTML("afterend", content);
