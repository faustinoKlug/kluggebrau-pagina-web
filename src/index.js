import menuComida from "./js/menu_comida.js";
import menuHamburguesa from "./js/menu_hamburguesa.js";

const d = document;

d.addEventListener("DOMContentLoaded", (event) => {
 menuHamburguesa("#boton", "#menu");
 menuComida(
  ".pizzas",
  ".burgers",
  ".papas",
  ".cervezas",
  ".btm",
  "#menuPi",
  "#menuBu",
  "#menuPa",
  "#menuBi",
  ".btn",
  ".menu"
 );
});
