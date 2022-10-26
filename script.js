function initTabMenu() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabContent section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("active");
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("active");
      });
      tabContent[index].classList.add("active");
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTabMenu();

/*   perguntas frequentes   */

function initAccordion() {
  const faqActive = document.querySelectorAll(".js-accordion dt");
  faqActive[0].classList.add("active-faq");
  faqActive[0].nextElementSibling.classList.add("active-faq");

  if (faqActive) {
    function addActiveDt() {
      this.classList.toggle("active-faq");
      this.nextElementSibling.classList.toggle("active-faq");
    }

    faqActive.forEach((dt) => {
      dt.addEventListener("click", addActiveDt);
    });
  }
}
initAccordion();

/*   scroll suave   */

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  if (linksInternos) {
    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    linksInternos.forEach((link) => {
      link.addEventListener("click", scrollToSection);
    });
  }
}
initScrollSuave();

/*   scroll suave sections  */

function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections) {
    const windowMetade = window.innerHeight * 0.6;

    function aminaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) {
          section.classList.add("activeScroll");
        }
      });
    }
    aminaScroll();

    window.addEventListener("scroll", aminaScroll);
  }
}
initAnimacaoScroll();
