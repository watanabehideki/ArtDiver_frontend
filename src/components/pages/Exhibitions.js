import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Exhibitions.css'


export default function Exhibitions() {

  const [exhibitions, setExhibitions] = useState([]);

  useEffect(()  =>  {
    async function fetchData()  {
      const result = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/exhibitions`)
        console.log(result)
        console.log(result.data)
        setExhibitions(result.data);
      }
      fetchData();
      }, []);

  return (
    <>
      <div className='exhibitions-item-wrap' >
        <ul className='exhibitions-item'> 
          {exhibitions.map((item, i) =>
          <li key={i}> 
            <Link  className='exhibitions-item-link' to={`/exhibitions/${item.id}`}>
              <figure className='exhibitions-item-img'>
                <img src={`./images/exhibition-${item.id}.jpg`} alt='展覧会イメージ'className='fade-img'/>
              </figure>
              <div className='exhibitions-item-info'>
                <div className='exhibitions-item-title'>{item.title}</div>
                <div className='exhibitions-item-name'>{item.gallery.name}</div>
                <div className='exhibitions-item-date'>{item.start_date}-{item.end_date}</div>
              </div>
            </Link> 
          </li>
          )}
        </ul>
      </div>
    </>
  )
}

