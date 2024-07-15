import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
const SignupForm = () => {
  const [signupFormData, setSignupFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    createPassword: "",
    confirmPassword: ""
  })

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setSignupFormData((data) => {
      return {
        ...data,
        [event.target.name]: event.target.value
      }
    })
  }
  return (
    <div>
      <div>
        <button>
          Student
        </button>
        <button>
          Instructor
        </button>
      </div>

      <form>
        <div>
          <label>
            <p>First Name<sup>*</sup></p>
            <input type="text"
              name="firstName"
              placeholder="Enter First Name"
              required
              onChange={changeHandler}
              value={signupFormData.firstName} />
          </label>
          <label>
            <p>Last Name<sup>*</sup></p>
            <input type="text"
              name="lastName"
              placeholder="Enter Last Name"
              required
              onChange={changeHandler}
              value={signupFormData.lastName} />
          </label>
        </div>
        <label>
          <p>Email Address<sup>*</sup></p>
          <input type="email"
            name="email"
            placeholder="Enter Email Address"
            required
            onChange={changeHandler}
            value={signupFormData.email} />
        </label>
        <div>
          <label>
              <p>Create Password<sup>*</sup></p>
              <input type={showPassword ? ("text") : ("password")}
              name="createPassword"
              placeholder="Create Password"
              required
              onChange={changeHandler}
              value={signupFormData.createPassword} />
              <span onClick={() => {
              setShowPassword((prev) => { !prev })
              }}>
              {
                showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)
              }
            </span>
          </label>
          <label>
              <p>Confirm Password<sup>*</sup></p>
              <input type={showPassword ? ("text") : ("password")}
              name="confirmPassword"
              placeholder="Confirm Password"
              required
              onChange={changeHandler}
              value={signupFormData.confirmPassword} />
              <span onClick={() => {
              setShowPassword((prev) => { !prev })
              }}>
              {
                showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)
              }
            </span>
          </label>

        </div>
        <button>
          Create Account
        </button>

      </form>


    </div>
  )
}

export default SignupForm
