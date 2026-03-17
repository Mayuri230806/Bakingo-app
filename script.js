function showCategory(categoryName) {


  document.getElementById("productSection").style.display = "block";

 
  let categories = document.querySelectorAll(".category");
  categories.forEach(function(cat) {
    cat.style.display = "none";
  });

 
  document.querySelector("." + categoryName).style.display = "block";
}

// let total = 0;

// function addToCart(productName, price) {
//     let cartList = document.getElementById("cart-list");

//     let li = document.createElement("li");
//     li.textContent = productName + " - ₹" + price;
//     cartList.appendChild(li);

//     total += price;
//     document.getElementById("total").textContent = "Total: ₹" + total;
// }


// function changeQty(name, change) {

//     cart[name].qty += change;

//     if (cart[name].qty <= 0) {
//         delete cart[name];
//     }

//     updateCart();
// }

// function removeItem(name) {
//     delete cart[name];
//     updateCart();
// }

// function checkout() {
//     if (total === 0) {
//         alert("Cart is empty!");
//         return;
//     }

//     alert("Order Placed Successfully 🎉\nTotal Amount: ₹" + total);

//     cart = {};
//     total = 0;
// }

// document.getElementById("cart-list")
// document.getElementById("total")


// let cartCount = 0;

// function addToCart() {
//   cartCount++;
//   document.getElementById("cart-count").innerText = cartCount;
// }





let total = 0;
let cartCount = 0;

function addToCart(productName, price) {

    let cartList = document.getElementById("cart-list");

    let li = document.createElement("li");
    li.textContent = productName + " - ₹" + price;
    cartList.appendChild(li);

    total += price;
    cartCount++;

    document.getElementById("total").textContent = "Total: ₹" + total;
    document.getElementById("cart-count").innerText = cartCount;
}

function checkout() {
    if (total === 0) {
        alert("Cart is empty!");
        return;
    }

    alert("Order Placed Successfully 🎉\nTotal Amount: ₹" + total);

    document.getElementById("cart-list").innerHTML = "";
    document.getElementById("total").textContent = "Total: ₹0";
    document.getElementById("cart-count").innerText = "0";

    total = 0;
    cartCount = 0;
}

document.addEventListener("mousemove", (e) => {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";

  sparkle.style.left = e.clientX + "px";
  sparkle.style.top = e.clientY + "px";

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 800);
});



function openVideo() {
  document.getElementById("videoModal").style.display = "flex";
}

function closeVideo() {
  document.getElementById("videoModal").style.display = "none";

  // stop video when closed
  let iframe = document.getElementById("youtubeVideo");
  iframe.src = iframe.src;
}


function whatsappOrder(product){

// let phone="919876543210"; 
let phone="6376628904"; 


// let message="Hello, mujhe Luxe Layers se " + product + " order karna hai 🎂";
let message="Hello Luxe Layers Team, I would like to place an order from your website. Could you please guide me with the process? Thank you!"
let url="https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

window.open(url,"_blank");

}