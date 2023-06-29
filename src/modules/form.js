export const initForm = () => {
  const form = document.querySelector('.contact-form__form').addEventListener('submit', handleSubmit);
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

  const res = await fetch('/contact-form', reqObject);

  console.log('res request', res)

  evt.target.reset();
}