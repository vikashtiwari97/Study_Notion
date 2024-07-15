import React from 'react'
import Template from '../components/Template'
import SignupImage from '../../src/assets/signup.png'
const Signup = ({setIsLoggedIn}) => {
  return (
    <div>
      <Template
      title="Join the millions learning to code with StudyNotion for free"
      des1="Build skills for today, tomorrow, and beyond."
      des2="Eduction to future-proof year career."
       image={SignupImage}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  )
}

export default Signup
