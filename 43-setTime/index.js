function countDown(x)
{
var y=setInterval(function(){
    --x;
    console.log('tokyo');
    if(x==0)
    {
        clearInterval(y);
    }
},1000);
return y;
}
countDown(5);