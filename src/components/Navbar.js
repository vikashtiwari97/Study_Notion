import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../src/assets/Logo.svg'
import toast from 'react-hot-toast';
const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
        <Link to ="/">
            <img src={logo} alt="logo" width={160} height={32} loading='lazy'/>
        </Link>
        <div className='flex gap-x-6 text-white'>
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Contact</Link>
        </div>
        <div className='flex items-center ml-3 gap-x-4'>
            { !isLoggedIn && 
                <Link to="/login">
                    <button className='bg-[#282525] text-white py-[8px] px-[12px] rounded-[8px] border border-[#040404e0]'>
                        Log in
                    </button>
                </Link>
            } 
            { !isLoggedIn &&
                <Link to="/signup">
                    <button className='bg-[#282525] text-white py-[8px] px-[12px] rounded-[8px] border border-[#040404e0]'>
                        Sign up
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/">
                    <button className='bg-[#282525] text-white py-[8px] px-[12px] rounded-[8px] border border-[#040404e0]' onClick={()=>{
                        setIsLoggedIn(false);
                        toast.success("LogOut");
                    }}>
                        Logout
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/dashboard">
                    <button className='bg-[#282525] text-white py-[8px] px-[12px] rounded-[8px] border border-[#040404e0]'>
                        Dashboard
                    </button>
                </Link>
            }
        </div>
    </div>
  )
}

export default Navbar
