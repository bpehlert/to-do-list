const ul = document.getElementById('list');
const addBtn = document.getElementById('addBtn');
const newItem = document.getElementById('newItem');
const listItems = document.querySelectorAll('li');

// Creates new li element and appends it to the ul
const createNew = () => {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(newItem.value));
  addDeleteBtn(li);
  ul.appendChild(li);
  newItem.value = "";
}

// Add event listener to add button
addBtn.addEventListener("click", () => {
  if (newItem.value.length > 0) {
    createNew()
  }
});

// Adds event listener to input field
newItem.addEventListener("keypress", (event)=> {
  if (newItem.value.length > 0 && event.keyCode === 13) {
    createNew()
  }
});

// Adds event listeners to all li elements to toggle done class and show the delete button
const addListeners = (item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("done");
  });
  item.addEventListener("mouseover", () => {
    item.children[0].classList.remove("toggleBtn");
  });
  item.addEventListener("mouseleave", () => {
    item.children[0].classList.add("toggleBtn");
  });
};

// Adds delete buttons with "click" listeners to each li elements
const addDeleteBtn = (item) => {
  let btn = document.createElement("button");
  btn.appendChild(document.createTextNode("x"));
  btn.classList.add("deleteBtn", "toggleBtn");
  btn.addEventListener("click", () => {
    item.parentNode.removeChild(item);
  });
  item.appendChild(btn);
}

// function that loops through each li element
const loopElements = () => {
  listItems.forEach((item) => {
    addListeners(item);
    addDeleteBtn(item);
  });
};

// // Function that checks to see if there are any items on list
// const checkIfList = () => {
//   if (listItems.length === 0) {
//     let p = document.createElement('p');
//     p.appendChild(document.createTextNode("No items on your to do list."))
//     ul.appendChild(p);
//   }
// }
// checkIfList();

loopElements();
