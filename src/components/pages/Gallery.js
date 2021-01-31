import React, { useState, useEffect } from 'react'
import './Gallery.css'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import MessageLinkButton from '../MessageLinkButton'



function Gallery() {

  const [gallery, setGallery] = useState({})
  let { id } = useParams()

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:4001/galleries/${id}`,
      headers: JSON.parse(localStorage.getItem('user'))
    }).then((response) => {
      setGallery(response.data)
    })
  }, [id])

  return (
    <>
      <div className='gallery-name'>
        <h2>{gallery.name}</h2>
      </div>
      <div className='gallery-top'>
        <div className='gallery-img'>
          <img src={`../images/gallery-${gallery.id}.jpg`}  />
        </div>
        <p>{gallery.content}</p>
      </div>
      <div className='infomation-wrap'>
        <div>
          <table>
            <tbody>
              <tr>
                <th>住所</th>
                <td>{gallery.location}</td>
              </tr>
              <tr>
                <th>電話</th>
                <td>{gallery.tel}</td>
              </tr>
              <tr>
                <th>開館時間</th>
                <td>{gallery.open_time}</td>
              </tr>
              <tr>
                <th>休館日</th>
                <td>{gallery.holiday}</td>
              </tr>
              <tr>
                <th>URL</th>
                <td><Link to='#'>{gallery.url}</Link></td>
              </tr>
           </tbody>
          </table>
        </div>
        <div className='message-link-button'>
          <MessageLinkButton id={gallery.id}/>
        </div>
      </div>
    </>
  )
}

export default Gallery
