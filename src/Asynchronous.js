import React from 'react';

export default function Asynchronous() {


//GET Example 

async function ForGet(){
    
   const Check = await fetch('https://jsonplaceholder.typicode.com/posts/1')
   .then((response) => response.json())
   .then((json) => console.log('This is Async Await',json));
   
   console.log("Check this value", Check)
   // Setting a variable in Local Storage in React
localStorage.setItem('username', 'John Doe');

// Getting a variable from Local Storage in React
const username = localStorage.getItem('username');
console.log(username); // John Doe
}
ForGet()



fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log('This is Get',json));


// POST Example

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log('This is post' ,json));


  return (
    <div>
   
    </div>
  );
}
