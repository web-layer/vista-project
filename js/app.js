









document.addEventListener("DOMContentLoaded", function () {

    let iconmenu = document.querySelector(".iconmenu")

    let listmenu = document.querySelector(".menu")

    iconmenu.addEventListener("click", function (e) {

        listmenu.classList.toggle('active')

    })




    let btnscroll = document.getElementById("btnscroll")
    btnscroll.onclick = function () {
        document.getElementById("Offrons").scrollIntoView({ behavior: "smooth" });
    }

})



ScrollReveal({
    reast: true,
    distance: "60px",
    duration: 2500,
    delay: 400,

})

ScrollReveal().reveal('.info');
ScrollReveal().reveal('.Services');









const scriptURL = 'https://script.google.com/macros/s/AKfycbxmD7EVD67VXAxMpAUn9zrLL7SbWzaDtgyTzoqInooLzRW7pvPxj5ZxdQderi9PH4-40Q/exec'
const form = document.forms['Contact-us']

form.addEventListener('submit', e => {

    e.preventDefault()
    fetch(scriptURL,
        {
            method: 'POST',
            body: new FormData(form)

        })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
})





// Disable right-click
/* 
if (document.addEventListener) {
    document.addEventListener('contextmenu', function(e) {
      alert("This function has been disabled to prevent you from stealing my code!");
      e.preventDefault();
    }, false);
  } else {
    document.attachEvent('oncontextmenu', function() {
      alert("This function has been disabled to prevent you from stealing my code!");
      window.event.returnValue = false;
    });
  } */

/* href="https://api.whatsapp.com/send?phone=212 661-522768&text=Send سي عبد رحيم " target="_blank" */

