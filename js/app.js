


let leadmore = document.querySelector('#more')
let clicktopscroll = document.querySelector(".clicktop")
const scrollServices = document.querySelector(".btn")
let iconmenu = document.querySelector(".iconmenu")
let listmenu = document.querySelector(".menu")

let btncontact = document.querySelector(".contactscroll")




iconmenu.addEventListener("click", function (e) {

  listmenu.classList.toggle('active')

})







scrollServices.addEventListener('click', function () {
  let btn = document.getElementById("Offrons")
  btn.scrollIntoView({
    top: 0,
    behavior: "smooth"

  })



})









ScrollReveal({
  reast: true,
  distance: "60px",
  duration: 2500,
  delay: 400,

})

ScrollReveal().reveal('.info');
ScrollReveal().reveal('.info-Services', { delay: 200 });
ScrollReveal().reveal('.Services .box', {
  delay: 300,
  interval: 100,
  distance: '40px',
  origin: 'bottom',
  duration: 1200
});

// Contact Page Animations
ScrollReveal().reveal('.section-header-contact', { delay: 200, origin: 'left', distance: '50px', duration: 1000 });
ScrollReveal().reveal('.info-card', { delay: 300, interval: 150, origin: 'bottom', distance: '30px', duration: 1000 });
ScrollReveal().reveal('.map-container', { delay: 600, origin: 'bottom', distance: '30px', duration: 1000 });
ScrollReveal().reveal('.glass-form', { delay: 400, origin: 'right', distance: '50px', duration: 1000 });





window.addEventListener("scroll", function () {
  if (this.scrollY > 1500) {
    clicktopscroll.classList.add("top")
  } else {
    clicktopscroll.classList.remove("top")
  }
})



clicktopscroll.addEventListener('click', function () {
  window.scroll({
    top: 0,
    behavior: "smooth",

  })

})





let item = 9
leadmore.onclick = function () {
  let allbox = [...document.querySelectorAll(".container .box")]

  console.log(allbox)

  for (let i = item; i < item + 9; i++) {
    allbox[i].style.display = "inline-block"
  }
  item += 9

  if (item >= allbox.length) {
    leadmore.style.display = "none"
  }
}







