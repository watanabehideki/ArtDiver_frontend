import { useState, useEffect } from 'react'
import axios from 'axios'


const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setErrors(validate(values))
    setIsSubmitting(true)
    axios({
      method: 'POST',
      url: `${process.env.REACT_APP_BACKEND_URL}/auth`,
      data: {
        email: values.email,
        password: values.password,
        confirm_success_url: 'https://artdiver.org/login'
      }
    }).catch(errors => {
      errors =errors.response
       console.log(errors)
       
      })
  }


  useEffect(()=> {
    if (Object.keys(errors).length === 0 && 
    isSubmitting){
      callback();
    }
  })


  return { handleChange, handleSubmit, values, errors }

}

export default useForm