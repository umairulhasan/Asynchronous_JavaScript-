/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState }  from 'react';

export default function Api() {

    const [result, setresult] = useState([{}]);

// useEffect(()=>{

//    fetch('https://api.github.com/users/umairulhasan/repos')
//   .then((no) => no.json())
//   .then((json) => { setResult(json)
//     console.log("UseFffect console",json)}) 
 
  
// },

// []);


useEffect(async () => {
  const response = await fetch(
    "https://api.github.com/users/umairulhasan/repos"
  );
  const data = await response.json();
  setresult(data)
  console.log("USeEffect new style",data);
}, []);



  return (
    <div>
    
    <h1>Hsiadu</h1>
    </div>
  );
}
