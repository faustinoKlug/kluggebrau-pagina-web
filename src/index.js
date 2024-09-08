import galleryImage from "./js/galeria.js";
import menuComida from "./js/menu_comida.js";
import menuHamburguesa from "./js/menu_hamburguesa.js";

const d = document;

d.addEventListener("DOMContentLoaded", () => {
 menuHamburguesa("#boton", "#menu", "#li-mob");
 menuComida("#btn-burgers", "#btn-pizzas", "#btn-papas", "#btn-pebetes", "#btn-estilos", "#btn-postres", "#burgers", "#pizzas", "#papas", "#pebetes", "#estilos", "#postres");
 galleryImage(".grid-gallery__image", ".overlay", ".overlayImage", ".close");
});
