const ul = document.getElementById("toDoList");
const addBtn = document.getElementById("addBtn");
const userInput = document.getElementById("userInput");

function onAddBtnClick() {
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
