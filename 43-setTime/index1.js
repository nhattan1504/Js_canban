var promise=require('promise');
function countDown(x) {
return new promise(function(resolve,reject)
{
    var y=setInterval(function(){
        console.log(x);
        --x;
        
        if(x==0)
        {
            clearInterval(y);
            resolve();
        }
    },1000);
}) 
}
    
function sayHappyNewYear() {
    console.log('Happy new year');
}
    
countDown(5).then(sayHappyNewYear);