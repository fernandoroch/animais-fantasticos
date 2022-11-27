export default function outSideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside, "");
      events.forEach(() => {
        html.removeEventListener("click", handleOutsideClick);
      });
      callback();
    }
  }

  if (!element.hasAttribute(outside)) {
    events.forEach(() => {
      setTimeout(() => {
        html.addEventListener("click", handleOutsideClick);
      });
    });

    element.setAttribute(outside, "");
  }
}
