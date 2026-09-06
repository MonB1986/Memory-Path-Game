const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('#nav-menu');

navToggle.addEventListener("click", function (){
    

    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute('aria-expanded', isOpen);
   

})