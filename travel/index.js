console.log('hello');

//burger handler
(function () {
   const burgeritem = document.querySelector('.burger');
   const menu = document.querySelector('.header__nav');
   const burgeritemclose = document.querySelector('.header__nav-close');
   burgeritem.addEventListener('click', () => {
      menu.classList.add('header__nav_active');
   })
   burgeritemclose.addEventListener('click', () => {
      menu.classList.remove('header__nav_active');
   })
   menu.addEventListener('click', () => {
      menu.classList.remove('header__nav_active');
   })
}());
