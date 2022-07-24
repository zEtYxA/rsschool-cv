console.log('hello');

//burger handler
(function () {
   const burgeritem = document.querySelector('.burger');
   const menu = document.querySelector('.header__nav');
   const itemburger = document.querySelector('.item-burger');
   const login = document.querySelector('.login__menu');
   const account = document.querySelector('.header__link');
   const butt = document.querySelector('.butt');
   const btn__sign = document.querySelector('.btn__sign');

   const burgeritemclose = document.querySelector('.header__nav-close');
   const body = document.querySelector('.bodycl');
   const windowcont = document.querySelector('.window__container');
   const input1 = document.querySelector('.form-email-intro');
   const input2 = document.querySelector('.form-email-intro2');
   const reg = document.querySelector('.reg')

   burgeritem.addEventListener('click', () => {
      menu.classList.toggle('header__nav_active');
      itemburger.classList.toggle('item-burger_active');
   })

   menu.addEventListener('click', () => {
      menu.classList.remove('header__nav_active');
      itemburger.classList.remove('item-burger_active');
   })


   butt.addEventListener('click', () => {
      //body.classList.add('bodycl_active');
      login.classList.add('login__menu_active');
   })



   login.addEventListener('click', (e) => {
      const undertarget = e.composedPath().includes(windowcont);

      if (!undertarget) {
         login.classList.remove('login__menu_active'); // скрываем элемент т к клик был за его пределами

         document.querySelector('.login__intro').innerHTML = "Log in to your accountt";
         document.querySelector('.login__register').innerHTML = ' Forgot Your Password? <span><span class="reg">Register</span></span>';
         document.querySelector('.login__sign-fb').style.display = '';
         document.querySelector('.login__sign-gg').style.display = '';
         document.querySelector('.separator').style.display = '';
         document.querySelector('.login__forgot').style.display = '';
         document.querySelector('.login__window').style.height = '640px';
      }
   })
   //toggle
   btn__sign.addEventListener('click', () => {
      alert('E-mail:' + input1.value + ' Password:' + input2.value);
   })
   reg.addEventListener('click', () => {
      document.querySelector('.login__intro').innerHTML = "Create account";
      document.querySelector('.login__register').innerHTML = ' Don’t have an account? <span><span class="reg">Log in</span></span>';
      document.querySelector('.login__sign-fb').style.display = 'none';
      document.querySelector('.login__sign-gg').style.display = 'none';
      document.querySelector('.separator').style.display = 'none';
      document.querySelector('.login__forgot').style.display = 'none';
      document.querySelector('.login__window').style.height = '500px';


   })
}());



