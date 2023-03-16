let links=document.querySelector(".links");
let nav=document.querySelector(".nav");
let bar =document.querySelector("#menu-btn");
let search =document.querySelector("#search");
let found =document.querySelector("#search-btn");
bar.onclick=function(){
    links.classList.toggle("active");
    search.classList.remove("active");
}
found.onclick=function(){
    search.classList.toggle("active");
    links.classList.remove("active");
}
window.onscroll=function(){
    links.classList.remove("active");
    search.classList.remove("active");
}





var Dark=document.querySelector("#Dark");
Dark.onclick=function(){
    document.body.classList.toggle("light");
    
}


var swiper = new Swiper(".mySwiper", {
    
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


