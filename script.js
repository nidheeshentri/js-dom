let products = ["Laptop", "Keyboard", "Mouse"]

let productEl = document.getElementById("main-heading1")

for (let i = 0 ; i <products.length; i++){
    let product = products[i] + i
    productEl.textContent = product
}

productEl.style.color = "red"
productEl.style.backgroundColor = "blue"