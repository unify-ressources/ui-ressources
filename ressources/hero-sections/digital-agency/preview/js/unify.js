const btnHumb = document.querySelector("[data-toggle-navbar]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-nav-overlay]");
if (btnHumb && navbar) {
  const toggleBtnAttr = () => {
    const isOpen = btnHumb.getAttribute("data-is-open");
    btnHumb.setAttribute("data-is-open", isOpen === "true" ? "false" : "true");
    if (isOpen === "false") {
      document.body.classList.remove("overflow-y-auto");
      document.body.classList.add("overflow-hidden");
      overlay.classList.toggle("hidden");
    } else {
      document.body.classList.add("overflow-y-auto");
      document.body.classList.remove("overflow-hidden");
      overlay.classList.add("hidden");
    }
  };
  btnHumb.addEventListener("click", () => {
    navbar.classList.toggle("invisible");
    navbar.classList.toggle("op-0");
    navbar.classList.toggle("translate-y-10");
    toggleBtnAttr();
  });

  overlay.addEventListener("click", () => {
    navbar.classList.add("invisible");
    navbar.classList.add("op-0");
    navbar.classList.add("translate-y-10");
    toggleBtnAttr();
  });
}
