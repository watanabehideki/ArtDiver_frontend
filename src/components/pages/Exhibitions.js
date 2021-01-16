import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Exhibitions.css'

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
      <div className='exhibitions-item-wrap' >
        <li className='exhibitions-item'> 
          {exhibitions.map(item => (
            <Link  className='exhibitions-item-link' to={`/exhibitions/${item.id}`}>
              <figure className='exhibitions-item-img'>
                <img src={`./images/exhibition-${item.id}.jpg`} className='fade-img'/>
              </figure>
              <div className='exhibitions-item-info'>
                <div className='exhibitions-item-title'>{item.title}</div>
                <div className='exhibitions-item-name'>{item.gallery.name}</div>
                <div className='exhibitions-item-date'>{item.start_date}-{item.end_date}</div>
              </div>
            </Link>
          ))}
        </li>
      </div>
    </>
  )
}

{/* <>
<li className='cards__item'>
  <Link className='cards__item__link' to={props.path}>
    <figure className='cards__item__pic-wrap' data-category={props.label}>
      <img
        className='cards__item__img'
        alt='Travel Image'
        src={props.src}
      />
    </figure>
    <div className='cards__item__info'>
      <h5 className='cards__item__text'>{props.text}</h5>
    </div>
  </Link>
</li>
</> */}
