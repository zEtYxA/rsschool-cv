const time = document.querySelector('.time');
const date = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');
const city = document.querySelector('.city');
const body = document.body;
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');
const weather = document.querySelector('.weather');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');
const player = document.querySelector('.player');
const play = document.querySelector('.play');
const playNext = document.querySelector('.play-next');
const playPrev = document.querySelector('.play-prev');
const timeBalance = document.getElementById("time");
const dateBalance = document.getElementById("date");
const audioeBalance = document.getElementById("audio");
const weatherBalance = document.getElementById("weather");
const quotesBalance = document.getElementById("quotes");
const greetingBalance = document.getElementById("greeting");
const GitHubBalance = document.getElementById("GitHub");
const UnsplashBalance = document.getElementById("Unsplash");
const FlickrBalance = document.getElementById("Flickr");
const en = document.getElementById("en");
const rus = document.getElementById("rus");
const lang = document.querySelectorAll('.lang');




const rechange = document.querySelectorAll('.rechange');
let randomNum = '01';
let n = 18;
let language = 0;
let ap = 0;



let playNum = 0;

let isPlay = false;
const data = new Date();
const currentTime = data.toLocaleTimeString();
const options = { weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC' };
let currentDate = data.toLocaleDateString('en-EN', options);
function datelang() {
   console.log('asda');
   if (language == 0) {
      currentDate = data.toLocaleDateString('en-EN', options);
   }
   if (language == 1) {
      currentDate = data.toLocaleDateString('ru-RU', options);
   }

}
//datelang()

const timeOfDay = getTimeOfDay();
const greetingText = `Good ${timeOfDay}`;
greeting.textContent = greetingText;



//body.style.background = `url('https://github.com/zEtYxA/stage1-tasks/blob/assets/images/night/02.jpg') center/cover, rgba(0, 0, 0, 0.5)`
//body.style.background = `url('https://github.com/zEtYxA/stage1-tasks/tree/assets/images/${timeOfDay}/${randomNum}.jpg') center/cover, rgba(0, 0, 0, 0.5)`

city.value = 'Minsk';
function balancetime() {

   if (!timeBalance.checked) {
      time.style.display = 'none';
   } else {
      time.style.display = 'block';

   }
}

timeBalance.addEventListener('change', balancetime)

function balancedate() {

   if (!dateBalance.checked) {
      date.style.display = 'none';
   } else {
      date.style.display = 'block';

   }
}

dateBalance.addEventListener('change', balancedate)

function balanceplay() {

   if (!audioeBalance.checked) {
      player.style.display = 'none';
   } else {
      player.style.display = 'block';

   }
}

audioeBalance.addEventListener('change', balanceplay)

function balanceweather() {

   if (!weatherBalance.checked) {
      weather.style.display = 'none';
   } else {
      weather.style.display = 'block';

   }
}

weatherBalance.addEventListener('change', balanceweather)

function balancquotes() {

   if (!quotesBalance.checked) {
      quote.style.display = 'none';
      author.style.display = 'none';
   } else {
      quote.style.display = 'block';
      author.style.display = 'block';

   }
}

quotesBalance.addEventListener('change', balancquotes)
function balancegreeting() {

   if (!greetingBalance.checked) {
      greeting.style.display = 'none';

   } else {
      greeting.style.display = 'block';


   }
}

greetingBalance.addEventListener('change', balancegreeting)

function api() {

   if (GitHubBalance.checked) {
      ap = 0;
      UnsplashBalance.checked = false;
      FlickrBalance.checked = false;
      setBg()
   }
}
function api1() {

   if (UnsplashBalance.checked) {
      ap = 1;
      GitHubBalance.checked = false;
      FlickrBalance.checked = false;
      setBg()
   }

}
function api2() {


   if (FlickrBalance.checked) {
      ap = 2;
      GitHubBalance.checked = false;
      UnsplashBalance.checked = false;
      setBg()
   }
}



GitHubBalance.addEventListener('change', api)
UnsplashBalance.addEventListener('change', api1)
FlickrBalance.addEventListener('change', api2)



function langechangeen() {


   if (en.checked) {

      language = 0;
      rus.checked = false;
      getWeather()
      getQuotes()
      datelang()
   }

}
en.addEventListener('change', langechangeen)
function langechangerus() {


   if (rus.checked) {
      language = 1
      en.checked = false
      getWeather()
      getQuotes()
      datelang()
   }

}
rus.addEventListener('change', langechangerus)


//const GitHubBalance = document.getElementById("GitHub");
//const UnsplashBalance = document.getElementById("Unsplash");
//const FlickrBalance = document.getElementById("Flickr");



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
   const hours = data.getHours();
   const timeDay = ['night', 'morning', 'afternoon', 'evening']

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
   if (language == 0) {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=80c9e01c478e778c841796a3b53ed1d9&units=metric`;
      const res = await fetch(url);
      const data = await res.json();
      weatherIcon.className = 'weather-icon owf';
      weatherIcon.classList.add(`owf-${data.weather[0].id}`);
      temperature.textContent = `${data.main.temp}°C`;
      weatherDescription.textContent = data.weather[0].description;
   }
   if (language == 1) {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=80c9e01c478e778c841796a3b53ed1d9&units=metric`;
      const res = await fetch(url);
      const data = await res.json();
      weatherIcon.className = 'weather-icon owf';
      weatherIcon.classList.add(`owf-${data.weather[0].id}`);
      temperature.textContent = `${data.main.temp}°C`;
      weatherDescription.textContent = data.weather[0].description;
   }

}
getWeather()



async function getQuotes() {
   if (language == 0) {
      const quotes = 'data.json';
      const res = await fetch(quotes);
      const data = await res.json();
      let length = data.length;
      let num = Math.floor(Math.random() * length);
      //if (num == 0) { num = length }

      quote.textContent = data[num].text;
      author.textContent = data[num].author;
   }
   if (language == 1) {
      // console.log('fyfel');
      const quotes = 'data1.json';
      const res = await fetch(quotes);
      const data = await res.json();
      let length = data.length;
      let num = Math.floor(Math.random() * length);
      //if (num == 0) { num = length }

      quote.textContent = data[num].text;
      author.textContent = data[num].author;
   }

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

