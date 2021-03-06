import React from 'react'
import './UserPostForm.css'

const UserPostForm = (props) => {
  const handlePost = props.onClick
  const setCreateUserPostContent = props.setCreateUserPostContent  

  return (
    <>
    <div className='user-post-form-wrap'>
      <form  onSubmit={handlePost}  className='user-post-form'>
        <textarea
          placeholder='140字以内で入力して下さい'
          minLength="1" maxLength="140"
          value={props.content}
          onChange={event =>  setCreateUserPostContent(event.target.value)}
          className='user-post-textarea'
        />
        
        <input type='submit' value='感想を投稿する' className='user-post-form-submit'/>
      </form>
    </div>
    </>

)
}

export default UserPostForm
