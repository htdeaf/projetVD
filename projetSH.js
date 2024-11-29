/*const show = document.getElementsByClassName("show")[0]; // Sélection du premier élément avec la classe "show"
const clik = document.getElementsByClassName("divDescreption")[0]; // Sélection du premier élément avec la classe "divDescreption"
let isCliked = false;

clik.addEventListener("click", () => {
  isCliked = !isCliked; // Inverser l'état au clic

  if (isCliked) {
    show.style.display = "block"; // Afficher la description
  } else {
    show.style.display = "none"; // Masquer la description
  }
});*/


/*const descriptions = document.querySelectorAll(".divDescreption");

// Parcourt chaque élément
descriptions.forEach((description) => {
  const toggle = description.querySelector(".divDescreption"); // Le titre cliquable
  const content = description.querySelector(".show"); // Contenu masqué à afficher/masquer

  // Écouteur d'événement
  toggle.addEventListener("click", () => {
    const isVisible = content.style.display === "block";

    // Masquer tous les contenus avant d'afficher l'unique
    descriptions.forEach((desc) => {
      const contentToHide = desc.querySelector(".show");
      contentToHide.style.display = "none";
    });

    // Afficher ou masquer le contenu actuel
    content.style.display = isVisible ? "none" : "block";

  });
});*/
const descriptions = document.querySelectorAll(".divDescreption");

descriptions.forEach((description) => {
  const toggle = description.querySelector(".titles"); // Titre cliquable
  const content = description.querySelector(".show"); // Contenu masqué à afficher/masquer

  // Écouteur d'événement
  toggle.addEventListener("click", () => {
    const isVisible = content.style.display === "block";

    // Masquer tous les contenus avant d'afficher un seul
    descriptions.forEach((desc) => {
      const otherContent = desc.querySelector(".show");
      const otherTitle = desc.querySelector(".titles");

      otherContent.style.display = "none"; // Masquer le contenu
      if (otherTitle) {
        otherTitle.textContent = otherTitle.textContent.replace("+", "-"); // Remettre "Plus"
      }
    });

    // Afficher ou masquer le contenu actuel
    content.style.display = isVisible ? "none" : "block";
    toggle.textContent = isVisible
      ? toggle.textContent.replace("-", "+")
      : toggle.textContent.replace("+", "-");
  });
});


const buttons = document.querySelectorAll(".btn");
const priceDisplay = document.getElementById("price");

// Ajouter un événement "click" à chaque bouton
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        // Récupérer le prix depuis l'attribut "data-price"
        const price = button.getAttribute("data-price");
        // Afficher le prix dans la zone de texte
        priceDisplay.textContent = price;
    });
});
function changeImage(imageSrc) {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = imageSrc;
}




