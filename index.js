const ul = document.getElementById('list');
const addBtn = document.getElementById('addBtn');
const newItem = document.getElementById('newItem');
const listItems = document.querySelectorAll('li');


const createNew = () => {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(newItem.value));
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

// Function that adds event listeners to all li elements
const addListeners = () => {
  listItems.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("done");
    })
  });
};

// Function that checks to see if there are any items on list
const checkIfList = () => {
  if (listItems.length === 0) {
    let p = document.createElement('p');
    p.appendChild(document.createTextNode("No items on your to do list."))
    ul.appendChild(p);
  }
}


checkIfList();
addListeners();
