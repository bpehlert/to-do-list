const header = document.querySelector("h1");
const list = document.querySelector("#list");

// Function that allows the user to update the title of the list through a prompt.
const changeTitle = () =>{
  let title = prompt("Enter new title")
  header.innerText = title;
};

header.addEventListener("click", changeTitle);

const addItem = () => {
  let itemValue = document.querySelector("#new").value;
  let newItem = document.createElement("li");
  newItem.appendChild(itemValue);
  list.appendChild(newItem);
  console.log(newItem);

};



// Function that changes the title by creating a input box.
// const changeTitle = () =>{
//   let title = header.innerText;
//   header.innerHTML = '<input class="titleInput" type="text" name="" value="" placeholder="' + title + '">';
//   header.firstChild.focus();
// };

// // Function that toggles the color of h1 back and forth.
// let count = 1
// const headerChange = () => {
//   (count%2 == 0) ? header.style.color = "black" : header.style.color = "red";
//   count++;
// };
