(function () {
  "use strict";

  var params = new URLSearchParams(window.location.search);
  var slug = params.get("p");
  var product = slug && window.DASAMA_PRODUCTS ? window.DASAMA_PRODUCTS[slug] : null;

  var galleryMain = document.getElementById("galleryMain");
  var galleryThumbs = document.getElementById("galleryThumbs");

  if (!product) {
    document.getElementById("detailCategory").textContent = "No encontrado";
    document.getElementById("detailTitle").textContent = "Esta pieza ya no está disponible";
    document.getElementById("detailPrice").textContent = "";
    document.getElementById("detailText").textContent = "Vuelve a nuestras piezas destacadas para ver el catálogo completo.";
    document.querySelector(".qty-row").style.display = "none";
    document.querySelector(".buy-row").style.display = "none";
    document.querySelector(".specs").style.display = "none";
    galleryMain.innerHTML = window.DASAMA_ICONS ? window.DASAMA_ICONS.ring : "";
    document.getElementById("crumbTitle").textContent = "No encontrado";
    return;
  }

  var images = product.img || [];
  var activeIndex = 0;

  function renderMain() {
    if (images.length) {
      galleryMain.innerHTML = '<img src="' + images[activeIndex] + '" alt="' + product.title + '">';
    } else {
      galleryMain.innerHTML = window.DASAMA_ICONS[product.icon] || "";
    }
  }

  function renderThumbs() {
    if (images.length < 2) {
      galleryThumbs.style.display = "none";
      return;
    }
    galleryThumbs.innerHTML = "";
    images.forEach(function (src, i) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "gallery-thumb" + (i === activeIndex ? " is-active" : "");
      btn.innerHTML = '<img src="' + src + '" alt="' + product.title + ' vista ' + (i + 1) + '">';
      btn.addEventListener("click", function () {
        activeIndex = i;
        renderMain();
        galleryThumbs.querySelectorAll(".gallery-thumb").forEach(function (t, ti) {
          t.classList.toggle("is-active", ti === i);
        });
      });
      galleryThumbs.appendChild(btn);
    });
  }

  renderMain();
  renderThumbs();

  document.getElementById("pageTitle").textContent = product.title + " · Dasama Joyería";
  document.getElementById("detailCategory").textContent = product.category;
  document.getElementById("detailTitle").textContent = product.title;
  document.getElementById("detailPrice").textContent = product.price;
  document.getElementById("detailText").textContent = product.detail;
  document.getElementById("specCategory").textContent = product.category;
  document.getElementById("crumbTitle").textContent = product.title;
  document.getElementById("crumbCategory").textContent = product.category;

  // Quantity stepper
  var qty = 1;
  var qtyValue = document.getElementById("qtyValue");
  document.getElementById("qtyMinus").addEventListener("click", function () {
    qty = Math.max(1, qty - 1);
    qtyValue.textContent = qty;
    updateWhatsApp();
  });
  document.getElementById("qtyPlus").addEventListener("click", function () {
    qty = qty + 1;
    qtyValue.textContent = qty;
    updateWhatsApp();
  });

  // WhatsApp buy link
  var whatsappBtn = document.getElementById("whatsappBtn");
  function updateWhatsApp() {
    var text = "Hola, me interesa " + product.title + " de Dasama Joyería";
    if (qty > 1) text += " (cantidad: " + qty + ")";
    text += ". ¿Me pueden dar más información?";
    whatsappBtn.href = "https://wa.me/" + window.DASAMA_WHATSAPP + "?text=" + encodeURIComponent(text);
  }
  updateWhatsApp();
})();
