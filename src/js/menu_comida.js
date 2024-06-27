const d = document;

export default function menuComida(
 btnPi,
 btnBu,
 btnPa,
 btnCe,
 btm,
 menuPi,
 menuBu,
 menuPa,
 menuCe,
 btn,
 menu
) {
 const $btns = d.querySelectorAll(btm);
 let activeButton = d.querySelector(".active1");
 $btns.forEach((button) => {
  button.addEventListener("click", () => {
   if (activeButton && activeButton !== button) {
    activeButton.classList.remove("active1");
   }

   button.classList.add("active1");
   activeButton = button;
  });
 });

 const $btnPi = d.querySelector(btnPi),
  $btnBu = d.querySelector(btnBu),
  $btnPa = d.querySelector(btnPa),
  $btnCe = d.querySelector(btnCe),
  $menuPi = d.querySelector(menuPi),
  $menuBu = d.querySelector(menuBu),
  $menuPa = d.querySelector(menuPa),
  $menuCe = d.querySelector(menuCe),
  buttons = d.querySelectorAll(btn),
  menus = d.querySelectorAll(menu);

  buttons.forEach(button => {
    button.addEventListener("click", function() {
        // Obtener el menú objetivo a mostrar
        const targetMenuId = this.getAttribute("data-target");
        const targetMenu = document.getElementById(targetMenuId);

        // Ocultar el menú actualmente visible
        menus.forEach(menu => {
            if (menu.classList.contains("grid") && menu.id !== targetMenuId) {
                menu.classList.remove("grid");
                menu.classList.add("hidden");
            }
        });

        // Mostrar el menú objetivo
        targetMenu.classList.remove("hidden");
        targetMenu.classList.add("grid");
    });
});
}
