document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("#menu a");
  const currentPage = location.pathname.split("/").pop() || "index.html";

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPage || (href === "index.html" && currentPage === "")) {
      link.classList.add("active");
    }
  });

  const sections = document.querySelectorAll("main section[id]");

  if (sections.length) {
    window.addEventListener("scroll", () => {
      let current = "";

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
          link.classList.add("active");
        }
      });
    });
  }

  const lightbox = document.getElementById("lightbox");
  const imgGrande = document.getElementById("img-grande");
  const cerrar = document.getElementById("cerrar");

  if (lightbox && imgGrande && cerrar) {
    document.querySelectorAll(".img-click").forEach(img => {
      img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        imgGrande.src = img.dataset.large || img.src;
      });
    });

    cerrar.addEventListener("click", () => {
      lightbox.style.display = "none";
    });
  }

  const contactForm = document.querySelector(".form-contacto");
  if (contactForm) {
    contactForm.addEventListener("submit", event => {
      event.preventDefault();
      alert("Gracias por tu mensaje. Pronto nos pondremos en contacto.");
      contactForm.reset();
    });
  }
});