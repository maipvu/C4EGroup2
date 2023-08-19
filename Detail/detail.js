import { products } from "./productData.js";

// console.log(products);

let id = "";

function myFunction(clickedId) {
  return console.log(clickedId);
}

// document.getElementById("test").innerHTML = products.a1.name;

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get("index");

let pd = products[myParam];
console.log(pd.name);
