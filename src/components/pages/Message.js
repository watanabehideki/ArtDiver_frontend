import React, { useState, useEffect } from 'react'
import './Message.css'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { init, sendForm } from 'emailjs-com'
init('user_VsBTDw5eoCox2k5FSFNiJ')


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(3),      
    },
  },
}));

const Message = () => {
  const [gallery, setGallery] = useState({})
  
  //demo設定
  const [testemail,setTestEmail] = useState('')
  const handleChange = (e) => {
    setTestEmail(() => e.target.value)
  }
  //

  let { id } = useParams()

  useEffect(() => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_BACKEND_URL}/api/v1/galleries/${id}`,
      headers: JSON.parse(localStorage.getItem('user'))
    }).then((response) => {
      setGallery(response.data)
    })
  }, [id])


  const classes = useStyles();
  const [contactNumber, setContactNumber] = useState("000000");
  const generateContactNumber = () => {
    const numStr = "000000" + (Math.random() * 1000000 | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  } 
   
  const [statusNotice, setStatusNotice] = useState("Notice"); 

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const form = document.querySelector('#contact-form');
    const statusNotice = document.querySelector('.status-notice');

    console.log(data);
    generateContactNumber();
    sendForm('default_service', 'template_k1lmici', '#contact-form')
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        form.reset();
        setStatusNotice("送信しました。")
        statusNotice.className='status-notice success'
        setTimeout(()=> {
          statusNotice.className='status-notice'
        }, 5000)
      }, function(error) {
        console.log('FAILED...', error);
        setStatusNotice("送信エラー")
        statusNotice.className='status-notice failure'
        setTimeout(()=> {
          statusNotice.className='status-notice'
        },5000)
      });
  }

  return (
    <>
    <div className='message-container'>

      <div className='contact-wrap'>
        <h3>Message To : {gallery.name}</h3>
        <div className='message'>
          <p className='status-notice'>{statusNotice}</p>
          <div className='message-form'>
            <form className={classes.root} id='contact-form' onSubmit={handleSubmit(onSubmit)}>
              <input type='hidden' name='contact_number' value={contactNumber} />
              <input type='hidden' name='gallery_email' value={testemail} />

              <TextField  label="お名前" type='text' name='user_name' ref={register} />
              <TextField  label="メールアドレス" type='email' name='user_email' ref={register} onChange={handleChange} value={testemail}/> 
              <TextField  label="TEL" type='tel' name='user_tel' ref={register} />
              <TextField  label="住所" type='text' name='user_address' ref={register} />
              <TextField  label="好きな作家" type='text' name='favorite_artist' ref={register} />
              <TextField  className='message-field' multiline  rows={6} label="ご意見・ご感想等" name='message' ref={register}  maxLength='1500'/>
              <div className='message-sent'>
              <input className='submit' type='submit' value='送信' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
export default Message;