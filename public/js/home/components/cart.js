document.addEventListener("DOMContentLoaded", ()=>{
  let cart = document.querySelector("#cart")
  let cartCon = document.querySelector(".cart-shop--container")
  let closeCart = document.querySelector("#close-cart")
  cart.addEventListener("click", ()=>{
    cartCon.classList.add("open")

  });
  closeCart.addEventListener("click", ()=>{
    cartCon.classList.remove("open");

  })
})