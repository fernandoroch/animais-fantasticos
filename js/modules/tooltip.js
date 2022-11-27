export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  function criarTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = `${event.pageY + 20} + px`;
      this.tooltipBox.style.left = `${event.pageX + 20} + px`;
    },
  };

  const onMouseLiave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.elemnet.removeEventListener("mouseleave", onMouseLiave);
      this.elemnet.removeEventListener("mousemove", onMouseMove);
    },
  };

  function toMouseOver() {
    const tooltipBox = criarTooltipBox(this);

    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener("mousemove", onMouseMove);

    onMouseLiave.element = this;
    onMouseLiave.tooltipBox = tooltipBox;
    this.addEventListener("mouseleave", onMouseLiave);
  }

  tooltips.forEach((item) => {
    item.addEventListener("mouseover", toMouseOver);
  });

  



  
}
