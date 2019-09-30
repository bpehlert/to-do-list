const ul = document.querySelector("#toDoList");
const addBtn = document.querySelector("#addBtn");
const userInput = document.querySelector("#userInput");

function onAddBtnClick(e) {
  if (userInput.value.length > 0) createItem();
}

function onKeypress(e) {
  if (userInput.value.length > 0 && e.keyCode === 13) createItem();
}

function onItemClick(e) {
  const element = e.target;
  if (element.tagName === "LI") {
    toggleDone(element);
  } else if (element.tagName === "BUTTON") {
    deleteItem(element);
  }
}

function toggleDone(item) {
  item.classList.toggle("done");
}

function deleteItem(btn) {
  ul.removeChild(btn.parentNode);
}

function createItem() {
  const item = document.createElement("span");
  const li = document.createElement("li");
  const deleteBtn = document.createElement("button");

  li.appendChild(document.createTextNode(userInput.value));
  deleteBtn.appendChild(document.createTextNode("x"));

  item.append(li, deleteBtn);
  ul.appendChild(item);

  userInput.value = "";
}

addBtn.addEventListener("click", onAddBtnClick);
ul.addEventListener("click", onItemClick);
userInput.addEventListener("keypress", onKeypress);

// const ul = document.querySelector("#toDoList");
// const addBtn = document.querySelector("#addBtn");
// const userInput = document.querySelector("#userInput");

// function onKeypress(e) {
//   if (userInput.value.length > 0 && e.keyCode === 13) createItem();
// }

// function onClick() {
//   if (userInput.value.length > 0) createItem();
// }

// function toggleDone() {
//   this.classList.toggle("done");
// }

// function deleteItem() {
//   ul.removeChild(this.parentNode);
// }

// // Refactor with event delegation in mind: add click listener to ul,
// // but add check to see if it is a click on button or li
// function createItem() {
//   const item = document.createElement("span");
//   const li = document.createElement("li");
//   const deleteBtn = document.createElement("button");

//   li.appendChild(document.createTextNode(userInput.value));
//   li.addEventListener("click", toggleDone);

//   deleteBtn.appendChild(document.createTextNode("x"));
//   deleteBtn.addEventListener("click", deleteItem);

//   item.append(li, deleteBtn);
//   ul.appendChild(item);

//   userInput.value = "";
// }

// addBtn.addEventListener("click", onClick);
// userInput.addEventListener("keypress", onKeypress);
