

export function activateHeaderLinks() {

  const linkList = document.querySelectorAll('.header__nav-link');
  const activeClassName = 'header__nav-link_active';


  const parts = window.location.href.toString().split(window.location.host);
  if (!parts.length || parts.length <= 1) {
    return ;
  }
  
  const curUri = parts[1];

  linkList.forEach( (element) => {
    const elHref = element.getAttribute('href');

    if (elHref === '/') {
      return ;
    }

    if (curUri.indexOf(elHref) !== -1) {
      element.classList.add(activeClassName);
    }
    
  });

}