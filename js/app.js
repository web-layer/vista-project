/* JSON.parse(localStorage.getItem('prodacts'))

let prodact = [
    {
        id:1,
        title: "pmv chamara",
        discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        price: 590,
        img: 'pmv-chamara.jpg',
    },

    {
        id:2,
        title: "smart watch",
        discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        price: 50,
        img: 'chuttersnap.jpg',
    },

    {
        id:3,
        title: "pmv chamara",
        discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        price: 80,
        img: 'Shoes.jpg',
    },

    {
        id:4,
        title: "Bluetooth Headphones",
        discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        price: 100,
        img: 'Headphones.jpg',
    },

    {
        id:5,
        title: "wristwatch",
        discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        price: 120,
        img: 'wristwatch.jpg',
    },

    {
        id:6,
        title: "Fashion Watch",
        discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        price: 170,
        img: 'Fashion-Watch.jpg',
    },
]


export  default prodact */



document.addEventListener("DOMContentLoaded", function () {

    let iconmenu = document.querySelector(".iconmenu")

    let listmenu = document.querySelector(".menu")

    iconmenu.addEventListener("click", function (e) {

    listmenu.classList.toggle('active')

    })



    
        
    let send = document.querySelector(".send")

    send.addEventListener("click", function () {

        let input = document.querySelector("textarea")

        let getinputvalue = input.value.trim()

        let phone = '+212 661-522768'

        let massge = `https://api.whatsapp.com/send?phone=${phone}&text=${getinputvalue}`;

        window.open(massge, "_blank")

    })

    
        
      
})






/* href="https://api.whatsapp.com/send?phone=212 661-522768&text=Send سي عبد رحيم " target="_blank" */