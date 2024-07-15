function showCategory(category) {
    var categories = document.querySelectorAll(".category");
  
    categories.forEach(function (cat) {
      if (category === "semua") {
        cat.classList.add("aktif");
      } else {
        if (cat.classList.contains(category)) {
          cat.classList.add("aktif");
        } else {
          cat.classList.remove("aktif");
        }
      }
    });
  }
  
  showCategory("terbaru");
  