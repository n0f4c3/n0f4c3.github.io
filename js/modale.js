// Récupérer le bouton pour ouvrir la fenêtre modale
var openModalBtn = document.getElementById("openModalBtn");

// Récupérer la fenêtre modale
var modal = document.getElementById("modal");

// Récupérer le bouton pour fermer la fenêtre modale
var closeBtn = document.getElementsByClassName("close")[0];

// Fonction pour ouvrir la fenêtre modale
function openModal() {
  modal.style.display = "block";
}

// Fonction pour fermer la fenêtre modale
function closeModal() {
  modal.style.display = "none";
}

// Ajouter un événement de clic sur le bouton pour ouvrir la fenêtre modale
openModalBtn.addEventListener("click", openModal);

// Ajouter un événement de clic sur le bouton pour fermer la fenêtre modale
closeBtn.addEventListener("click", closeModal);

// Ajouter un événement de clic en dehors de la fenêtre modale pour fermer la fenêtre
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    closeModal();
  }
});
