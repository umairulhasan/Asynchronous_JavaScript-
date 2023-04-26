import React, { useEffect, useState }  from 'react';

export default function Api() {

    const [Result, setResult] = useState({});

useEffect(()=>{

 fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((no) => no.json())
  .then((json) => { setResult(json)
    console.log("UseFffect console",json)}) 
 
  
},

[]);




  return (
    <div>
      <h1>{Result.id}{Result.body}{Result.id}</h1>
    </div>
  );
}
