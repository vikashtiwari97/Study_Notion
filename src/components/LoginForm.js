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
        <form onSubmit={submitHandler}>
            <label>
                <p>Email Address<sup>*</sup></p>
                <input
                    required
                    type="email"
                    placeholder='Enter Email Id'
                    value={formData.email}
                    onChange={changeHandler}
                    name='email'
                />
            </label>
            <label>
                <p>Password<sup>*</sup></p>
                <input
                    required
                    type={showPassword ? "text" : "password"}
                    placeholder='Enter Password'
                    value={formData.password}
                    onChange={changeHandler}
                    name='password'
                />
                <span onClick={() => setShowPassword(prev => !prev)}>
                    {
                        showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)
                    }
                </span>
                <Link to="#">
                    <p>Forgot Password</p>
                </Link>
            </label>
            <button>Sign In</button>
        </form>
    );
}

export default LoginForm;
