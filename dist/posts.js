// write

const post = document.getElementById("par");

// date of publish
let date = "2020";

// title
let title = "t";

// article
let article = "t";

//link
let link = "";

//content
let content = `

<div class="flex-col mr-5 ml-5 mb-10">
<div class="w-80 c4-izmir c4-image-zoom-in"><img src="./1.jpg" width="300" height="300" alt=""></div>
<p class="text-xs text-gray-600 dark:text-gray-300">Published at - ${date} </p>
<p class="text-2xl">${title}</p>
<hr class="m-2 border-gray-400 dark:border-gray-200">
<p>${article}</p>
<a href="${link}" class="text-xs flex justify-end">Read more...</a>
</div>

          `;

post.insertAdjacentHTML("afterend", content);
