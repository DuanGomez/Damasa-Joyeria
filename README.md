# Dasama Joyería

Sitio web de **Dasama Joyería** (Medellín): colecciones, piezas destacadas con ficha de
producto y compra directa por WhatsApp.

Diseñado y desarrollado por **[Dcodea](https://www.instagram.com/dcod.ea/)**, con el ADN
visual de Dcodea (`dcodea-dna.css`) y la identidad dorada de la marca.

## Estructura

```
index.html      portada: colecciones, taller, piezas destacadas y ubicación
producto.html   ficha de producto (producto.html?p=<id>)
catalog.js      catálogo de piezas
producto.js     render de la ficha y enlace de compra por WhatsApp
styles.css      estilos del sitio
images/         fotos de las piezas
design/         mockups de referencia (no se publican)
```

Es HTML, CSS y JavaScript sin dependencias: basta con abrir `index.html` o servir la carpeta.

## Publicación en GitHub Pages

En el repositorio: **Settings → Pages → Source: GitHub Actions** (no uses las plantillas
"Jekyll" ni "Static HTML"). Cada push a `main` ejecuta `.github/workflows/deploy-pages.yml`.
