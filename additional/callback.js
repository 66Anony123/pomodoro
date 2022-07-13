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
// this function is used to make call to analyze the delay 
//make();

//For call Back
function createnew(ccc,callback)
{
    /*Here time is more or equal to than above Timeout so 
    it couldnt save the Babe details in above docs to print all the 3 
    details*/
    setTimeout(()=>
    {
        callback();
        docs.push(ccc);

    },5000);
}


createnew({nam : 'Babe',age : 92},make);    
// The normal time delay
//let ccc={nam : 'Babe',age : 92};
//createnew();
