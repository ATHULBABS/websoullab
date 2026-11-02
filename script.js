let subtotal = 0;
let count = 0;

function addToCart(price){

    subtotal += price;
    count++;

    let tax = subtotal * 0.10;
    let total = subtotal + tax;

    document.getElementById("count").innerText = count;

    document.getElementById("subtotal").innerText =
    "₹" + subtotal;

    document.getElementById("tax").innerText =
    "₹" + tax.toFixed(2);

    document.getElementById("total").innerText =
    "₹" + total.toFixed(2);

    document.getElementById("message").innerText =
    count + " item(s) added";
}

function clearCart(){

    subtotal = 0;
    count = 0;

    document.getElementById("count").innerText = 0;

    document.getElementById("subtotal").innerText =
    "₹0";

    document.getElementById("tax").innerText =
    "₹0";

    document.getElementById("total").innerText =
    "₹0";

    document.getElementById("message").innerText =
    "Your cart is empty.";
}