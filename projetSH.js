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
  const symbol = description.querySelector(".toggle-symbol"); // Symbole + ou -

  // Écouteur d'événement
  toggle.addEventListener("click", () => {
    const isVisible = content.style.display === "block";

    // Masquer tous les contenus avant d'afficher un seul
    descriptions.forEach((desc) => {
      const otherContent = desc.querySelector(".show");
      const otherSymbol = desc.querySelector(".toggle-symbol");

      otherContent.style.display = "none"; // Masquer le contenu
      if (otherSymbol) {
        otherSymbol.textContent = "+"; // Remettre "Plus" sur tous les symboles
      }
    });

    // Afficher ou masquer le contenu actuel
    content.style.display = isVisible ? "none" : "block";
    symbol.textContent = isVisible ? "+" : "-"; // Met à jour seulement le symbole
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
// Fonction principale de validation du formulaire
function validateForm(event) {
  event.preventDefault(); // Empêche l'envoi par défaut du formulaire
  let isValid = true;

  // Réinitialisation des messages d'erreur
  document.querySelectorAll('.error-message').forEach(msg => (msg.textContent = ''));

  // Validation de "Nom et Prénom" (uniquement des lettres)
  const fullname = document.getElementById('fullname').value.trim();
  const fullnamePattern = /^[a-zA-Z\u00C0-\u017F\s]+$/; // Lettres + accents + espaces
  if (!fullname.match(fullnamePattern)) {
      document.getElementById('fullnameError').textContent = "Veuillez entrer uniquement des lettres.";
      isValid = false;
  }

  // Validation du numéro de téléphone (exactement 10 chiffres)
  const phone = document.getElementById('phone').value.trim();
  const phonePattern = /^\d{10}$/; // 10 chiffres uniquement
  if (!phone.match(phonePattern)) {
      document.getElementById('phoneError').textContent = "Le numéro de téléphone doit comporter exactement 10 chiffres.";
      isValid = false;
  }

  // Validation de la quantité (positive et non vide)
  const quantity = document.getElementById('quantity').value.trim();
  if (!quantity || isNaN(quantity) || quantity <= 0) {
      document.getElementById('quantityError').textContent = "Veuillez entrer une quantité valide.";
      isValid = false;
  }

  // Si tout est valide
  if (isValid) {
      // Affiche le message de succès
      document.getElementById('successMessage').style.display = 'block';

      // Réinitialise le formulaire
      document.getElementById('orderForm').reset();

      // Réinitialise le total
      document.getElementById('total').textContent = "0";
  }

  return isValid; // Retourne l'état de validation
}

// Restriction d'entrée : uniquement des lettres pour "Nom et Prénom"
function restrictToLetters(event) {
  const key = event.keyCode || event.which;
  const keyChar = String.fromCharCode(key);
  if (!/^[a-zA-Z\u00C0-\u017F\s]+$/.test(keyChar) && ![8, 37, 39].includes(key)) {
      event.preventDefault(); // Bloque les caractères non valides
  }
}

// Restriction d'entrée : uniquement des chiffres pour le téléphone, avec limite à 10 chiffres
function restrictToNumbers(event) {
  const input = event.target;
  if (input.id === 'phone' && input.value.length >= 10) {
      event.preventDefault(); // Empêche de dépasser 10 chiffres
      return;
  }

  const key = event.keyCode || event.which;
  const keyChar = String.fromCharCode(key);
  if (!/^\d$/.test(keyChar) && ![8, 37, 39].includes(key)) {
      event.preventDefault(); // Bloque les caractères non valides
  }
}

// Calcul dynamique du total (prix unitaire : 50 DH)
function calculateTotal() {
  const quantity = document.getElementById('quantity').value.trim();
  const unitPrice = 50; // Prix unitaire
  const totalPrice = quantity > 0 ? quantity * unitPrice : 0;
  document.getElementById('total').textContent = `${totalPrice} DH`;
}

// Ajout des écouteurs d'événements
document.getElementById('fullname').addEventListener('keypress', restrictToLetters);
document.getElementById('postalCode').addEventListener('keypress', restrictToNumbers);
document.getElementById('phone').addEventListener('keypress', restrictToNumbers);
document.getElementById('quantity').addEventListener('input', calculateTotal);
document.getElementById('orderForm').addEventListener('submit', validateForm);



