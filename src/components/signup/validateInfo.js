export default function validateInfo(values) {
  let errors = {}

  if (!values.email) {
    errors.email = 'メールアドレスが入力されていません'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'メールアドレスが無効です'
  }
  if(!values.password) {
    errors.password = 'パスワードが入力されていません'
  } else if (values.password.length < 6)  {
    errors.password = 'パスワードは6文字以上入力して下さい'
  }
  return errors
}
