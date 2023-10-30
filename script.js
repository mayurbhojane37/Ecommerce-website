let search_form=document.querySelector('.search-form');
document.querySelector('#search-btn').onclick=()=>{
    search_form.classList.toggle('active');
    shoppingCart.classList.remove('active');
    userLogin.classList.remove('active');
    navBar.classList.remove('active');
}

let shoppingCart=document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-btn').onclick=()=>{
    shoppingCart.classList.toggle('active');
    search_form.classList.remove('active');
    userLogin.classList.remove('active');
    navBar.classList.remove('active');
}

let userLogin=document.querySelector('.login-form');
document.querySelector('#login-btn').onclick=()=>{
    userLogin.classList.toggle('active');
    search_form.classList.remove('active');
    shoppingCart.classList.remove('active');
    navBar.classList.remove('active');
}

let navBar=document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick=()=>{
    navBar.classList.toggle('active');
    search_form.classList.remove('active');
    shoppingCart.classList.remove('active');
    userLogin.classList.remove('active');

}

window.onscroll=()=>{
    search_form.classList.remove('active');
    shoppingCart.classList.remove('active');
    userLogin.classList.remove('active');
    navBar.classList.remove('active');
}


var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,

    autoplay:{
        delay: 2000,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,

  
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });