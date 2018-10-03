const header = document.querySelector("h1");
let count = 1

const headerChange = () => {
  (count%2 == 0) ? header.style.color = "black" : header.style.color = "red";
  count++;
};
