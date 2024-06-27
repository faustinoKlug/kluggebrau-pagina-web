const d = document;

export default function menuComida(btm, btn, menu) {
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

 const buttons = d.querySelectorAll(btn),
  menus = d.querySelectorAll(menu);

 buttons.forEach((button) => {
  button.addEventListener("click", function () {
   const targetMenuId = this.getAttribute("data-target");
   const targetMenu = document.getElementById(targetMenuId);

   menus.forEach((menu) => {
    if (menu.classList.contains("grid") && menu.id !== targetMenuId) {
     menu.classList.remove("grid");
     menu.classList.add("hidden");
    }
   });

   targetMenu.classList.remove("hidden");
   targetMenu.classList.add("grid");
  });
 });
}
