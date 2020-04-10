const cartButton = document.querySelector(".button-crt");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
console.log(cartButton);
cartButton.addEventListener("click", function (e) {
  modal.classList.add("active");
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("modal")) {
      modal.classList.remove("active");
    }
   
    
  });
});
close.addEventListener("click", function (e) {
  modal.classList.remove("active");
});
new WOW().init()