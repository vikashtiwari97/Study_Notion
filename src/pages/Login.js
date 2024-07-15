import React from 'react'
import Template from '../components/Template'
import loginImage from '../../src/assets/login.png'
const Login = ({setIsLoggedIn}) => {
  return (
    <div>
      <Template
      title="Welcome back"
      des1="Build skills for today, tomorrow, and beyond."
      des2="Eduction to future-proof year career."
      image={loginImage}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  )
}

export default Login
