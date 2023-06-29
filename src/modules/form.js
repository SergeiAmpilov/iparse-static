export const initForm = () => {
  const form = document.querySelector('.contact-form__form').addEventListener('submit', handleSubmit);
}


export const handleSubmit = (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  console.log('submit form', 
    formData,
    formData.get('name'),
    formData.get('email'),
    formData.get('description')
  );
  evt.target.reset();
}