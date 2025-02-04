










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








    /*     let copye = document.querySelectorAll(".box_RÉFÉRENCES")
    
    
    
    
        copye.forEach((cloneele) => {
    
    
            let clone = cloneele.cloneNode(true)
    
    
            cloneele.parentNode.appendChild(clone)
        })
    
     */





    /*         
        let send = document.querySelector(".send")
    
        send.addEventListener("click", function () {
    
            let input = document.querySelector("textarea")
    
            let getinputvalue = input.value.trim()
    
            let phone = '+212 661-522768'
    
            let massge = `https://api.whatsapp.com/send?phone=${phone}&text=${getinputvalue}`;
    
            window.open(massge, "_blank")
    
        }) */




})




/* 
    let form = document.getElementById('googleForm').addEventListener('submit', function (e) {
        const email = encodeURIComponent(document.getElementById('email').value);
        const name = encodeURIComponent(document.getElementById('name').value);
    
    
    
        fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLScvFpIyMloB4JAEY-HCSdnV0I5K3wSkY11vLOafJfQAh7flmQ/formResponse', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `entry.1243685087=${email}&entry.1353529448=${name}`
        })
            .then(() => {
                console.log('Form submitted successfully!');
            })
            .catch((error) => {
                console.error('Error:', error);
                console('Failed to submit the form.');
            });
    
    })
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

