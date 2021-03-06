import React, {useState,useEffect} from 'react'
import axios from 'axios'

import MyPost from './MyPost'

const Mypage =() => {

  const currentUser = localStorage.getItem('user')
  const currentUser_p =JSON.parse(currentUser)

  const [myPageData,setMyPageData] = useState([])

  useEffect(()  =>  {
    async function fetchData()  {
      const result = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/users/${currentUser_p.id}`,)
        console.log(result)
        console.log(result.data)
        setMyPageData(result.data)
      }
      fetchData();
      }, );

    const deleteMyPost = (id) => {
      axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/v1/microposts/${id}`)
      .then(response => {
        setMyPageData(myPageData.filter(x => x.id !== id))
      }).catch(data =>  {
        console.log(data)
      })
    }
  
  return (
    <>
    <MyPost myPageData={myPageData} onDeleteMyPost={deleteMyPost} />
    </>
  )
}

export default Mypage
