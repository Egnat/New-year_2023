let slideIndex = 1;
        
function positionSlides(n) {
  showSlides(slideIndex += n);
} 

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
for (let i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";  
}
for (let i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
}
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

showSlides(slideIndex);

const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");

btnPrev.addEventListener("click", () => {positionSlides(-1);});
btnNext.addEventListener("click", () => {positionSlides(1);});

const articleText = document.querySelector(".slide-text5");

articleText.addEventListener('mousemove', () => {
articleText.innerHTML = "З Новим роком !";
articleText.style.color = "#e5d03d";
articleText.style.left = "-198px";
articleText.style.width = "655px";
articleText.style.cursor = "pointer";
});

const accs = document.getElementsByClassName("contentBs");
for (i = 0; i < accs.length; i++) {
accs[i].addEventListener("click", function() {
  this.classList.toggle("active");
 });
} 

const newCard = document.querySelector('.accordions');
const newText = document.querySelector('.text-car2');

newCard.addEventListener('click', function loop() {
  const newCar = document.querySelector('#newCar img');
  newCar.style.cursor = "pointer";
  newText.innerHTML = "Эта тачка тебе";
  newText.style.color = "#ffeb00";
  if (newCar !== null) { // если элемент найден
    newCar.setAttribute('src', 'https://gif5gif.ucoz.ru/_ph/1/130202818.gif?1665612335');
    return true;
  } else { // иначе он не найден
    return false;
  }
});

newCar.addEventListener('mousemove', function loop() {
  const newCar = document.querySelector('#newCar img');
  newCar.style.cursor = "pointer";
   newText.innerHTML = "А эта тачка жене";
   newText.style.color = "#e30d0d";
  if (newCar !== null) { // если элемент найден
    newCar.setAttribute('src', 'https://gif5gif.ucoz.ru/_ph/1/883246981.gif');
    return true;
  } else { // иначе он не найден
    return false;
  }
});
/*const timer = setInterval(() => {// по идее работает если поставить ссылку с неограниченным колличеством фоток, на пример, 'https://picsum.photos/100'
  const resultLoop = loop();
  if (resultLoop === true) { // если элемент найден
    clearInterval(timer); // остановить setInterval
  }
}, 300); 
<div class="t706__product-del">
<img src="https://something.com/something.svg">
</div> это пример, как нужно записывать img для замены ссылок */

/*//3 пример создаем элемент
const div = document.createElement("div");
//заполняем элемент
div.innerHTML = "<p id=\"custom\">Hello!</p>";
//ищем родительский по методу (поиск по любому CSS-селектору) узел и добавляем над ним элемент
const appp = document.querySelector("#appp");
document.body.insertBefore(div, appp);*/

//5 пример с AdjacentHTML
//создаем переменну с контентом, который будет в новом элементе <article></article>,который будет расположен над <article id="img"></article> 
const contentt = "Happy New Year !";
document.querySelector(".friends").insertAdjacentHTML("beforebegin", `<article class="text-friends"> ${contentt} </article>`);
const textFriends = document.querySelector('.text-friends');
textFriends.style ="font-size: 127px";
textFriends.style.position ="absolute";
textFriends.style.color = "##ff9800";
textFriends.style.top = "2773px";
textFriends.style.left = "161px";
textFriends.style.zindex = "1";

/*document.getElementsByTagName("img")[0];
const img = document.querySelector('.img-2');
img.addEventListener('mousemove', (event) => {
//img.classList.toggle('img--mymove');
//img.style.animationIterationCount= 5;
img.style.cursor = "pointer";
//img.style.animationDelay = "5s"; //время через сколько запустится анимация
event.stopPropagation();//чтоб событие не всплывало
});*/