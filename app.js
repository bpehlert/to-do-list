const ul = document.querySelector("#toDoList");
const addBtn = document.querySelector("#addBtn");
const userInput = document.querySelector("#userInput");

function onKeypress(e) {
  if (userInput.value.length > 0 && e.keyCode === 13) createLi();
}

function onClick() {
  if (userInput.value.length > 0) createLi();
}

function createLi() {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(userInput.value));
  ul.appendChild(li);
  userInput.value = "";
}

addBtn.addEventListener("click", onClick);
userInput.addEventListener("keypress", onKeypress);
