export default  function initAccordion() {
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