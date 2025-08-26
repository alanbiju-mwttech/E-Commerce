import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { BsBagFill, BsPersonCircle } from "react-icons/bs";
import '../CSS/Navbarmain.css'


const Navbarmain = () => {
    
    const extend = () => {
        document.getElementById('toggle').classList.toggle("change")
        document.getElementById('half-width').classList.toggle("active")
    }   

    return(
        <>
            <div style={{ background: "rgb(247, 244, 241)" }} className="">
                <Navbar style={{ background: "rgb(18, 29, 46)", height:'65px'}}>
                    <Container>
                        <Navbar.Brand className="m-0">
                            <h2 className="m-0 text-light">LOGO</h2>
                        </Navbar.Brand>
                        <Nav className="ps-5 full-width">
                            <Nav.Link className="text-light fw-semibold ps-4" >Home</Nav.Link>
                            <Nav.Link className="text-light fw-semibold ps-4" >Men</Nav.Link>
                            <Nav.Link className="text-light fw-semibold ps-4" >Women</Nav.Link>
                            <Nav.Link className="text-light fw-semibold ps-4" >Children</Nav.Link>
                            <Nav.Link className="text-light fw-semibold ps-4 pb-2 " >
                                <BsBagFill className="me-2 text-light" style={{ fontSize: '1.5rem'}}/>
                            </Nav.Link>
                            <Button className="ms-2" style={{height: '30px', margin: 'auto', background: 'white', border: 'none', color: 'rgb(18, 29, 46)', paddingTop: '3px', fontWeight: '900', borderRadius: '10px'}}>Login</Button>
                            <Nav.Link className="text-light fw-semibold ps-4 pb-2 " >
                                <BsPersonCircle className="me-2 text-light" style={{ fontSize: '1.5rem'}}/>
                            </Nav.Link>
                        </Nav>
                        <div className="toggle" id="toggle">
                            <div className="container"
                                onClick={extend}>
                                <div className="bar1"></div>
                                <div className="bar2"></div>
                                <div className="bar3"></div>
                            </div>
                        </div>
                        <Nav className="half-width" id="half-width">
                            <Nav.Link className="text-light fw-semibold" >Home</Nav.Link>
                            <Nav.Link className="text-light fw-semibold" >Men</Nav.Link>
                            <Nav.Link className="text-light fw-semibold" >Women</Nav.Link>
                            <Nav.Link className="text-light fw-semibold" >Children</Nav.Link>
                            <Nav.Link className="text-light fw-semibold" >
                                <BsBagFill className="text-light" style={{ fontSize: '1.5rem'}}/>
                            </Nav.Link>
                            <Button>Login</Button>
                            <Nav.Link className="text-light fw-semibold">
                                <BsPersonCircle className="text-light" style={{ fontSize: '2.5rem'}}/>
                            </Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>

            </div>
        </>
    );
}

export default Navbarmain;