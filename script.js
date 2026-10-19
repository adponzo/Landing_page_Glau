// Add the store's WhatsApp number here in international format, without + or spaces.
// Example: 5511999999999
const WHATSAPP_NUMBER = "5511960609406";

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
  mainNav.classList.toggle("is-open", !isOpen);
});

mainNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
    mainNav.classList.remove("is-open");
  }
});

document.querySelector("#year").textContent = new Date().getFullYear();

function openWhatsApp(message) {
  if (!WHATSAPP_NUMBER) {
    window.alert("Para receber pedidos, configure o número do WhatsApp da loja no arquivo script.js.");
    return;
  }

  const url = new URL(`https://wa.me/${WHATSAPP_NUMBER}`);
  url.searchParams.set("text", message);
  window.open(url, "_blank", "noopener,noreferrer");
}

document.querySelectorAll("[data-product]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const product = link.dataset.product;
    openWhatsApp(`Olá! Gostaria de saber mais sobre: ${product}.`);
  });
});

document.querySelector("[data-contact]").addEventListener("click", (event) => {
  event.preventDefault();
  openWhatsApp("Olá! Gostaria de conhecer os produtos da GLAU JESUS Aromas.");
});
