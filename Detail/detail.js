import { products } from "./productData.js";

// Get the selected product
const urlParams = new URLSearchParams(window.location.search);
const index = urlParams.get("index");
let pd = products[index];

// DOM for Product detail
const pdPic = document.getElementById("product-pic");
const pdName = document.getElementById("product-name");
const pdCat = document.getElementById("category");
const pdPrice = document.getElementById("price");
const pdStock = document.getElementById("stock");
const pdQuant = document.getElementById("quantity");
const buyBtn = document.getElementById("buyBtn");

// DOM for Related items
const rel1Pic = document.getElementById("related1-pic");
const rel1Cat = document.getElementById("related1-cat");
const rel1Name = document.getElementById("related1-name");
const rel1Price = document.getElementById("related1-price");
const rel1URL = document.getElementById("related1-url");

const rel2Pic = document.getElementById("related2-pic");
const rel2Cat = document.getElementById("related2-cat");
const rel2Name = document.getElementById("related2-name");
const rel2Price = document.getElementById("related2-price");
const rel2URL = document.getElementById("related2-url");

const rel3Pic = document.getElementById("related3-pic");
const rel3Cat = document.getElementById("related3-cat");
const rel3Name = document.getElementById("related3-name");
const rel3Price = document.getElementById("related3-price");
const rel3URL = document.getElementById("related3-url");

const rel4Pic = document.getElementById("related4-pic");
const rel4Cat = document.getElementById("related4-cat");
const rel4Name = document.getElementById("related4-name");
const rel4Price = document.getElementById("related4-price");
const rel4URL = document.getElementById("related4-url");

// Document title
document.title = pd.name;

// Product detail
pdPic.src = `../Pictures/card_picture-${pd.id}.jpg`;
pdName.innerHTML = pd.name;
pdCat.innerHTML = pd.category;
pdPrice.innerHTML = pd.price;
pdStock.innerHTML = pd.stock;

// Check stock
buyBtn.addEventListener("click", () => {
  let quant = pdQuant.value;
  if (quant > pd.stock) {
    alert("Not enough stock available");
  } else {
    alert(`${quant} items added to cart`);
  }
});

// Generate related items
let rand1 = null;
while (rand1 === null || rand1 == index) {
  rand1 = Math.floor(Math.random() * (products.length - 1));
}
let rand2 = null;
while (rand2 === null || rand2 == index || rand2 === rand1) {
  rand2 = Math.floor(Math.random() * (products.length - 2));
}
let rand3 = null;
while (rand3 === null || rand3 == index || rand3 === rand1 || rand3 === rand2) {
  rand3 = Math.floor(Math.random() * (products.length - 3));
}
let rand4 = null;
while (
  rand4 === null ||
  rand4 == index ||
  rand4 === rand1 ||
  rand4 === rand2 ||
  rand4 === rand3
) {
  rand4 = Math.floor(Math.random() * (products.length - 4));
}

rel1URL.href = `./detail.html?index=${rand1}`;
rel1Pic.src = `../Pictures/card_picture-${products[rand1].id}.jpg`;
rel1Name.innerHTML = products[rand1].name;
rel1Cat.innerHTML = products[rand1].category;
rel1Price.innerHTML = products[rand1].price;

rel2URL.href = `./detail.html?index=${rand2}`;
rel2Pic.src = `../Pictures/card_picture-${products[rand2].id}.jpg`;
rel2Name.innerHTML = products[rand2].name;
rel2Cat.innerHTML = products[rand2].category;
rel2Price.innerHTML = products[rand2].price;

rel3URL.href = `./detail.html?index=${rand3}`;
rel3Pic.src = `../Pictures/card_picture-${products[rand3].id}.jpg`;
rel3Name.innerHTML = products[rand3].name;
rel3Cat.innerHTML = products[rand3].category;
rel3Price.innerHTML = products[rand3].price;

rel4URL.href = `./detail.html?index=${rand4}`;
rel4Pic.src = `../Pictures/card_picture-${products[rand4].id}.jpg`;
rel4Name.innerHTML = products[rand4].name;
rel4Cat.innerHTML = products[rand4].category;
rel4Price.innerHTML = products[rand4].price;
