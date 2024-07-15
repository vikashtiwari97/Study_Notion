import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../src/assets/Logo.svg'
import toast from 'react-hot-toast';
const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className='flex justify-evenly'>
        <Link to ="/">
            <img src={logo} alt="logo" width={160} height={32} loading='lazy'/>
        </Link>
        <div className='flex gap-3'>
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Contact</Link>
        </div>
        <div className='flex ml-3 gap-3'>
            { !isLoggedIn && 
                <Link to="/login">
                    <button>
                        Login
                    </button>
                </Link>
            } 
            { !isLoggedIn &&
                <Link to="/signup">
                    <button>
                        Signup
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/">
                    <button onClick={()=>{
                        setIsLoggedIn(false);
                        toast.success("LogOut");
                    }}>
                        Logout
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/dashboard">
                    <button>
                        Dashboard
                    </button>
                </Link>
            }
        </div>
    </div>
  )
}

export default Navbar
