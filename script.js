"use strict";
//  get data from user input
const nameInput = document.querySelector(".name-input-field");
const cours = document.querySelector(".cours-input-field");
const author = document.querySelector(".author-input-field");
const btn = document.querySelector(".btn");
const addToList = document.querySelector(".customer-list");
//  submit data
btn.addEventListener("click", getInput);
function getInput(e) {
  e.preventDefault();
  let usr = nameInput.value;
  let crs = cours.value;
  let aut = author.value;
  if (usr === "" || crs === "" || aut === "") {
    document.querySelector(".submit").disable = false;
    alert("fill the inputs");
  } else {
    document.querySelector(".submit").disable = true;
    generateCard(usr, crs, aut);
    nameInput.value = "";
    cours.value = "";
    author.value = "";
  }
}

function generateCard(usr, crs, aut) {
  let cardCreate = document.createElement("div");
  cardCreate.classList.add("card-body");
  cardCreate.innerHTML = `
  <img src="imgs/img-${randomImg()}.jpg" class="img-card" />
  <div class="card-body">
  <h6 class="name">
    <p class="n-yellow">Name:</p>
    <span class="user">${usr}</span>
  </h6>
  <h6 class="cours">
    <p class="n-green">Cours:</p>
    <span class="user">${crs}</span>
  </h6>
  <h6 class="author">
    <p class="n-red">Author:</p>
    <span class="user">${aut}</span>
  </h6>
</div>
  `;
  addToList.appendChild(cardCreate);
}
//  generate card after user's inputs
function randomImg() {
  let random = Math.floor(Math.random() * 4) + 1;
  return random;
}
//  get random image
