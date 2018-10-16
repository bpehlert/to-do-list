const ul = document.getElementById('list');
const addBtn = document.getElementById('addBtn');
const newInput = document.getElementById('newInput');

// Fetchs placeholder JSON and runs function to load items
const fetchJSON = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const json = await res.json();
  loadList(json);
}

fetchJSON();

// Loads JSON to do items to DOM
const loadList = (array) => {
  array.forEach((obj) => {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(obj.title));
    addDeleteBtn(li);
    addListeners(li);
    if (!obj.completed) {
      li.classList.toggle("done");
    }
    ul.appendChild(li);
  });
};

// Creates new li element and appends it to the ul
const createNew = (item) => {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(item.value));
  addDeleteBtn(li);
  addListeners(li);
  ul.appendChild(li);
  newInput.value = "";
}

// Adds event listeners to all li elements to toggle done class and show the delete button on hover
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

// Add event listener to add button
addBtn.addEventListener("click", () => {
  if (newInput.value.length > 0) {
    createNew(newInput)
  }
});

// Adds event listener to input field
newInput.addEventListener("keypress", (event)=> {
  if (newInput.value.length > 0 && event.keyCode === 13) {
    createNew(newInput)
  }
});
