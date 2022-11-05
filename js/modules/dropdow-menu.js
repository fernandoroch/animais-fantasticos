import outSideClick from "./outsideclick.js";

export default function initDropdowMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");

  dropdownMenus.forEach((menu) => {
    ["touchstart", "click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.toggle("active");
    outSideClick(this, ["touchstart", "click"], () => {
      this.classList.remove("active");
    });
  }
}
