function bootstrap() {

  const elYear = document.querySelector('.footer__year');
  if (elYear) {
    elYear.innerHTML = new Date().getFullYear();
  }
  
}


document.addEventListener("DOMContentLoaded", bootstrap);