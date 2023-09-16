//Swiper Code
var swiper = new Swiper(".bg-slider-thumbs", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 0,
    
  });
  var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 0,
    thumbs: {
      swiper: swiper,
    },
  });

const menubtn=document.querySelector(".nav-menu-btn");
const closebtn=document.querySelector(".nav-close-btn");
const navigation=document.querySelector(".navigation");

menubtn.addEventListener("click",()=>{
    navigation.classList.add("active")
})
closebtn.addEventListener("click",()=>{
    navigation.classList.remove("active")
})
menubtn.addEventListener("click",()=>{
    navigation.classList.add("active")
})