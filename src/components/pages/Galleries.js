import React, { useState, useEffect} from 'react'
import axios from 'axios'
import './Galleries.css'
import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';


export default function Galleries() {

  const [galleries, setGalleries] = useState([]);

    useEffect(()  =>  {
      async function fetchData()  {
        const result = await axios.get('http://localhost:4001/galleries',)
          console.log(result)
          console.log(result.data)
          setGalleries(result.data);
        }
        fetchData();
        }, []);


  return (
    <div>
      <li className='galleries-wrap'>
        {galleries.map(item => (
          <Link className='galleries-link' to={`/galleries/${item.id}`}>
            <div className='galleries-item' key={item.id} >
                <Avatar src={`images/gallery-${item.id}.jpg`}/>
              <div className='galleries-name'> {`${item.name}`} </div>
            </div>
          </Link>
        ))}
      </li>
    </div>
  );
}
