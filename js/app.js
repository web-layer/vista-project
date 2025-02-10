









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


let clicktopscroll = document.querySelector(".clicktop")

window.addEventListener("scroll", function () {
   if(this.scrollY > 1500) {
       clicktopscroll.classList.add("top")
     }else {
      clicktopscroll.classList.remove("top")
     }
})


clicktopscroll.addEventListener('click', function () {
  window.scroll({
    top: 0,
    behavior: "smooth",

  })
 
})




/* let leadmore = document.querySelector('.more')
let item = 8
leadmore.onclick = function () {
  let allbox = [...document.querySelectorAll(".container .box")] 

   console.log(allbox)

    for(let i = item; i < item + 8; i++ ) {
      allbox[i].style.display = "inline-block"
    }
    item += 8
}

 */

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

