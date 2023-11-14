var mybtn = document.getElementById('btn');
var mycontainer =document.getElementById('bagecolor');
 var mynumber=document.getElementById('number');

mybtn.addEventListener('click',changeColor);


function changeColor(){
 let a = Math.random().toString();
 let b=a.slice(2,8);
 mynumber.innerHTML="#"+b;
mycontainer.style.backgroundColor = '#'+b;
}