import { useState } from 'react';
import '../CSS/Login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const[isLoggedin, setLoggedin] = useState(false)
    const [SignUp, setSignUp] = useState(false)
    const navigate = useNavigate();

    const showLogin = () => {
        setSignUp(prev => !prev)
        console.log(SignUp)
    }

    const Login = () =>{
        setLoggedin(prev => !prev)
        navigate('/')
    }

    return (
        <>
            <div className="login-page">
                {SignUp ? (
                    <div className="login">
                        <h2 className='mt-4'>Login</h2>
                        <div className="form">
                            <div className="form-row">
                                <label htmlFor="">Enter Username</label>
                                <input type="text" name="username" id="username" placeholder='Enter your username' />
                            </div>
                            <div className="form-row">
                                <label htmlFor="">Enter Password</label>
                                <input type="text" name="password" id="password" placeholder='Enter your password' />
                                <a href='#'>Forget Password</a>
                            </div>
                            <div className="form-row">
                                <button onClick={Login}>Login</button>
                                <p>Don't have an account? <a href="" onClick={showLogin}>Sign Up</a></p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="login">
                        <h2 className='mt-4'>SignUp</h2>
                        <div className="form">
                            <div className="form-row">
                                <label htmlFor="">Enter Your Name</label>
                                <input type="text" name="name" id="name" placeholder='Enter your Name' />
                            </div>
                            <div className="form-row">
                                <label htmlFor="">Enter Your Username</label>
                                <input type="text" name="username" id="username" placeholder='Enter Your Username' />
                            </div>
                            <div className="form-row">
                                <label htmlFor="">Enter Your Phone Number</label>
                                <input type="text" name="ph-number" id="ph-number" placeholder='Enter your password' />
                            </div>
                            <div className="form-row">
                                <label htmlFor="">Enter Password</label>
                                <input type="text" name="password" id="password" placeholder='Enter your password' />
                            </div>
                            <div className="form-row">
                                <button onClick={Login}>Login</button>
                                <p>
                                    Already have an account?{" "}
                                    <a href="#" onClick={(e) => { e.preventDefault(); showLogin(); }}>
                                        Login
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                )
                }
            </div>
        </>
    );
}

export default Login