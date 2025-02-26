


  let leadmore = document.querySelector('#more')
  let clicktopscroll = document.querySelector(".clicktop")
  const scrollServices = document.querySelector(".btn")
  let iconmenu = document.querySelector(".iconmenu")
  let listmenu = document.querySelector(".menu")

let btncontact =  document.querySelector(".contactscroll")



  
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
ScrollReveal().reveal('.Services');





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


 




