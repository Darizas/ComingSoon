let burger = document.querySelector('.burger')
let navi = document.querySelector('.nav')

burger.addEventListener('click', () => {
    if (navi.className == 'nav') {
        document.getElementById('nav').classList.add('on');
    } else {
        document.getElementById('nav').classList.remove('on');
    }
})



var countDownDate = new Date("Dec 31, 2021 15:37:25").getTime();
        
var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);

mybutton = document.getElementById("upBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
} else {
    mybutton.style.display = "none";
}
}

function topFunction() {
currentYOffset = self.pageYOffset;
initYOffset = currentYOffset;

var intervalId = setInterval(function(){
currentYOffset -= initYOffset*0.05; 
document.body.scrollTop = currentYOffset ;
document.documentElement.scrollTop = currentYOffset;

    if(self.pageYOffset == 0){
    clearInterval(intervalId);
    }
}, 20);
}