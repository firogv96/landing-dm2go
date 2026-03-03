document.addEventListener("DOMContentLoaded", () => {
  // CONFIGURACIÓN MANUAL PARA PRUEBAS
  const USE_SCROLL_SNAP = false; // Cambia a false para desactivar el imán

  console.log("DM2GO Landing Page Loaded");

  const mainEl = document.querySelector("main");

  // Aplicar Snap si está activado
  if (USE_SCROLL_SNAP && mainEl) {
    mainEl.classList.add("snap-enabled");
  }

  // Parallax Effect for Hero Section
  const heroSection = document.getElementById("sec-hero");
  if (mainEl && heroSection) {
    mainEl.addEventListener("scroll", () => {
      const scrolled = mainEl.scrollTop;
      // We only apply parallax while the hero is visible (first 100vh)
      if (scrolled <= window.innerHeight) {
        // TUNEABLE: Aumenta este multiplicador (0.6) para que se mueva más rápido
        // O disminúyelo (0.2) para que sea más sutil.
        const parallaxSpeed = 0.35;
        const parallaxValue = scrolled * parallaxSpeed;
        heroSection.style.setProperty("--hero-parallax", `${parallaxValue}px`);
      }
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // Intersection Observer para las animaciones de scroll (fade in/out)
  const animObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Configuramos el threshold a 0.2 para que dispare cuando se vea un 20%
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        } else {
          entry.target.classList.remove("in-view");
        }
      });
    },
    {
      root: mainEl, // Escuchamos el scroll dentro de "main" ya que ahí ocurre
      threshold: 0.15,
    },
  );

  const animatedSections = document.querySelectorAll(
    ".feature-section.laptop, .feature-section.tablet, .problem-grid, #sec-database",
  );
  animatedSections.forEach((sec) => animObserver.observe(sec));
});
