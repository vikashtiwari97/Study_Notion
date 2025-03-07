import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import toast from 'react-hot-toast';

const LoginForm = ({setIsLoggedIn}) => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const redirect = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {
        setFormData((prevData) => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            };
        });
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Loged In");
        redirect("/dashboard");
    }

    return (
        <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
            <label className='w-full'>
                <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-200' >*</sup></p>
                <input
                    required
                    type="email"
                    placeholder='Enter Email Id'
                    value={formData.email}
                    onChange={changeHandler}
                    name='email'
                    className='bg-[#282525] rounded-[0.5rem] text-white w-full p-[12px]'
                />
            </label> 
            <label className='w-full relative'>
                <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Password<sup className='text-pink-200'>*</sup></p>
                <input
                    required
                    type={showPassword ? "text" : "password"}
                    placeholder='Enter Password'
                    value={formData.password}
                    onChange={changeHandler}
                    name='password'
                    className='bg-[#282525] rounded-[0.5rem] text-white w-full p-[12px]'
                />
                <span className='absolute right-3 top-[38px] cursor-pointer' 
                onClick={() => setShowPassword(prev => !prev)}>
                    {
                        showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)
                    }
                </span>
                <Link to="#">
                    <p className='text-xs mt-1 text-blue-200 max-w-max ml-auto'>Forgot Password</p>
                </Link>
            </label>
            <button className='bg-yellow-300  rounded-[8px] font-medium text-[#282525] px-[12px] py-[8px] mt-6' >Sign In</button>
        </form>
    );
}

export default LoginForm;
