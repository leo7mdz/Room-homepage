const menu = document.querySelector(".menu"),
  iconMenu = document.querySelector(".icon-menu"),
  prev = document.querySelector(".arrow-left"),
  next = document.querySelector(".arrow-right"),
  cards = document.querySelectorAll(".card"),
  containerCards = document.querySelector(".cards"),
  lastCard = cards[cards.length - 1];

document.addEventListener("click", (e) => {
  if (e.target === iconMenu) {
    menu.classList.toggle("menu-is-active");
  }

  if (e.target === next) {
    nextCard();
  }

  if (e.target === prev) {
    prevCard();
  }
});

window.addEventListener("resize", () => {
  menu.classList.remove("menu-is-active");
});

window.addEventListener("scroll", () => {
  if (window.scrollY) {
    menu.classList.remove("menu-is-active");
  }
});

/*slider*/

containerCards.insertAdjacentElement("afterbegin", lastCard);

const nextCard = () => {
  const firstCard = document.querySelectorAll(".card")[0];
  containerCards.style.setProperty("margin-left", "-200%");
  containerCards.style.transition = "margin-left .3s linear";

  setTimeout(() => {
    containerCards.insertAdjacentElement("beforeend", firstCard);
    containerCards.style.transition = "none";
    containerCards.style.marginLeft = "-100%";
  }, 300);
};

const prevCard = () => {
  const cards = document.querySelectorAll(".card");
  const lastCardSlider = cards[cards.length - 1];
  containerCards.style.setProperty("margin-left", "0");
  containerCards.style.setProperty("transition", "margin-left .3s linear");

  setTimeout(() => {
    containerCards.insertAdjacentElement("afterbegin", lastCardSlider);
    containerCards.style.setProperty("margin-left", "-100%");
    containerCards.style.setProperty("transition", "none");
  }, 300);
};
