// Setup a simple application with just index.html and main.js (no browserify/grunt and no React).

// 1) This application should display the current date & time on the DOM
// 2) There should be a button that when clicked, updates the current date & time on the DOM
// 3) Push it up to Github
// 4) Once you are finished, slack Emily or Leah your repo link

// *notes: this is a simple web application, so you will need to run the http server

const epochTime = new Date(0);

let domContainer = document.querySelector(".output");
let timeContainer = document.createElement("p");
timeContainer.textContent = (epochTime);

let updateButton = document.createElement("button")
updateButton.textContent = ("Update");
updateButton.addEventListener("click", () => {
    const updateTime = new Date();
    timeContainer.textContent = (updateTime);
})

domContainer.appendChild(timeContainer);
domContainer.appendChild(updateButton);


