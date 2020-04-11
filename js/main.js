const cartButton = document.querySelector(".button-crt");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const main = document.querySelector(".main");
const card = document.querySelector(".cards");
const restaurantPage = document.querySelector(".restaurant-page");
const restoransHome = document.querySelector("[ href='#restorans']");
 const promo = document.querySelector(".promo");
 const sectionRestaurants = document.querySelector(".section-restaurants");

function toggleClass() {
  modal.classList.toggle("active");
  main.classList.toggle("filter");
}
if (card) {
  card.addEventListener("click", function (e) {
   
    if (e.target.closest(".tanuki")) {
      promo.style.display = "none";
      sectionRestaurants.style.display = "none";
      restaurantPage.style.display = "block";
    }
  });
}
restoransHome.addEventListener("click", function (e) {
  promo.style.display = "block";
  sectionRestaurants.style.display = "block";
  restaurantPage.style.display = "none";
});

cartButton.addEventListener("click", function (e) {
  toggleClass();

  document.addEventListener("click", function (e) {
    if (
      e.target.classList.contains("modal") ||
      e.target.classList.contains("modal active")
    ) {
      modal.classList.remove("active");
      main.classList.remove("filter");
    }
  });
});

close.addEventListener("click", toggleClass);

new WOW().init();
