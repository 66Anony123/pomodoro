
var x;
var y;
var z;
const t1 = document.querySelector('.tab-content');
const ch1 =t1.children[0].children[0];
const ch2 =t1.children[0].children[1];
//console.log(ch2);

const t0= document.querySelector(".tab-list");

//to display initially
t0.children[0].className="tab-item active";
  t1.children[0].className="tab-item-content active";

// PRomodoro
t0.children[0].addEventListener('click',()=>{
  
  clearInterval(y);
  clearInterval(z);
  // HIde short break
  t0.children[1].className="tab-item";
  t1.children[1].className="tab-item-content";

  //Hide long break

  t0.children[2].className="tab-item";
  t1.children[2].className="tab-item-content";


  t0.children[0].className="tab-item active";
  t1.children[0].className="tab-item-content active";

  var minutes = 24;
  var cick = 0;
  var seconds = 60;
  

 
ch2.addEventListener('click',()=>{
    var x = setInterval(()=>{
  if (minutes > -1)
  {
      seconds--;
  ch1.innerHTML = `${minutes} : ${~~(seconds/10)}${(seconds%10)}`;
  if (seconds==0)
  {
    minutes--;
    seconds= 60;
  }
  }
  else{
    clearInterval(x);
  }
    },1000);
    ch2.style.backgroundColor =`rgb(${cick*10+cick},${cick*10},${cick*100})`;
  cick=cick+0.5;
    ch2.innerHTML = `Start x${cick}`; 
  
document.getElementById('rnd-text').innerHTML='Carry On!';

clearInterval(y);
clearInterval(z);  


})
})

//short break
const ch3 =t1.children[1].children[0];
const ch4 =t1.children[1].children[1];

t0.children[1].addEventListener('click',()=>{

  
  clearInterval(x);
  clearInterval(z);
  //Hide Promodoro
  t0.children[0].className="tab-item";
  t1.children[0].className="tab-item-content";

  //Hide long break
  t0.children[2].className="tab-item";
  t1.children[2].className="tab-item-content";

  t0.children[1].className="tab-item active";
  t1.children[1].className="tab-item-content active";

  var minutes = 4;
  var cick = 0;
  var seconds = 60;

  ch4.addEventListener('click',()=>{
     
  ch4.addEventListener('click',()=>{
    ch4.innerHTML="Pause";

clearInterval(y);
})

    var y = setInterval(()=>{
  if (minutes > -1)
  {
      seconds--;
  ch3.innerHTML = `${minutes} : ${~~(seconds/10)}${(seconds%10)}`;
  if (seconds==0)
  {
    minutes--;
    seconds= 60;
  }
  }
  else{
    clearInterval(y);
  }
    },1000);
    ch4.style.backgroundColor =`rgb(${cick*10+cick},${cick*10},${cick*100})`;
  cick=cick+0.5;
    ch4.innerHTML = `Start x${cick}`; 
 
document.getElementById('rnd-text').innerHTML='Carry On!';
 
clearInterval(x);
clearInterval(z);
 })
})


//longer break


const ch5 =t1.children[2].children[0];
const ch6 =t1.children[2].children[1];

t0.children[2].addEventListener('click',()=>{

  
  clearInterval(x);
  clearInterval(y);
//hide short break
t0.children[1].className="tab-item";
t1.children[1].className="tab-item-content";

//Hide promodoro

t0.children[0].className="tab-item";
t1.children[0].className="tab-item-content";


  t0.children[2].className="tab-item active";
  t1.children[2].className="tab-item-content active";

  var minutes = 9;
  var cick = 0;
  var seconds = 60;
  
  ch6.addEventListener('click',()=>{
    var z = setInterval(()=>{
  if (minutes > -1)
  {
      seconds--;
  ch5.innerHTML = `${minutes} : ${~~(seconds/10)}${(seconds%10)}`;
  if (seconds==0)
  {
    minutes--;
    seconds= 60;
  }
  }
  else{
    clearInterval(z);
  }
    },1000);
    ch6.style.backgroundColor =`rgb(${cick*10+cick},${cick*10},${cick*100})`;
  cick=cick+0.5;
    ch6.innerHTML = `Start x${cick}`; 

    document.getElementById('rnd-text').innerHTML='Carry On!';
 
    clearInterval(x);
 
  clearInterval(y);
})
})


