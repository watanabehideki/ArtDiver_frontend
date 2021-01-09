import React, { useState, useEffect} from 'react'
import axios from 'axios'
import './Galleries.css'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    maxWidth: 360,
  },
}));

export default function Galleries() {

  const [galleries, setgalleries] = useState([]);

    useEffect(()  =>  {
      async function fetchData()  {
        const result = await axios.get('http://localhost:4001/galleries',)
          console.log(result)
          console.log(result.data)
          setgalleries(result.data);
        }
        fetchData();
        }, []);

  const classes = useStyles();

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
