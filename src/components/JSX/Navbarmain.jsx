import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { BsBagFill, BsPersonCircle } from "react-icons/bs";
import '../CSS/Navbarmain.css'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


const Navbarmain = () => {
    
    const [extend, setExtended] = useState(false)
    const [isLoggedIn, setisLoggedIn] = useState(false)

    const navigate = useNavigate();

    return(
        <>
            <div style={{ background: "rgb(247, 244, 241)" }} className="fixed-top">
                <Navbar style={{ background: "rgb(18, 29, 46)", height:'70px'}}>
                    <Container>
                        <Navbar.Brand className="m-0">
                            <h4 className="m-0 text-light fw-bolder">LOGO</h4>
                        </Navbar.Brand>
                        <Nav className="ps-5 full-width">
                            <Nav.Link className="text-light fw-semibold ps-4" onClick={() => navigate('/')}>Home</Nav.Link>
                            <Nav.Link className="text-light fw-semibold ps-4" onClick={() => navigate('/men')}>Men</Nav.Link>
                            <Nav.Link className="text-light fw-semibold ps-4" onClick={() => navigate('/women')}>Women</Nav.Link>
                            <Nav.Link className="text-light fw-semibold ps-4" onClick={() => navigate('/children')}>Children</Nav.Link>
                            <Nav.Link className="text-light fw-semibold ps-4 pb-2 " >
                                <BsBagFill className="me-2 text-light" style={{ fontSize: '1.5rem'}} onClick={() => navigate('/cart')}/>
                            </Nav.Link>
                            <Button className="ms-2" onClick={() => navigate('/login')}>{isLoggedIn? 'Logout':'Login'}</Button>
                            <Nav.Link className="text-light fw-semibold ps-4 pb-2 " >
                                <BsPersonCircle className="me-2 text-light" style={{ fontSize: '1.5rem'}} onClick={() => navigate('/profile')}/>
                            </Nav.Link>
                        </Nav>
                        <div className="toggle">
                            <div className={`container ${extend ? "change": ""}`}
                                onClick={()=>setExtended(prev=>!prev)}>
                                <div className="bar1"></div>
                                <div className="bar2"></div>
                                <div className="bar3"></div>
                            </div>
                        </div>
                        <Nav className={`half-width ${extend ? "active": ""}`}>
                            <Nav.Link className="text-light fw-semibold" onClick={() => navigate('/')}>Home</Nav.Link>
                            <Nav.Link className="text-light fw-semibold" onClick={() => navigate('/men')}>Men</Nav.Link>
                            <Nav.Link className="text-light fw-semibold" onClick={() => navigate('/women')}>Women</Nav.Link>
                            <Nav.Link className="text-light fw-semibold" onClick={() => navigate('/children')}>Children</Nav.Link>
                            <Nav.Link className="text-light fw-semibold" >
                                <BsBagFill className="text-light" style={{ fontSize: '1.5rem'}} onClick={() => navigate('/cart')}/>
                            </Nav.Link>
                            <Button onClick={() => navigate('/login')}>{isLoggedIn? 'Logout':'Login' }</Button>
                            <Nav.Link className="text-light fw-semibold">
                                <BsPersonCircle className="text-light" style={{ fontSize: '2.5rem'}} onClick={() => navigate('/profile')}/>
                            </Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </>
    );
}

export default Navbarmain;