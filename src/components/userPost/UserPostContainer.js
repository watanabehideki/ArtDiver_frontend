import React,{useState, useEffect} from 'react'
import axios from 'axios'
import UserPostForm from './UserPostForm'
import UserPostList from './UserPostList'


const UserPostContainer = (props) => {


  const currentUser = localStorage.getItem('user')
  const currentUser_p =JSON.parse(currentUser)

  
  const [createUserPostContent, setCreateUserPostContent] = useState("")
  const [userPostList, setUserPostList] = useState([])

  const createUserPost = () => {
    axios({
      method: 'POST',
      url: `${process.env.REACT_APP_BACKEND_URL}/api/v1/microposts`,
      data: {
        user_id: currentUser_p.id,
        exhibition_id: props.exhibition_id,
        content: createUserPostContent
      }
    })
    .then(response => {
      setUserPostList([{
        id: response.data.id,
        exhibition_id: response.data.exhibition_id,
        content: response.data.content,
        created_at: response.data.created_at
      }, ...userPostList])
      resetTextField()
      })
  }


  useEffect(()  =>  {
    async function fetchData()  {
      const result = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/microposts`,)
        setUserPostList(result.data)
      }
      fetchData();
      }, []);

  const deleteUserPostContent = (id) => {
    axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/v1/microposts/${id}`)
    .then(response => {
      setUserPostList(userPostList.filter(x => x.id !== id))
    }).catch(data =>  {
    })
  }
  const resetTextField = () => {
    setCreateUserPostContent('')
  }

  return (
    <div>
      {currentUser? 
      <UserPostForm 
      setCreateUserPostContent={setCreateUserPostContent}
      onClick={createUserPost}
      content={createUserPostContent}
      />
      :null}
      <UserPostList 
      userPostList={userPostList} 
      exhibition_id={props.exhibition_id}
      onDelete ={deleteUserPostContent}
      // user_id={user_id}
      />
    </div>
    
  )
}

export default UserPostContainer
