import React, { useState, useEffect} from 'react'
import axios from 'axios'
import './Galleries.css'
import { Link } from 'react-router-dom'


export default function Galleries() {

  const [galleries, setGalleries] = useState([]);

    useEffect(()  =>  {
      async function fetchData()  {
        const result = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/galleries`,)
          console.log(result)
          console.log(result.data)
          setGalleries(result.data);
        }
        fetchData();
        }, []);

  return (
    <>
      <ul className='galleries-wrap'>
        {galleries.map((item, i) => 
        <li key={i}>
           <Link className='galleries-link' to={`/galleries/${item.id}`}>
            <div className='galleries-item' key={item.id} >
              <div className='galleries-avatar'>
                <img src={item.image} alt='ギャラリーイメージ'className='galleries-item-img'/>
              </div>
              <p className='galleries-name'> {`${item.name}`} </p>
            </div>
          </Link>
        </li>
        )}
      </ul>
    </>
  );
}
