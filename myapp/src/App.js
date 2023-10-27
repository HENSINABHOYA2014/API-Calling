import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const[allrecord,setAllRecord]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(record=>setAllRecord(record))
    .catch(error=>console.error(error))
  },[])
  return (
    <div className="App">
      <h1>API CALLING</h1>
      {
        allrecord.map((val)=>{
          return(
            <>
            <p>{val.id}</p>
            <p>{val.name}</p>
            <p>{val.username}</p>
            <p>{val.email}</p>
            
            
            </>
          )
        })
      }
    </div>
  );
}

export default App;
