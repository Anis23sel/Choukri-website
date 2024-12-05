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
  
  



  // Ajout dans index.js

let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.gallery-slides');
    const totalSlides = slides.children.length;

    // Calculer la nouvelle position
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}


// Mettre à jour l'image principale quand une miniature est cliquée
function setMainImage(index) {
    const slides = document.querySelector('.gallery-slides');
    const totalSlides = slides.children.length;

    currentSlide = index;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}
