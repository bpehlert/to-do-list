const header = document.querySelector("h1");
let count = 1

const headerChange = () => {
  (count%2 == 0) ? header.style.color = "black" : header.style.color = "red";
  count++;
};

// const changeTitle = () =>{
//   let title = prompt("Enter new title")
//   header.innerText = title;
// };

const changeTitle = () =>{
  let title = header.innerText;
  header.innerHTML = '<input class="titleInput" type="text" name="" value="" placeholder="' + title + '">';
  header.firstChild.focus();
};

header.addEventListener("click", changeTitle);
