

  var minutes3 = 9;
  var cick3 = 0;
 var seconds3 = 60;

 var minutes1 = 24;
  var cick1 = 0;
  var seconds1 = 60;

  var minutes2 = 4;
  var cick2 = 0;
   var seconds2 = 60;
   var x;
   var y;
   var z;

const t1 = document.querySelector('.tab-content');
const ch1 =t1.children[0].children[0];
const ch2 =t1.children[0].children[1];


const t0= document.querySelector(".tab-list");

//to display initially
t0.children[0].className="tab-item active";
  t1.children[0].className="tab-item-content active";

// PRomodoro
t0.children[0].addEventListener('click',()=>{
  

  // HIde short break
  t0.children[1].className="tab-item";
  t1.children[1].className="tab-item-content";

  //Hide long break

  t0.children[2].className="tab-item";
  t1.children[2].className="tab-item-content";


  t0.children[0].className="tab-item active";
  t1.children[0].className="tab-item-content active";

  

 

  


ch2.addEventListener('click',()=>{

  t1.children[0].children[2].style.display = "block";
  t1.children[0].children[1].style.display = "none";
  t1.children[0].children[2].addEventListener('click',()=>
    {
      t1.children[0].children[2].style.display = "none";
      t1.children[0].children[1].style.display = "block";
  
  
      clearInterval(x);
    
    })
   x = setInterval(()=>{
  
  if (minutes1 > -1)
  {
      seconds1--;
  ch1.innerHTML = `${minutes1} : ${~~(seconds1/10)}${(seconds1%10)}`;
  if (seconds1==0)
  {
    minutes1--;
    seconds1= 60;
  }
  }
  else {
    clearInterval(x);
  }
    },1000);
    /*ch2.style.backgroundColor =`rgb(${cick*10+cick},${cick*10},${cick*100})`;
  cick=cick+0.5;
    ch2.innerHTML = `Start x${cick}`; 
  
document.getElementById('rnd-text').innerHTML='Carry On!';
*/
})
}

)


//short break


const ch3 =t1.children[1].children[0];
const ch4 =t1.children[1].children[1];

t0.children[1].addEventListener('click',()=>{

 
//hide long break
t0.children[2].className="tab-item";
t1.children[2].className="tab-item-content";

//Hide promodoro

t0.children[0].className="tab-item";
t1.children[0].className="tab-item-content";


  t0.children[1].className="tab-item active";
  t1.children[1].className="tab-item-content active";

 
  

  
  
  ch4.addEventListener('click',()=>{
 
    t1.children[1].children[2].style.display = "block";
    t1.children[1].children[1].style.display = "none";
  
    t1.children[1].children[2].addEventListener('click',()=>
    {
     t1.children[1].children[2].style.display = "none";
      t1.children[1].children[1].style.display = "block";
  
  
      clearInterval(y);
    
    })
    y = setInterval(()=>{
    
    if (minutes2 > -1)
    {
        seconds2--;
    ch3.innerHTML = `${minutes2} : ${~~(seconds2/10)}${(seconds2%10)}`;
    if (seconds2==0)
    {
      minutes2--;
      seconds2= 60;
    }
    }
    else{
      clearInterval(y);
    }
      },1000);
    
      
    document.getElementById('rnd-text').innerHTML='Carry On!';
      
 
   
})
})


//longer break


const ch5 =t1.children[2].children[0];
const ch6 =t1.children[2].children[1];

t0.children[2].addEventListener('click',()=>{

 
//hide short break
t0.children[1].className="tab-item";
t1.children[1].className="tab-item-content";

//Hide promodoro

t0.children[0].className="tab-item";
t1.children[0].className="tab-item-content";


  t0.children[2].className="tab-item active";
  t1.children[2].className="tab-item-content active";

  

  
  ch6.addEventListener('click',()=>{
   

  
    t1.children[2].children[2].style.display = "block";
    t1.children[2].children[1].style.display = "none";
 t1.children[2].children[2].addEventListener('click',()=>
 {
   t1.children[2].children[2].style.display = "none";
   t1.children[2].children[1].style.display = "block";


   clearInterval(z);
 
 })
  z = setInterval(()=>{
    
  
    if (minutes3 > -1)
    {
        seconds3--;
    ch5.innerHTML = `${minutes3} : ${~~(seconds3/10)}${(seconds3%10)}`;
    if (seconds3==0)
    {
      minutes3--;
      seconds3= 60;
    }
    }
    else{
      clearInterval(z);
    }
      },1000);
   
  
document.getElementById('rnd-text').innerHTML='Carry On!';

 
   
})
})



   