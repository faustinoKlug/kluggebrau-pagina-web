const d = document;

export default function menuComida(
  btnBurgers,
  btnPizzas,
  btnPapas,
  btnPebetes,
  btnEstilos,
  btnPostres,
  menuBurgers,
  menuPizzas,
  menuPapas,
  menuPebetes,
  menuEstilos,
  menuPostres
) {

  const $btnBurgers = d.querySelector(btnBurgers),
    $btnPizzas = d.querySelector(btnPizzas),
    $btnPapas = d.querySelector(btnPapas),
    $btnPebetes = d.querySelector(btnPebetes),
    $btnEstilos = d.querySelector(btnEstilos),
    $btnPostres = d.querySelector(btnPostres),
    $menuBurgers = d.querySelector(menuBurgers),
    $menuPizzas = d.querySelector(menuPizzas),
    $menuPapas = d.querySelector(menuPapas),
    $menuPebetes = d.querySelector(menuPebetes),
    $menuEstilos = d.querySelector(menuEstilos),
    $menuPostres = d.querySelector(menuPostres);

  $btnBurgers.addEventListener("click", () => {
    if (!$menuBurgers.classList.contains("flex")) {
      $menuPizzas.classList.remove("flex");
      $menuPizzas.classList.add("hidden");
      $menuPapas.classList.remove("flex");
      $menuPapas.classList.add("hidden");
      $menuPebetes.classList.remove("flex");
      $menuPebetes.classList.add("hidden");
      $menuEstilos.classList.remove("flex");
      $menuEstilos.classList.add("hidden");
      $menuPostres.classList.remove("flex");
      $menuPostres.classList.add("hidden")

      $menuBurgers.classList.remove("hidden");
      $menuBurgers.classList.add("flex");
    }
  });

  $btnPizzas.addEventListener("click", () => {
    if (!$menuPizzas.classList.contains("flex")) {
      $menuBurgers.classList.remove("flex");
      $menuBurgers.classList.add("hidden");
      $menuPapas.classList.remove("flex");
      $menuPapas.classList.add("hidden");
      $menuPebetes.classList.remove("flex");
      $menuPebetes.classList.add("hidden");
      $menuEstilos.classList.remove("flex");
      $menuEstilos.classList.add("hidden");
      $menuPostres.classList.remove("flex");
      $menuPostres.classList.add("hidden")

      $menuPizzas.classList.remove("hidden");
      $menuPizzas.classList.add("flex");
    }
  });

  $btnPapas.addEventListener("click", () => {
    if (!$menuPapas.classList.contains("flex")) {
      $menuBurgers.classList.remove("flex");
      $menuBurgers.classList.add("hidden");
      $menuPizzas.classList.remove("flex");
      $menuPizzas.classList.add("hidden");
      $menuPebetes.classList.remove("flex");
      $menuPebetes.classList.add("hidden");
      $menuEstilos.classList.remove("flex");
      $menuEstilos.classList.add("hidden");
      $menuPostres.classList.remove("flex");
      $menuPostres.classList.add("hidden")

      $menuPapas.classList.remove("hidden");
      $menuPapas.classList.add("flex");
    }
  });

  $btnPebetes.addEventListener("click", () => {
    if (!$menuPebetes.classList.contains("flex")) {
      $menuBurgers.classList.remove("flex");
      $menuBurgers.classList.add("hidden");
      $menuPapas.classList.remove("flex");
      $menuPapas.classList.add("hidden");
      $menuPizzas.classList.remove("flex");
      $menuPizzas.classList.add("hidden");
      $menuEstilos.classList.remove("flex");
      $menuEstilos.classList.add("hidden");
      $menuPostres.classList.remove("flex");
      $menuPostres.classList.add("hidden")

      $menuPebetes.classList.remove("hidden");
      $menuPebetes.classList.add("flex");
    }
  });

  $btnEstilos.addEventListener("click", () => {
    if (!$menuEstilos.classList.contains("flex")) {
      $menuBurgers.classList.remove("flex");
      $menuBurgers.classList.add("hidden");
      $menuPapas.classList.remove("flex");
      $menuPapas.classList.add("hidden");
      $menuPizzas.classList.remove("flex");
      $menuPizzas.classList.add("hidden");
      $menuPebetes.classList.remove("flex");
      $menuPebetes.classList.add("hidden");
      $menuPostres.classList.remove("flex");
      $menuPostres.classList.add("hidden")
      
      $menuEstilos.classList.remove("hidden");
      $menuEstilos.classList.add("flex");
    }
  });

  $btnPostres.addEventListener("click", () => {
    if (!$menuPostres.classList.contains("flex")) {
      $menuBurgers.classList.remove("flex");
      $menuBurgers.classList.add("hidden");
      $menuPapas.classList.remove("flex");
      $menuPapas.classList.add("hidden");
      $menuPizzas.classList.remove("flex");
      $menuPizzas.classList.add("hidden");
      $menuPebetes.classList.remove("flex");
      $menuPebetes.classList.add("hidden");
      $menuEstilos.classList.remove("flex");
      $menuEstilos.classList.add("hidden")
      
      $menuPostres.classList.remove("hidden");
      $menuPostres.classList.add("flex");
    }
  });
}
