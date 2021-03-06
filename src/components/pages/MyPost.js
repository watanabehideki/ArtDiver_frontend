import React from 'react'
import { Link } from 'react-router-dom'

const MyPost = (props) => {
  
  
  return (

    <div className='user-post-list-wrap'>
    <ul  className='user-post-list'>
      <h2>感想一覧</h2>
      <br></br>
      {props.myPageData.map((items) =>
      <li key={items.id}>
        <div>{items.created_at}</div>
        <Link to={`/exhibitions/${items.exhibition_id}`}>{items.exhibition_title}</Link>
        <div className='user-post-content'>{items.content}
        <hr className='user-post-list-hr'></hr>
        </div>
        <div>
          <input type='submit' value='削除' onClick={()=> props.onDeleteMyPost(items.id)} className='post-delete-submit'></input> 
        </div>
        <br></br>
        </li>
        )}
    </ul>
  </div>

  )
}

export default MyPost
