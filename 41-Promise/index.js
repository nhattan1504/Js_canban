console.log('Start fetching...');
var request= require('request');
var fs= require('promise-fs');
// request('https://jsonplaceholder.typicode.com/todos/1', function (error, response, body) {
//   if (error !== null) {
//     console.log('error:', error); // Print the error
//   }
//   console.log('Done:', body);
// });

console.log('Nothing');
function load(path)
{
    return new Promise( function(resolve, reject)
    {
        return request(path, function(err,response ,body)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                console.log(response);
                resolve(body);
            }
        }
        );
    }
    );

}
load('https://jsonplaceholder.typicode.com/todos/1').then(function(body){
    console.log('Done', body);
}) 