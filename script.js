
//your code here
const inpt = document.getElementById("inpt");
const btn = document.getElementById("btn");
const out = document.getElementById("output");

btn.addEventListener("click", (e) => {
	e.preventDefault();
    let item = inpt.value;
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(item);

    localStorage.setItem("cart", JSON.stringify(cart));

    solve(cart);
});

function solve(cart) {
    out.innerHTML = "";

    cart.forEach((item) => {
        out.innerHTML += `<li>${item}</li>`;
    });
}

// Display saved items after page reload
let cart = JSON.parse(localStorage.getItem("cart")) || [];
solve(cart);
