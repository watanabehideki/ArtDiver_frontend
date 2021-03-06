import React from 'react'
import './UserPostList.css'


const UserPostList = (props) => {

  const currentUser = localStorage.getItem('user')
  const currentUser_p =JSON.parse(currentUser)

  const userPostList = props.userPostList

  const exhibition_user_post = userPostList.filter(item => {return item.exhibition_id === props.exhibition_id})


  return (
    <>
    <div className='user-post-list-wrap'>
      <ul  className='user-post-list'>
        <h2>感想一覧</h2>
        <br></br>
        {exhibition_user_post.map((items) =>
        <li key={items.id}>
          <div>{items.created_at}</div>
          <div className='user-post-content'>{items.content}
          <hr className='user-post-list-hr'></hr>
          </div>
          {currentUser?
          <div>
            { (items.user_id === currentUser_p.id) &&
              <input type='submit' value='削除' onClick={()=> props.onDelete(items.id)} className='post-delete-submit'></input> 
            }
          </div>
          :null
          }
          <br></br>
          </li>
          )}
      </ul>
    </div>
    </>
  )
}
export default UserPostList
