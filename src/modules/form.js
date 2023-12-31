export const initForm = () => {
  const form = document.querySelector('.contact-form__form');
  const examplesForm = document.querySelector('.examples__form');
  
  if (form) {
    form.addEventListener('submit', handleSubmit); 
  }

  if (examplesForm) {
    examplesForm.addEventListener('submit', handleSubmitExample)
  }
}


export const handleSubmit = async (evt) => {

  evt.preventDefault();

  const formData = new FormData(evt.target);

  const reqObject = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: formData.get('name'),
      email: formData.get('email'),
      description: formData.get('description')
    })
  };

  evt.target.classList.add('contact-form__form_centered');
  evt.target.innerHTML = '<img src="/images/preloader.gif" alt="preloader">';
  
  const res = await fetch('/contact-form', reqObject);
  
  evt.target.innerHTML = '<p class="contact-form__form_text">Спасибо! Ваша заявка принята!<br>Мы свяжемся с Вами в скором времени.</p>';

}


const handleSubmitExample = async (evt) => {
  
  evt.preventDefault();

  const formData = new FormData(evt.target);

  const reqObject = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      slug: formData.get('slug'),
      email: formData.get('email'),
    })
  };

  evt.target.classList.add('contact-form__form_centered');
  evt.target.innerHTML = '<img src="/images/preloader.gif" alt="preloader">';

  const res = await fetch('/cases/request', reqObject);

  evt.target.innerHTML = '<p class="contact-form__form_text">Спасибо! Мы получили Ваш запрос!<br>В ближайшее время вам на указаннную электронную почту придет пример базы данных.</p>';

};