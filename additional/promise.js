let docs =[
    {nam : 'Rem',age : 12},
    {nam : 'Shem',age : 92},
    
    ];
    
    function make()
        {
            setTimeout(() => {
     docs.forEach((index,item) => {
        document.getElementById('gg1').innerHTML+= index.nam+'</br>';
     });       
            }, 2000);
        }
    
    
    function createnew(ccc)
    {
        /*Here time is more or equal to than above Timeout so 
        it couldnt save the Babe details in above docs to print all the 3 
        details*/ 
    
return    new Promise((resolve,reject)=>{
        setTimeout(()=>
        {
            docs.push(ccc);
    const err = false;
            if (!err)
    {
resolve();
    } else
    {
reject('Error; THere is going in wrong here');
    }
        },5000);
    
}
)
    }

    createnew({nam : 'Babe',age : 92})
    .then(make)
    .catch(er => console.log(er));


// Promise all

let p1= 10;
let p2 = new Promise((resolve,reject)=>
{
setTimeout(resolve,2000,'gg')
});
let p3 =  Promise.resolve("cc");
//Promise.reject('nono'); Can also be used and catch will be used

Promise.all([p1,p2,p3])
.then(v =>console.log(v))
