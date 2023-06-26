

document.addEventListener("DOMContentLoaded", bootstrap);


function bootstrap() {

  const burgerIconMenu = document.querySelector('.header__burger-icon');
  const closeIcon = document.querySelector('.header__close-icon');
  

  const toggleMenu = (evt) => {
    const menu = document.querySelector('.mob-menu');
    menu.classList.toggle('mob-menu_visible');

    burgerIconMenu.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');

  }



  const elYear = document.querySelector('.footer__year');
  if (elYear) {
    elYear.innerHTML = new Date().getFullYear();
  }

  if (burgerIconMenu && closeIcon) {
    burgerIconMenu.addEventListener('click', toggleMenu);
    closeIcon.addEventListener('click', toggleMenu);
  }


  
}

