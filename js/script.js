const time = document.querySelector('.time');
const date = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');
const city = document.querySelector('.city');
const body = document.body;
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');
const play = document.querySelector('.play');
const playNext = document.querySelector('.play-next');
const playPrev = document.querySelector('.play-prev');
let playNum = 0;

let isPlay = false;
const data = new Date();
const currentTime = data.toLocaleTimeString();
const options = { weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC' };
const currentDate = data.toLocaleDateString('en-EN', options);
let randomNum = '01';
const timeOfDay = getTimeOfDay();
const greetingText = `Good ${timeOfDay}`;
greeting.textContent = greetingText;
let n = 18;



//body.style.background = `url('https://github.com/zEtYxA/stage1-tasks/blob/assets/images/night/02.jpg') center/cover, rgba(0, 0, 0, 0.5)`
//body.style.background = `url('https://github.com/zEtYxA/stage1-tasks/tree/assets/images/${timeOfDay}/${randomNum}.jpg') center/cover, rgba(0, 0, 0, 0.5)`

city.value = 'Minsk';



function greetingTranslation(lang) {


}

//greetingTranslation()


function showTime() {
   time.textContent = currentTime;
   setTimeout(showTime, 1000);
   showDate()
   getTimeOfDay()
}
showTime();
function showDate() { date.textContent = currentDate; }
function getTimeOfDay() {
   const hours = data.getHours()
   const timeDay = ['night', 'morning', 'afternoon', 'evening'];
   //const timeDay = ['ночи', 'утра', 'дня', 'вечера'];
   if (Math.trunc(hours / 6) < 1) { return timeDay[0] }
   if (Math.trunc(hours / 6) < 2) { return timeDay[1] }
   if (Math.trunc(hours / 6) < 3) { return timeDay[2] }
   if (Math.trunc(hours / 6) < 4) { return timeDay[3] }
}
function getRandomNum() {
   randomNum = (String(Math.floor(Math.random() * 20))).padStart(2, "0");
   if (randomNum == 0) { randomNum = '01' }

}
getRandomNum()

let ap = 2;
function setBg() {
   let timeOfDay = getTimeOfDay()
   const img = new Image();
   if (ap == 0) {
      img.src = `https://raw.githubusercontent.com/zEtYxA/stage1-tasks/assets/images/${timeOfDay}/${randomNum}.jpg`;


      img.onload = () => {

         body.style.background = `url(${img.src}) `;
      }
   };
   if (ap == 1) {
      getLinkToImageUNS()
   }
   if (ap == 2) {
      getLinkToImageFLI()
   }

}



setBg()
function getSlideNext() {

   if (randomNum == 20) { randomNum = '01' } else {
      randomNum = (Number(randomNum) + 1)
      randomNum = String(randomNum).padStart(2, "0");
   }


   setBg()

}
function getSlidePrev() {

   if (randomNum == '01') { randomNum = '20' } else {
      randomNum = (Number(randomNum) - 1)
      randomNum = String(randomNum).padStart(2, "0");
   }


   setBg()

}

slideNext.addEventListener('click', getSlideNext)
slidePrev.addEventListener('click', getSlidePrev)





function setLocalStorage() {
   localStorage.setItem('name', name.value);
}
function getLocalStorage() {
   if (localStorage.getItem('name')) {
      name.value = localStorage.getItem('name');
   }
}

async function getWeather() {

   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=80c9e01c478e778c841796a3b53ed1d9&units=metric`;
   const res = await fetch(url);
   const data = await res.json();
   weatherIcon.className = 'weather-icon owf';
   weatherIcon.classList.add(`owf-${data.weather[0].id}`);
   temperature.textContent = `${data.main.temp}°C`;
   weatherDescription.textContent = data.weather[0].description;

}


async function getQuotes() {
   const quotes = 'data.json';
   const res = await fetch(quotes);
   const data = await res.json();
   let length = data.length;
   let num = Math.floor(Math.random() * length)
   //if (num == 0) { num = length }

   quote.textContent = data[num].text;
   author.textContent = data[num].author;
   console.log(num);
}
getQuotes();

//<audio src="...assets\sounds\Aqua Caelestis.mp3" controls></audio>
const audio = new Audio();

function playAudio() {
   //audio.src = "assets/sounds/Aqua Caelestis.mp3";
   audio.src = playList[playNum].src;
   if (!isPlay) {
      audio.currenTime = 0;
      audio.play();
      isPlay = true;
      play.classList.toggle('pause');
   } else {

      audio.pause();
      isPlay = false;
      play.classList.toggle('pause');
   }
   console.log(isPlay);
}
import playList from './playList.js';
console.log(playList);


function playNextf() {
   play.classList.remove('pause');
   if (playNum < (playList.length - 1)) { playNum++ } else { playNum = 0 }
   isPlay = false;
   playAudio()
   console.log(playNum);

}
function playPrevf() {
   play.classList.remove('pause');
   if (playNum === 0) { playNum = playList.length - 1 } else { playNum = playNum - 1 }
   isPlay = false;
   playAudio()
   console.log(playNum);
}


async function getLinkToImageUNS() {
   const img = new Image();
   const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${timeOfDay}&client_id=6PMa9TXby6JJAWAa3VXKRVG6ODL17ScFM86jkBQ3xIw`;
   const res = await fetch(url);
   const data = await res.json();
   //console.log(data.urls.regular)
   img.src = data.urls.regular;
   img.onload = () => {
      body.style.background = `url(${data.urls.regular}) `;
   }

}

async function getLinkToImageFLI() {

   const img = new Image();
   const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=a188247591d1cfada84ab8585e73ba95&tags=${timeOfDay}&extras=url_l&format=json&nojsoncallback=1&sort=relevance`;
   const res = await fetch(url);
   const data = await res.json();
   let randomFoto = 0;
   randomFoto = (Math.floor(Math.random() * 20));
   console.log(data.photos.photo[randomFoto].url_l)
   img.src = data.photos.photo[randomFoto].url_l;
   img.onload = () => {
      body.style.background = `url(${data.photos.photo[randomFoto].url_l}) ` + 'center/cover, rgba(0, 0, 0, 0.5)';

   }

}






playPrev.addEventListener('click', playPrevf)
playNext.addEventListener('click', playNextf)
play.addEventListener('click', playAudio)
changeQuote.addEventListener('click', getQuotes)
city.addEventListener('change', getWeather)
window.addEventListener('load', getLocalStorage)
window.addEventListener('beforeunload', setLocalStorage)

