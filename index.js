    // Sélection des éléments

    function toggleForm() {
        var form = document.getElementById("liste");
        var button = document.querySelector(".bt");
        if (form.style.display === "block") {
          closeForm();
  
        } else {
          openForm();
  
        }
      }
  
      function openForm() {
    var form = document.getElementById("liste");
    form.style.display = "block";
  }
  
  function closeForm() {
    var form = document.getElementById("liste");
    form.style.display = "none";
  }
  
  




// Changer l'image principale en cliquant sur une miniature
function changeImage(src) {
  const mainImage = document.getElementById('mainImage');
  mainImage.src = src;
}

// Ouvrir la modale pour agrandir l'image
function openModal(src) {
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  modal.style.display = 'flex';
  modalImage.src = src;
}

// Fermer la modale
function closeModal() {
  const modal = document.getElementById('imageModal');
  modal.style.display = 'none';
}

