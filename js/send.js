const scriptURL = 'https://script.google.com/macros/s/AKfycbxmD7EVD67VXAxMpAUn9zrLL7SbWzaDtgyTzoqInooLzRW7pvPxj5ZxdQderi9PH4-40Q/exec'
const form = document.forms['Contact-us']
const submitBtn = form.querySelector('.submit-btn')

form.addEventListener('submit', e => {
  e.preventDefault()

  // Show loading state
  const originalBtnText = submitBtn.innerHTML
  submitBtn.disabled = true
  submitBtn.innerHTML = '<span>Envoi en cours...</span><i class="loading-spinner"></i>'

  fetch(scriptURL, { method: 'post', body: new FormData(form) })
    .then(response => {
      console.log('Success!', response)
      submitBtn.innerHTML = '<span>Message Envoyé !</span>'
      submitBtn.style.background = '#28a745'
      form.reset()

      setTimeout(() => {
        submitBtn.innerHTML = originalBtnText
        submitBtn.disabled = false
        submitBtn.style.background = ''
      }, 5000)
    })
    .catch(error => {
      console.error('Error!', error.message)
      submitBtn.innerHTML = '<span>Erreur. Réessayez.</span>'
      submitBtn.style.background = '#dc3545'

      setTimeout(() => {
        submitBtn.innerHTML = originalBtnText
        submitBtn.disabled = false
        submitBtn.style.background = ''
      }, 5000)
    })
})

