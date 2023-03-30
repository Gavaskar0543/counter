var current = document.querySelector('.current');
var next = document.querySelector('.next');
var interval;
var targetCount = document.getElementById('text-box');
console.log(targetCount);
let i = 0;
 let starter = 1;
 let stoper = 0;

function startCounter(){
stoper = Number(targetCount.value);  
   interval = setInterval(animate,1000);
  
}

function animate(){

  next.classList.add('animate');
  next.innerText = ++i;
  setTimeout(function(){ 
    next.classList.remove('animate')
      current.innerText = starter++;
     ; 
     
    if( i == stoper){
      stopCounter();
      return;
    }
  },500)
 

}
function stopCounter(){
  clearInterval(interval);
}
