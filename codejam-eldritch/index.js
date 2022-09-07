import ancients from './data/ancients.js';
import allcards from './data/mythicCards/index.js';
const rechange = document.querySelector('.rechange');
const green0 = document.querySelector('.greenCards0');
const blue0 = document.querySelector('.blueCards0');
const brown0 = document.querySelector('.brownCards0');
const green1 = document.querySelector('.greenCards1');
const blue1 = document.querySelector('.blueCards1');
const brown1 = document.querySelector('.brownCards1');
const green2 = document.querySelector('.greenCards2');
const blue2 = document.querySelector('.blueCards2');
const brown2 = document.querySelector('.brownCards2');
const azat = document.querySelector('.img1');
const Cthu = document.querySelector('.img2');
const IogS = document.querySelector('.img3');
const Shub = document.querySelector('.img4');
const all = document.querySelectorAll('.anc');



const level = document.querySelector('.level-l');



const colode = document.querySelector('.colode');
const img = document.querySelector('.pict');
let gr = 0;
let n = 1;
let br = 0;
let bl = 0;
let k = 0;
let anch = 0;
//console.log(ancients);

function changeColor(color) {

   //const num = [];
   if (color == 'greenCards') {
      if (n > 18) { n = 1 }
   }
   if (color == 'brownCards') {
      if (n > 21) { n = 1 }

   }
   if (color == 'blueCards') {
      if (n > 12) { n = 1 }
   }

   img.src = `${allcards[color][n].cardFace}`;
   //console.log(allcards[color][(String(Math.floor(Math.random() * n)))].cardFace);
   //console.log(allcards[color][n].cardFace);
   n = n + 1;

}


function changelevel(stage, anch) {
   gr = Number(ancients[anch][stage].greenCards);
   bl = Number(ancients[anch][stage].blueCards);
   br = Number(ancients[anch][stage].brownCards);

}

let f = 0;
let s = 0;
let t = 0;





function changePict(color, ind) {
   if (k == 0) {
      if (f == 0) {
         changelevel('firstStage', anch)
         f = f + 1;
      }
   }
   if (k == 1) {
      if (s == 0) {
         changelevel('secondStage', anch)
         s = s + 1
      }
   }
   if (k == 2) {
      if (t == 0) {
         changelevel('thirdStage', anch)
         t = t + 1
      }
   }



   if (gr > 0) {

      changeColor('greenCards')
      gr = gr - 1;
      if (k == 0) { green0.textContent = gr };
      if (k == 1) { green1.textContent = gr };
      if (k == 2) { green2.textContent = gr };




   } else if (br > 0) {

      changeColor('brownCards')
      br = br - 1;
      if (k == 0) { brown0.textContent = br };
      if (k == 1) { brown1.textContent = br };
      if (k == 2) { brown2.textContent = br };

   } else if (bl > 0) {

      changeColor('blueCards')
      bl = bl - 1;
      if (k == 0) { blue0.textContent = bl };
      if (k == 1) { blue1.textContent = bl };
      if (k == 2) { blue2.textContent = bl };

   } else {
      k = k + 1
      if (k == 3) {
         colode.style.display = 'none';
         // console.log('hare');
      }
      if (k < 3) {
         changePict();
      }
   }
}



function anchient(n) {


   green0.textContent = ancients[n].firstStage.greenCards;
   brown0.textContent = ancients[n].firstStage.brownCards;
   blue0.textContent = ancients[n].firstStage.blueCards;
   green1.textContent = ancients[n].secondStage.greenCards;
   brown1.textContent = ancients[n].secondStage.brownCards;
   blue1.textContent = ancients[n].secondStage.blueCards;
   green2.textContent = ancients[n].thirdStage.greenCards;
   brown2.textContent = ancients[n].thirdStage.brownCards;
   blue2.textContent = ancients[n].thirdStage.blueCards;

}
rechange.addEventListener('click', () => {
   anchient(anch)
})

colode.addEventListener('click', () => {
   console.log(gr);
   changePict();

})

//all.forEach(el => {
// el.addEventListener('click', () => {
//   el.style.border = '3px solid #00af64';
//  level.style.display = 'block'
//
// });
//});


azat.addEventListener('click', () => {
   azat.style.border = '3px solid #00af64';
   level.style.display = 'block'
   Cthu.style.display = 'none';
   IogS.style.display = 'none';
   Shub.style.display = 'none';
   level.style.display = 'block';
   anch = 0;

})
Cthu.addEventListener('click', () => {
   Cthu.style.border = '3px solid #00af64';
   level.style.display = 'block'
   azat.style.display = 'none';
   IogS.style.display = 'none';
   Shub.style.display = 'none';
   level.style.display = 'block';
   anch = 1;
})
IogS.addEventListener('click', () => {
   IogS.style.border = '3px solid #00af64';
   level.style.display = 'block'
   azat.style.display = 'none';
   Cthu.style.display = 'none';
   Shub.style.display = 'none';
   level.style.display = 'block'
   anch = 2;
})
Shub.addEventListener('click', () => {
   Shub.style.border = '3px solid #00af64';
   level.style.display = 'block'
   azat.style.display = 'none';
   Cthu.style.display = 'none';
   IogS.style.display = 'none';
   level.style.display = 'block'
   anch = 3;
})
let r = 0;
level.addEventListener('click', () => {
   level.style.background = 'green';
   if (r < 1) {
      rechange.style.display = 'block';
   }
   r++;

})
rechange.addEventListener('click', () => {
   rechange.style.display = 'none'
   colode.style.display = 'block'

})
colode.addEventListener('click', () => {

   img.style.display = 'block';

})



//console.log(cards);