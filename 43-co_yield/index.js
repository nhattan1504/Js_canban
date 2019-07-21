var axios=require('axios');
var co=require('co');
var urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3',
    'https://jsonplaceholder.typicode.com/todos/4',
    'https://jsonplaceholder.typicode.com/todos/5'
  ];
  function load(path){
      return axios.get(path);
  }
//   co( function*(){
//       var values=yield[
//           load('https://jsonplaceholder.typicode.com/todos/1'),
//           load('https://jsonplaceholder.typicode.com/todos/2'),
//         load('https://jsonplaceholder.typicode.com/todos/3'),
//         load('https://jsonplaceholder.typicode.com/todos/4'),
//         load('https://jsonplaceholder.typicode.com/todos/5')
//       ];
//       return values;
//   }).then(function(item )
//   {
//       for(i=0;i<item.length;i++)
//       {
//           console.log(item[i].data);
//       }
//   }).catch(function(error){
//       console.log(error);
//   });
  
  var datas=co.wrap(function*(list)
  {
      var lists= yield list.map(function(item)
      {
          return load(item);
      });
      return lists;
  });
  datas(urls).then(function(value)
  {
      for(i=0;i<value.length;i++)
      {
          console.log(value[i].data);
      }
  }).catch(function(error)
  {
      console.log(error);
  })