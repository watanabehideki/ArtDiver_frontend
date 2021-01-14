import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Exhibitions() {

  const [exhibitions, setExhibitions] = useState([]);

  useEffect(()  =>  {
    async function fetchData()  {
      const result = await axios.get('http://localhost:4001/exhibitions',)
        console.log(result)
        console.log(result.data)
        setExhibitions(result.data);
      }
      fetchData();
      }, []);

  return (
    <>
      <h1>Exhibitions</h1>
      {exhibitions.map(item => (
        <Link to={`/exhibitions/${item.id}`}>
          <li className='exceptions-wrap'> 
            <h2>{item.title}</h2>      
             <p>{item.gallery.name}</p>
          </li>
        </Link>
      ))}
    </>
  )
}
