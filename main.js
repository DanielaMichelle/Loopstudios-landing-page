const hero = document.querySelector(".hero"); // Replace '.hero' with the actual class or id of your hero element
const heroHeight = hero.clientHeight;
console.log(heroHeight); // Output the height of the hero element

// add th height of the navbar
const navbar = document.querySelector(".navbar"); // Replace '.navbar' with the actual class or id of your navbar element
const navbarHeight = navbar.clientHeight;
// console.log(navbarHeight); // Output the height of the navbar element

const totalHeight = heroHeight - navbarHeight;
// console.log(totalHeight); // Output the total height of the hero and navbar elements

const mainElement = document.querySelector("main");
mainElement.style.marginTop = `${totalHeight}px`;

const messageSection = document.querySelector(".message-section");
const creationSection = document.querySelector(".creations-section");
const messageSectionHeight = messageSection.clientHeight;

// si el ancho de la pantalla es mayor o igual a 425px, el margin-top de la seccion de creaciones se aplica normalmente
if (window.screen.width > 425) {
  creationSection.style.marginTop = `${messageSectionHeight}px`;
} else {
  creationSection.style.marginTop = `${0}px`;
}

const burgerButton = document.querySelector(".navbar__hamburger");
const closeButton = document.querySelector(".navbar__close");
const navbarMobileLinks = document.querySelector(".navbar__links--mobile");

burgerButton.addEventListener("click", () => {
  closeButton.style.display = "block";
  navbarMobileLinks.style.display = "flex";
  burgerButton.style.display = "none";
});

closeButton.addEventListener("click", () => {
  navbarMobileLinks.style.display = "none";
  closeButton.style.display = "none";
  burgerButton.style.display = "block";
});
