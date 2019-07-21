var axios= require('axios');
var all=require('promise-all');



Promise.all([
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then(function(response){
        console.log(response.data);
    }).catch(function(error){
        console.log(error);
    }),
    axios.get('https://jsonplaceholder.typicode.com/todos/2').then(function(response){
        console.log(response.data);
    }).catch(function(error){
        console.log(error);
    }),
    axios.get('https://jsonplaceholder.typicode.com/todos/3').then(function(response){
        console.log(response.data);
    }).catch(function(error){
        console.log(error);
    })

]).then(function(values)
{console.log(values);}
).catch(function(error){console.log(error);}
);
