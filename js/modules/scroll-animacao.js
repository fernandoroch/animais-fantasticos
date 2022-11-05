export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections) {
    const windowMetade = window.innerHeight * 0.6;

    function aminaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        if (isSectionVisible) {
          section.classList.add("activeScroll");
        }else if(section.classList.contains("activeScroll")) {
          section.classList.remove("activeScroll");
        }
      });
    }
    aminaScroll();

    window.addEventListener("scroll", aminaScroll);
  }
}