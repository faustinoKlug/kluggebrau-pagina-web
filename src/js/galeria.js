export default function galleryImage(images, overlay, overlayImage, btn) {
 const $images = document.querySelectorAll(images),
  $overlay = document.getElementById(overlay),
  $overlayImage = document.getElementById(overlayImage),
  $closeBtn = document.querySelector(btn);

 $images.forEach((image) => {
  image.addEventListener("click", function () {
   $overlay.style.display = "flex";
   $overlayImage.src = this.src;
  });
 });

 $closeBtn.addEventListener("click", function () {
  $overlay.style.display = "none";
 });

 $overlay.addEventListener("click", function (e) {
  if (e.target === $overlay) {
   $overlay.style.display = "none";
  }
 });
}
