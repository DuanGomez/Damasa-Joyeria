// Catálogo compartido entre index.html (tarjetas) y producto.html (ficha de producto).
var DASAMA_WHATSAPP = "573209566486";

var DASAMA_ICONS = {
  ring: '<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="15" r="6"/><path d="M9 9 L12 4 L15 9 Z"/><path d="M9 9 L15 9"/></svg>',
  bands: '<svg class="icon" viewBox="0 0 24 24"><circle cx="9" cy="12" r="6"/><circle cx="15" cy="12" r="6"/></svg>',
  bracelet: '<svg class="icon" viewBox="0 0 24 24"><ellipse cx="12" cy="12" rx="9" ry="6"/><path d="M4.5 9.5c2 1.4 5 2 7.5 2s5.5-.6 7.5-2" stroke-dasharray="1.5 2.5"/></svg>',
  pendant: '<svg class="icon" viewBox="0 0 24 24"><path d="M4 5c0 6 3.5 10 8 10s8-4 8-10"/><path d="M10 15 L12 19 L14 15 Z"/></svg>',
  earring: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 3a3 3 0 0 1 3 3"/><path d="M11 9 L15 9 L13 15 Z"/></svg>',
  crown: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 3 L13.5 10.5 L21 12 L13.5 13.5 L12 21 L10.5 13.5 L3 12 L10.5 10.5 Z"/></svg>'
};

// Cada producto está respaldado por fotos reales cuando existen ("img": []).
// Cuando no hay foto todavía, se usa el ícono de la categoría ("icon") en su lugar.
var DASAMA_PRODUCTS = {
  "anillo-halo-esmeralda": {
    title: "Anillo Halo Esmeralda",
    category: "Anillos",
    tag: "Esmeralda y diamantes, oro 18K",
    price: "Precio a consultar",
    detail: "Esmeralda central rodeada de un halo de diamantes, montada en oro 18K. Pieza fabricada a mano en nuestro taller.",
    img: ["images/anillo-esmeralda.jpg", "images/anillo-esmeralda-2.jpg"],
    icon: "ring"
  },
  "anillo-solitario-diamante": {
    title: "Anillo Solitario Diamante",
    category: "Anillos",
    tag: "Diamante talla pera, oro 18K",
    price: "Precio a consultar",
    detail: "Diamante talla pera con halo, montado en oro 18K. Ideal para compromiso.",
    img: ["images/anillo-diamante-pera.jpg"],
    icon: "ring"
  },
  "anillo-con-nombre": {
    title: "Anillo con Nombre",
    category: "Nombres y Grabados",
    tag: "Personalizado con tu nombre",
    price: "Precio a consultar",
    detail: "Anillo personalizado con el nombre que elijas, fabricado a mano en oro 18K. Disponible con o sin piedras.",
    img: ["images/anillo-nombre.jpg"],
    icon: "pendant"
  },
  "cadenas-oro-18k": {
    title: "Cadenas en Oro 18K",
    category: "Dijes y Cadenas",
    tag: "Varios diseños disponibles",
    price: "Precio a consultar",
    detail: "Cadenas en oro 18K garantizado, en distintos estilos de eslabón. Ideales solas o para llevar tu dije favorito.",
    img: ["images/cadena.jpg", "images/cadena2.jpg"],
    icon: "pendant"
  },
  "pulseras-de-bolas": {
    title: "Pulseras de Bolas",
    category: "Pulseras",
    tag: "Ajustables, oro 18K",
    price: "Precio a consultar",
    detail: "Pulseras de bolas en oro 18K, con cordón ajustable a tu muñeca. Se pueden combinar o usar en capas.",
    img: ["images/manillas.jpg", "images/manillas2.jpg"],
    icon: "bracelet"
  },
  "argolla-matrimonio": {
    title: "Argolla de Matrimonio",
    category: "Argollas",
    tag: "Oro 18K garantizado",
    price: "Precio a consultar",
    detail: "Argollas en pareja, fabricadas en oro 18K garantizado. Grabado interior disponible.",
    img: ["images/argolla-matrimonio.jpg"],
    icon: "bands"
  },
  "candongas-doradas": {
    title: "Candongas Doradas",
    category: "Aretas",
    tag: "Oro 18K, acabado liso",
    price: "Precio a consultar",
    detail: "Candongas gruesas en oro 18K, con acabado liso brillante y cierre a presión.",
    img: ["images/aretes.jpg"],
    icon: "earring"
  }
};
