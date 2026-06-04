const products = [
{
    id:1,
    name:"Laptop",
    price:55000,
    image:"https://via.placeholder.com/250"
},
{
    id:2,
    name:"Smartphone",
    price:25000,
    image:"https://via.placeholder.com/250"
},
{
    id:3,
    name:"Headphones",
    price:3000,
    image:"https://via.placeholder.com/250"
},
{
    id:4,
    name:"Smart Watch",
    price:5000,
    image:"https://via.placeholder.com/250"
}
];

let cartCount = 0;

const productList = document.getElementById("product-list");

products.forEach(product => {

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="${product.image}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart()">Add to Cart</button>
    `;

    productList.appendChild(card);
});

function addToCart(){
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;
}