import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
const SignupForm = ({setIsLoggedIn}) => {
  const [signupFormData, setSignupFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    createPassword: "",
    confirmPassword: ""
  })

  const redirect = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);
  const [accountType, setAccountType] = useState("student");

  function changeHandler(event) {
    setSignupFormData((data) => {
      return {
        ...data,
        [event.target.name]: event.target.value
      }
    })
  }

  function submitHandler(event){
    event.preventDefault();
    if(signupFormData.createPassword !== signupFormData.confirmPassword){
      toast.error("Password does not match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account created");
    const accountData = {
      ...signupFormData
    }
    const finalData = {
      ...accountData,
      accountType
    }
    console.log(finalData);
    redirect("/dashboard");
  }
  return (
    <div>
      <div className='flex bg-[#282525] p-1 gap-x-1 my-6 rounded-full max-w-max'>
        <button className={`${accountType === "student" ? "bg-[#040404] text-white" : "bg-transparent text-[#040404]"} py-2 px-5 rounded-full transition-all duration-200`}
         onClick={()=>{
          setAccountType("student");
        }}>
          Student
        </button>
        <button className={`${accountType === "instructor" ? "bg-[#040404] text-white" : "bg-transparent text-[#040404]"} py-2 px-5 rounded-full transition-all duration-200`} 
        onClick={()=>{
          setAccountType("instructor");
        }}
        >
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>
        <div className='flex gap-x-4 mt-[20px]'>
          <label className='w-full'>
            <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>First Name<sup className='text-pink-200'>*</sup></p>
            <input type="text"
              name="firstName"
              placeholder="Enter First Name"
              required
              onChange={changeHandler}
              value={signupFormData.firstName}
              className='bg-[#282525] rounded-[0.5rem] text-white w-full p-[12px]'
              />
          </label>
          <label className='w-full'>
            <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Last Name<sup className='text-pink-200'>*</sup></p>
            <input type="text"
              name="lastName"
              placeholder="Enter Last Name"
              required
              onChange={changeHandler}
              value={signupFormData.lastName} 
              className='bg-[#282525] rounded-[0.5rem] text-white w-full p-[12px]'
              />
          </label>
        </div>
        <div className='mt-[20px]'> 
        <label className='w-full'>
          <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-200'>*</sup></p>
          <input type="email"
            name="email"
            placeholder="Enter Email Address"
            required
            onChange={changeHandler}
            value={signupFormData.email}
            className='bg-[#282525] rounded-[0.5rem] text-white w-full p-[12px]'
            />
        </label>
        </div>
        <div className='flex gap-x-4 mt-[20px]'>
          <label className='w-full relative'>
              <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Create Password<sup className='text-pink-200'>*</sup></p>
              <input type={showPassword ? ("text") : ("password")}
              name="createPassword"
              placeholder="Create Password"
              required
              onChange={changeHandler}
              value={signupFormData.createPassword} 
              className='bg-[#282525] rounded-[0.5rem] text-white w-full p-[12px]'
              />
              <span className='absolute right-3 top-[38px] cursor-pointer' 
               onClick={() => {
              setShowPassword(prev => !prev )
              }}>
              {
                showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)
              }
            </span>
          </label>
          <label className='w-full relative'>
              <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-pink-200'>*</sup></p>
              <input type={showConfirmPassword ? ("text") : ("password")}
              name="confirmPassword"
              placeholder="Confirm Password"
              required
              onChange={changeHandler}
              value={signupFormData.confirmPassword} 
              className='bg-[#282525] rounded-[0.5rem] text-white w-full p-[12px]'
              />
              <span className='absolute right-3 top-[38px] cursor-pointer' 
              onClick={() => {
                setConfirmShowPassword(prev =>  !prev )
              }}>
              {
                showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)
              }
            </span>
          </label>

        </div>
        <button className='w-full bg-yellow-300  rounded-[8px] font-medium text-[#282525] px-[12px] py-[8px] mt-6'>
          Create Account
        </button>

      </form>


    </div>
  )
}

export default SignupForm
