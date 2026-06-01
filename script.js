const targetDate = new Date("March 05, 2026 08:00:00").getTime();

setInterval(() => {

const now = new Date().getTime();
const distance = targetDate - now;

const days = Math.floor(distance / (1000*60*60*24));
const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
const minutes = Math.floor((distance%(1000*60*60))/(1000*60));
const seconds = Math.floor((distance%(1000*60))/1000);

document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

},1000);

window.onload = () => {

setTimeout(()=>{
document.querySelector(".loader").style.display="none";
},1500);

}

const reveal = document.querySelectorAll('.reveal');

window.addEventListener('scroll',()=>{

reveal.forEach(item=>{

const top = item.getBoundingClientRect().top;

if(top < window.innerHeight - 100){
item.classList.add('active');
}

});

});

document.getElementById('openInvite').addEventListener('click',()=>{

document.getElementById('content').scrollIntoView({
behavior:'smooth'
});

const music = document.getElementById('music');
music.play();

});
