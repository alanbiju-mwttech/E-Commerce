import { useContext, useState } from 'react';
import '../CSS/Login.css'
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserProvider.jsx';

const Login = () => {

    const [formData, setFormData] = useState({name: '', ph_number: '', username: '', password: '' });
    const {isLoggedin, setLoggedin} = useContext(UserContext)
    const [SignUp, setSignUp] = useState(false)
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const showLogin = () => {
        setSignUp(prev => !prev)
        console.log(SignUp)
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = (data) =>{
        let newErrors = {};
        if (SignUp){
            if(!data.name) newErrors.name = 'Name is required';
            if(!data.username) newErrors.username = 'UserName is required';
            if(!data.ph_number || data.ph_number.length !== 10) newErrors.ph_number = 'Phone Number must contain 10 digits';
            if(!data.password || data.password.length < 8) newErrors.password = 'Password must contain atleast 8 characters';

            return newErrors;
        }

        else{
            if(!data.username) newErrors.username = 'UserName is required';
            if(!data.password || data.password.length < 8) newErrors.password = 'Password must contain atleast 8 characters';

            return newErrors;
        }
    }

    const Login = () =>{
        const validationErrors = validate(formData);
        setErrors(validationErrors);
        console.log(isLoggedin)
        if (Object.keys(validationErrors).length === 0) {
            setLoggedin(prev => !prev)
            navigate('/')
        }
    }

    return (
        <>
            <div className="login-page">
                {!SignUp ? (
                    <div className="login">
                        <h2 className='mt-4'>Login</h2>
                        <div className="form">
                            <div className="form-row">
                                <label htmlFor="">Enter Username</label>
                                <input type="text" name="username" id="username" placeholder='Enter your username' onChange={handleChange} />
                                <div className="message" >{errors.username}</div>
                            </div>
                            <div className="form-row">
                                <label htmlFor="">Enter Password</label>
                                <input type="text" name="password" id="password" placeholder='Enter your password' onChange={handleChange} />
                                <div className="message" >{errors.password}</div>
                                <a href='#'>Forget Password</a>
                            </div>
                            <div className="form-row">
                                <button onClick={Login}>Login</button>
                                <p>Don't have an account? <a href="" onClick={(e) =>{e.preventDefault(); showLogin();}}>Sign Up</a></p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="login">
                        <h2 className='mt-4'>SignUp</h2>
                        <div className="form">
                            <div className="form-row">
                                <label htmlFor="">Enter Your Name</label>
                                <input type="text" name="name" id="name" onChange={handleChange} placeholder='Enter your Name' />
                                <div className="message">{errors.name} </div>
                            </div>
                            <div className="form-row">
                                <label htmlFor="">Enter Your Username</label>
                                <input type="text" name="username" id="username" onChange={handleChange} placeholder='Enter Your Username' />
                                <div className="message" >{errors.username} </div>
                            </div>
                            <div className="form-row">
                                <label htmlFor="">Enter Your Phone Number</label>
                                <input type="text" name="ph_number" id="ph-number" onChange={handleChange} placeholder='Enter your password' />
                                <div className="message" >{errors.ph_number} </div>
                            </div>
                            <div className="form-row">
                                <label htmlFor="">Enter Password</label>
                                <input type="text" name="password" id="password" onChange={handleChange} placeholder='Enter your password' />
                                <div className="message" >{errors.password} </div>
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
                )}
            </div>
        </>
    );
}

export default Login