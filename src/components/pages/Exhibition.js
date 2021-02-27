import React, { useState, useEffect } from 'react'
import './Exhibition.css'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'


export default function Exhibition() {

  const [exhibition, setExhibition] = useState({});
  const [gallery, setGallery] = useState({});
  let { id } = useParams()

  useEffect(() => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_BACKEND_URL}/api/v1/exhibitions/${id}`,
      headers: JSON.parse(localStorage.getItem('user'))
    }).then((response) => {
      console.log(response)
      setExhibition(response.data)
      setGallery(response.data.gallery)

    })
  }, [id])

  return (
    <>
    <div className='exhibition-wrap'>
      <div className='exhibition-title'><h2>{exhibition.title}</h2></div>
      <div className='exhibition-img'>
        <img src={`../images/exhibition-${exhibition.id}.jpg`} alt='展覧会イメージ'/>
      </div>
      <div className='exhibition-content'>{exhibition.content}</div>
      <div className='exhibition-info'>
        <p>{exhibition.title}</p>
        <table>
          <tbody>
            <tr>
              <th>会期</th>
              <td>{exhibition.start_date} ~ {exhibition.end_date}</td>
            </tr>
            <tr>
              <th>会場</th>
              <td>{gallery.name}</td>
            </tr>
            <tr>
              <th>住所</th>
              <td>{gallery.location}</td>
            </tr>
            <tr>
              <th>電話</th>
              <td>{exhibition.tel}</td>
            </tr>
            <tr>
              <th>開館時間</th>
              <td>{exhibition.open_time}</td>
            </tr>
            <tr>
              <th>休館日</th>
              <td>{exhibition.holiday}</td>
            </tr>
            <tr>
              <th>観覧料</th>
              <td>{exhibition.admission}</td>
            </tr>

            <tr>
              <th>URL</th>
              <td><Link to='#'>{exhibition.url}</Link></td>
            </tr>
          </tbody>
        </table>


      </div>
      
    </div>
    </>
  )
}


