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
   const RIGHT = document.querySelector('.destinations__right');
   const LEFT = document.querySelector('.destinations__left');
   const slides = document.querySelector('.image__container')
   const Drops = document.querySelectorAll('.destinitions__change')
   const rightArrow = document.querySelector('.destinations__arrow-right')
   const leftArrow = document.querySelector('.destinations__arrow-l')
   const burgerInfo = document.querySelector('.header__list')
   const loginMob = document.getElementById('login')

   let a = 0;
   let margin = -19;
   let kM = 1;
   let k = 1;
   let marginMobile = -36;




   rightArrow.addEventListener('click', () => {
      if (marginMobile <= -72) {
         marginMobile = 0;
         slides.style.marginLeft = marginMobile + '%';
         a = 19;
         kM = 0;
         change(kM);

      }
      else {
         kM = kM + 1;
         a = 19;
         marginMobile = marginMobile - 36;
         slides.style.marginLeft = marginMobile + '%';
         change(kM)
      }
   })
   leftArrow.addEventListener('click', () => {
      if (marginMobile >= -1) {
         marginMobile = -72
         slides.style.marginLeft = marginMobile + '%';
         a = 19;
         kM = 2; change(kM)
      }
      else {
         kM = kM - 1;
         a = 19;
         marginMobile = marginMobile + 36;
         slides.style.marginLeft = marginMobile + '%'
         change(kM)
      }

   })



   const change = (n) => {
      for (drop of Drops) {
         drop.classList.remove('active');
      }
      Drops[n].classList.add('active')

   }
   RIGHT.addEventListener('click', () => {
      a = 0;
      if (margin <= -38) {
         margin = 0
         slides.style.marginLeft = margin + '%';
         k = 0;
         change(k);
      }
      else {
         a = 0;
         k = k + 1;
         margin = margin - 19;
         slides.style.marginLeft = margin + '%';
         change(k)
      }

   })
   LEFT.addEventListener('click', () => {
      a = 0;
      if (margin >= -1) {
         margin = -38
         slides.style.marginLeft = margin + '%';
         k = 2; change(k)
      }
      else {
         a = 0;
         k = k - 1;
         margin = margin + 19;
         slides.style.marginLeft = margin + '%'
         change(k)
      }
   })
   Drops.forEach((item, index) => {
      item.addEventListener('click', () => {
         item.classList.add('active')
         k = index;
         if (k == 0) { slides.style.marginLeft = '0%' }
         if (k == 1) { slides.style.marginLeft = -19 + a * (-1) + '%' }
         if (k == 2) { slides.style.marginLeft = -38 + a * (-2) + '%' }
         change(k)


      })



   });



   /* 
   
      const moveLeft = () => {
   
         slides.classList.add('transition__left');
         slides.style.marginLeft = '5%';
         LEFT.removeEventListener('click', moveLeft);
   
      }
   
      LEFT.addEventListener('click', moveLeft)
      slides.addEventListener('animationend', () => {
         slides.classList.remove('transition__left');
         LEFT.addEventListener('click', moveLeft)
      }
   
      )
   
   
   
   */

   loginMob.addEventListener('click', () => {
      login.classList.add('login__menu_active');;

   })

   burgeritem.addEventListener('click', () => {
      menu.classList.toggle('header__nav_active');
      itemburger.classList.toggle('item-burger_active');

   })

   burgeritemclose.addEventListener('click', () => {
      menu.classList.toggle('header__nav_active');
      itemburger.classList.toggle('item-burger_active');

   })

   burgerInfo.addEventListener('click', () => {
      menu.classList.remove('header__nav_active'); // скрываем элемент т к клик был за его пределами
      itemburger.classList.remove('item-burger_active');
   })



   /*
      menu.addEventListener('click', () => {
         menu.classList.toggle('header__nav_active');
         itemburger.classList.toggle('item-burger_active');
      })*/


   elem.onclick = function () {

      //body.classList.add('bodycl_active');
      login.classList.add('login__menu_active');
   }



   menu.addEventListener('click', (e) => {
      const undertarget = e.composedPath().includes(burgerInfo);

      if (!undertarget) {
         menu.classList.remove('header__nav_active'); // скрываем элемент т к клик был за его пределами
         itemburger.classList.remove('item-burger_active');


      }
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



