/*var str =  'щелкни здесь!';
var a_href = str.bold().fontcolor('green').link('JavaScript:alert("Привет!")');

document.write(a_href);// создается ссылка в штмл зеленого цвета с выводом alert("Привет!")*/

let answer = prompt("Как жизнь молодая ?"); 
  //if(answer !== "string") {alert("Нужны буквы");}
  if (answer == 'ok') { 
    alert(`Так держать ! 👍`); 
  } else /*if (answer !== 'ok')*/ { 
    alert(`Нуу !`); 
  } //else {alert("Нужны буквы"); } 

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
articleText.addEventListener('mousemove', (event) => {
  event.stopPropagation();
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

// здесь найдены и записаны в переменные эл-ты, с кликом на них или 
//наведением мыши для замены фото
const newCard = document.querySelector('.accordions');
const newText = document.querySelector('.text-car2');
const newPhoto2 = document.querySelector('.newPhoto2_rabbit');// при отключении пропадают все функции в js, не ясно почему, кроме слайдера  и акордионса
const cardOff = document.querySelector('.cardOff_cone');
const newPhoto = document.querySelector('.newPhoto_santa');
const newCar = document.querySelector('.newCar_car2');
const newPhoto1 = document.querySelector('.newPhoto1_house');
// эл-ты, которые мигают, как салют, в переменную в не функций записывать не нужно

newCard.addEventListener('click', function loop(event) {
  event.stopPropagation();//чтоб событие не всплывало 
  const newCar = document.querySelector('.newCar_car2 img');
    newCar.style.cursor = "pointer";
    newText.innerHTML = "Эта тачка тебе";
    newText.style.color = "#ffeb00";
    newText.style.left = "-84px";
  if (newCar !== null) { // если элемент найден
    newCar.setAttribute('src', 'https://gif5gif.ucoz.ru/_ph/1/130202818.gif?1665612335');
    return true;
  } else { // иначе он не найден
    return false;
  }
});
newCar.addEventListener('mousemove', function loop(event) {
  event.stopPropagation();//чтоб событие не всплывало 
  const newCar = document.querySelector('.newCar_car2 img');
    newCar.style.cursor = "pointer";
    newText.innerHTML = "А эта тачка жене";
    newText.style.color = "#8be726";
    newText.style.left = "198px";
  if (newCar !== null) { // если элемент найден
    newCar.setAttribute('src', 'https://gif5gif.ucoz.ru/_ph/1/883246981.gif');
    return true;
  } else { // иначе он не найден
    return false;
  }  
});

newCard.addEventListener('click', function loopp(event) {
  event.stopPropagation();//чтоб событие не всплывало 
  const newPhoto = document.querySelector('.newPhoto_santa img');
    newPhoto.style.cursor = "pointer";
  if (newPhoto !== null) { // если элемент найден
    newPhoto.setAttribute('src', 'https://god-krolika.ru/wp-content/uploads/2022/06/snov8y923uu-25.gif');
    return true;
  } else { // иначе он не найден
    return false;
  }
});
newPhoto.addEventListener('mousemove', function loopp(event) {
  event.stopPropagation();//чтоб событие не всплывало 
  const newPhoto = document.querySelector('.newPhoto_santa img');
    newPhoto.style.cursor = "pointer";
  if (newPhoto !== null) { // если элемент найден
    newPhoto.setAttribute('src', 'https://www.mirgif.com/prazdniki/noviy-god/nov-god-7.gif');
    return true;
  } else { // иначе он не найден
    return false;
  }
});

newCard.addEventListener('click', function looppp(event) {
  event.stopPropagation();//чтоб событие не всплывало 
  const newPhoto1 = document.querySelector('.newPhoto1_house img');
    newPhoto1.style.cursor = "pointer";
  if (newPhoto1 !== null) { // если элемент найден
    newPhoto1.setAttribute('src', 'https://miranimacii.ru/_ph/2/834869077.gif');
    return true;
  } else { // иначе он не найден
    return false;
  }
});
newPhoto1.addEventListener('mousemove', function looppp(event) {
 event.stopPropagation();//чтоб событие не всплывало 
  const newPhoto1 = document.querySelector('.newPhoto1_house img');
    newPhoto1.style.cursor = "pointer";
  if (newPhoto1 !== null) { // если элемент найден
    newPhoto1.setAttribute('src', 'https://www.mirgif.com/prazdniki/noviy-god/novyj-god-180.gif');
    return true;
  } else { // иначе он не найден
    return false;
  }
});

newPhoto2.addEventListener('click', function loopppp(event) {
  event.stopPropagation();//чтоб событие не всплывало 
  const newPhoto2 = document.querySelector('.newPhoto2_rabbit img');
    newPhoto2.style.cursor = "pointer";
  if (newPhoto2 !== null) { // если элемент найден
    newPhoto2.setAttribute('src', 'https://2023god.com/wp-content/uploads/2022/09/animacionnye-otkrytki-s-novym-2023-godom-krolika-16-1.gif');
    return true;
  } else { // иначе он не найден
    return false;
  }
});
newPhoto2.addEventListener('mousemove', function loopppp(event) {
  event.stopPropagation();//чтоб событие не всплывало 
  const newPhoto2 = document.querySelector('.newPhoto2_rabbit img');
    newPhoto2.style.cursor = "pointer";
  if (newPhoto2 !== null) { // если элемент найден
    newPhoto2.setAttribute('src', 'https://god-krolika.ru/wp-content/uploads/2022/06/6fed085f54bf2b5e385ceb6c2550a4b0.gif');
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

// можно нажимать на самого Деда Мороза /*photoOff*/
cardOff.addEventListener('click', function showHide(event) {
  event.stopPropagation();//чтоб событие не всплывало 
  const photoOff = document.querySelector('.photoOff_santaInPipe img');
    photoOff.style.cursor = "pointer";
  if (photoOff.style.display == "block") { // если элемент найден // 
    photoOff.style.display = "none";
    return true;
  } else { // иначе он не найден
    photoOff.style.display = "block";
    return false;
  }
  //alert("hi");
});

//5 пример с AdjacentHTML
//создаем переменну с контентом, который будет в новом элементе 
//<article></article>,который будет расположен над <img class"friends">
const content = "Happy New Year !";
document.querySelector(".friends").insertAdjacentHTML("beforebegin", 
`<article class="text-friends"> ${content} </article>`);
const textFriends = document.querySelector('.text-friends');
  textFriends.style ="font-size: 117px";
  textFriends.style.position ="absolute";
  textFriends.style.width =" 1001px";
  textFriends.style.color = "#ff9800";
  textFriends.style.top = "2773p";
  textFriends.style.left = "139px";
  textFriends.style.zIndex = "2";
  textFriends.style.textShadow = "7px 7px 7px";

function blink() {
  const article = document./*getElementById*/querySelector('.text-friends');//#hi
  if (article.style.visibility == "hidden") {
    article.style.visibility = "visible";
    //textFriends.style.color = "green"; изменить цвет текста здесь можно
  } else {
    article.style.visibility = "hidden";
  }
} 
/*можно сделать в штмл див или артикль id, но рекомендуют, чтобы id был 1, или class с текстом hi, найти его 
const article = document.getElementById, .querySelector('hi'); и включить сэт интервал*/
//window.setInterval(blink, 2000);
const time = setInterval(() => {
  const resultLoop = blink();
  if (resultLoop === true) { // если элемент найден
    clearInterval(time); // остановить setInterval
  }
}, 2000);  /*можно использовать для изменения фото если 
поставить ссылку с неограниченным колличеством фоток, на пример, 
'https://picsum.photos/100'*/

function blinked() {
  const div = document./*getElementById('copyrite');*/querySelector('.copyrite');
  if (div.style.visibility == "hidden") {
    div.style.visibility = "visible";
  } else {
    div.style.visibility = "hidden";
  }
} 
 window.setInterval(blinked, 1000);

function blinkede() {
  const figure = document./*getElementById('salutes');*/querySelector('.salutes');
  if (figure.style.visibility == "hidden") {
    figure.style.visibility = "visible";
  } else {
    figure.style.visibility = "hidden";
  }
} 
 window.setInterval(blinkede, 3000);

function blinkeded() {
  const section = document./*getElementById*/querySelector('.continer-salute');
  if (section.style.visibility == "hidden") {
    section.style.visibility = "visible";
  } else {
    section.style.visibility = "hidden";
  }
} 
 window.setInterval(blinkeded, 4500); // можно подключить, чтоб массив салютов 
//появился, исчез

 function timer() {
    // Находим элемент h1 в документе
   //h1 = document.getElementsByTagName('h1')[0];
   const h1 = document.querySelector('.time');
    // Устанавливаем дату
    var date = new Date();
    
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    
    if (hours < 10) hours = "0" + hours;       // Для удобства отображения
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    
   h1.innerHTML = hours + ":" + minutes + ":" + seconds;
   
    // Вызываем функцию раз в одну секунду
    setTimeout('timer()', 1000);/*setInterval работает тоже*/
}

// Получает текущую дату и время
//d = new Date();
//document.write/*body.textContent =*/('Время: '+ d.toLocaleTimeString());должно показывать время, пока не показывает
//alert('Время: '+ d.toLocaleTimeString());

/*//3 пример создаем элемент
const div = document.createElement("div");
//заполняем элемент
div.innerHTML = "<p id=\"custom\">Hello!</p>";
//ищем родительский по методу (поиск по любому CSS-селектору) узел и добавляем над ним элемент
const appp = document.querySelector("#appp");
document.body.insertBefore(div, appp);*/

/*document.getElementsByTagName("img")[0];
const img = document.querySelector('.flying_santa');
img.addEventListener('mousemove', (event) => {
//img.classList.toggle('img--mymove');
//img.style.animationIterationCount= 5;
img.style.cursor = "pointer";
//img.style.animationDelay = "5s"; //время через сколько запустится анимация
event.stopPropagation();//чтоб событие не всплывало
});*/