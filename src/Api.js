import React, { useEffect, useState }  from 'react';

export default function Api() {

    const [Result, setResult] = useState([]);

useEffect(()=>{

   fetch('https://api.github.com/users/umairulhasan/repos')
  .then((no) => no.json())
  .then((json) => { setResult(json)
    console.log("UseFffect console",json)}) 
 
  
},

[]);




  return (
    <div>
      <h1>{Result[2]}</h1>
    </div>
  );
}
