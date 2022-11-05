import outSideClick from "./outsideclick.js";

export default function initmenuMobile() {

}

const menuButton = document.querySelector('[data-menu="button"]')
const menuList = document.querySelector('#menu')

function openMenu(){
  menuList.classList.add('active')
  menuButton.classList.add('active')
  outSideClick(menuList, ['click','touchstart'], () => {
    menuList.classList.remove('active')
    menuButton.classList.remove('active')
  })
}

menuButton.addEventListener('click', openMenu)
