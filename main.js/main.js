(()=>{"use strict";function t(t,e,n){const o=document.documentElement,c="data-outside";function i(a){t.contains(a.target)||(t.removeAttribute(c,""),e.forEach((()=>{o.removeEventListener("click",i)})),n())}t.hasAttribute(c)||(e.forEach((()=>{setTimeout((()=>{o.addEventListener("click",i)}))})),t.setAttribute(c,""))}!function(){const t=document.querySelectorAll('.js-menu a[href^="#"]');function e(t){t.preventDefault();const e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"})}t&&t.forEach((t=>{t.addEventListener("click",e)}))}(),function(){const t=document.querySelectorAll(".js-scroll"),e=.6*window.innerHeight;function n(){t.forEach((t=>{t.getBoundingClientRect().top-e<0?t.classList.add("activeScroll"):t.classList.contains("activeScroll")&&t.classList.remove("activeScroll")}))}t.length&&(n(),window.addEventListener("scroll",n))}(),function(){const t=document.querySelectorAll(".js-accordion dt");function e(){this.classList.toggle("active-faq"),this.nextElementSibling.classList.toggle("active-faq")}t&&(t[0].classList.add("active-faq"),t[0].nextElementSibling.classList.add("active-faq"),t.forEach((t=>{t.addEventListener("click",e)})))}(),function(){const t=document.querySelectorAll(".js-tabmenu li"),e=document.querySelectorAll(".js-tabContent section");t.length&&e.length&&(e[0].classList.add("active"),t.forEach(((t,n)=>{t.addEventListener("click",(()=>{!function(t){e.forEach((t=>{t.classList.remove("active")})),e[t].classList.add("active")}(n)}))})))}(),function(){const t=document.querySelector('[data-modal="abrir"]'),e=document.querySelector('[data-modal="fechar"]'),n=document.querySelector('[data-modal="container"]');function o(t){t.preventDefault(),n.classList.toggle("ativo")}t&&e&&n&&(t.addEventListener("click",o),e.addEventListener("click",o),n.addEventListener("click",(function(t){t.target===this&&o(t)})))}(),function(){const t=document.querySelectorAll("[data-tooltip]"),e={handleEvent(t){this.tooltipBox.style.top=`${t.pageY+20} + px`,this.tooltipBox.style.left=`${t.pageX+20} + px`}},n={handleEvent(){this.tooltipBox.remove(),this.elemnet.removeEventListener("mouseleave",n),this.elemnet.removeEventListener("mousemove",e)}};function o(){const t=function(t){const e=document.createElement("div"),n=t.getAttribute("aria-label");return e.classList.add("tooltip"),e.innerText=n,document.body.appendChild(e),e}(this);e.tooltipBox=t,this.addEventListener("mousemove",e),n.element=this,n.tooltipBox=t,this.addEventListener("mouseleave",n)}t.forEach((t=>{t.addEventListener("mouseover",o)}))}(),function(){function e(e){e.preventDefault(),this.classList.toggle("active"),t(this,["touchstart","click"],(()=>{this.classList.remove("active")}))}document.querySelectorAll("[data-dropdown]").forEach((t=>{["touchstart","click"].forEach((n=>{t.addEventListener(n,e)}))}))}(),function(){const e=document.querySelector('[data-menu="button"]'),n=document.querySelector("#menu");e.addEventListener("click",(function(){n.classList.add("active"),e.classList.add("active"),t(n,["click","touchstart"],(()=>{n.classList.remove("active"),e.classList.remove("active")}))}))}(),function(){let t;const e=document.querySelector(".numeros");t=new MutationObserver((function(e){e[0].target.classList.contains("activeScroll")&&(t.disconnect(),document.querySelectorAll("[data-numero]").forEach((t=>{const e=+t.innerText,n=Math.floor(e/100);let o=0;const c=setInterval((()=>{o+=n,t.innerText=o,o>e&&(t.innerText=e,clearInterval(c))}),25*Math.random())})))})),t.observe(e,{attributes:!0})}(),function(){const t=document.querySelector("[data-semana]"),e=t.dataset.semana.split(",").map(Number),n=t.dataset.horario.split(",").map(Number),o=new Date,c=o.getDay(),i=o.getHours(),a=-1!==e.indexOf(c),s=i>=n[0]&&i<n[1];a&&s&&t.classList.add("aberto")}(),fetch("https://blockchain.info/ticker").then((t=>t.json())).then((t=>{document.querySelector(".btc-preco").innerHTML=(1e3/t.BRL.sell).toFixed(4)})).catch((t=>{console.log(t)}))})();