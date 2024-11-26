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
  