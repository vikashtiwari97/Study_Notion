import React from 'react'
import frameImage from '../../src/assets/frame.png'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'

const Template = ({title, des1, des2, image,formtype, setIsLoggedIn }) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>
          <span>{des1}</span>
          <span>{des2}</span>
        </p>
            {
              formtype === 'signup' ? (<SignupForm setIsLoggedIn={setIsLoggedIn}/>) : (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
            }

            <div>
              <div></div>
              <p>OR</p>
              <div></div>
            </div>

            <button>
                <p>Sign in with Google</p>
            </button>

            <div>
              <img src={frameImage} alt="pattern" width={558} height={584} loading='lazy' />
              <img src={image} alt="pattern" width={558} height={584} loading='lazy' />
            </div>
      </div>
    </div>
  )
}

export default Template
