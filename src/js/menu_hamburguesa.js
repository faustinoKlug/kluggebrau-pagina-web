const d = document;

export default function menuHamburguesa(btn, menu, li) {
 const $boton = d.querySelector(btn),
  $menu = d.querySelector(menu),
  $lis = d.querySelectorAll(li);

 $boton.addEventListener("click", (e) => {
  $menu.classList.toggle("hidden");
  $boton.classList.toggle("is-active");
 });

 $lis.forEach(($li) => {
  $li.addEventListener("click", (e) => {
   $menu.classList.toggle("hidden");
   $boton.classList.toggle("is-active");
  });
 });
}