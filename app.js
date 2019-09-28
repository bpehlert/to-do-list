const ul = document.querySelector("#toDoList");
const addBtn = document.querySelector("#addBtn");
const userInput = document.querySelector("#userInput");

function onKeypress(e) {
  if (userInput.value.length > 0 && e.keyCode === 13) createItem();
}

function onClick() {
  if (userInput.value.length > 0) createItem();
}

function toggleDone() {
  this.classList.toggle("done");
}

function deleteItem() {
  ul.removeChild(this.parentNode);
}

function createItem() {
  const item = document.createElement("span");
  const li = document.createElement("li");
  const deleteBtn = document.createElement("button");
  li.appendChild(document.createTextNode(userInput.value));
  deleteBtn.appendChild(document.createTextNode("x"));
  deleteBtn.addEventListener("click", deleteItem);
  li.addEventListener("click", toggleDone);
  item.append(li, deleteBtn);
  ul.appendChild(item);
  userInput.value = "";
}

addBtn.addEventListener("click", onClick);
userInput.addEventListener("keypress", onKeypress);
