import galleryImage from "./js/galeria.js";
import menuComida from "./js/menu_comida.js";
import menuHamburguesa from "./js/menu_hamburguesa.js";

const d = document;

d.addEventListener("DOMContentLoaded", (evenst) => {
 menuHamburguesa("#boton", "#menu", "#li-mob");
 menuComida(".btm", ".btn", ".menu");
 galleryImage(".grid-gallery__image", "overlay", "overlayImage", ".close");
});
