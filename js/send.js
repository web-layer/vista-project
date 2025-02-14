
const scriptURL = 'https://script.google.com/macros/s/AKfycbxmD7EVD67VXAxMpAUn9zrLL7SbWzaDtgyTzoqInooLzRW7pvPxj5ZxdQderi9PH4-40Q/exec'
const form = document.forms['Contact-us']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'post', body: new FormData(form) })
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})

