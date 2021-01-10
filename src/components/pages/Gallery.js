import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

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
    <div>
      {gallery.name}
      {gallery.content}
      {gallery.location}
      {gallery.tel}
      {gallery.open_time}
      {gallery.holiday}
      {gallery.url}
    </div>
  )
}

export default Gallery
