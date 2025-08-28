import { Container, Row, Col, Nav } from 'react-bootstrap';
import '../CSS/Footer.css'

const Footer = () =>{
    return(
        <>
            <footer className="py-4 mt-auto"> {/* bg-light for background, py-4 for padding, mt-auto for sticky footer behavior */}
                <Container>
                <Row>
                    <Col md={4}>
                        <h5>Company Name</h5>
                        <p>XYZ Exports<br/>
                        108, PQRST ABC,<br/>
                        Kochi,<br/>
                        Kerala - 682001. <br/>
                        <span class="link">www.store.com </span><br/>
                        <span class="link">support@store.com </span></p>
                    </Col>
                    <Col md={4}>
                        <h5>Quick Links</h5>
                        <Nav className="flex-column">
                            <p>Privacy Policy</p>
                            <p>About Us</p>
                            <p>Track Order</p>
                        </Nav>
                    </Col>
                    <Col md={4}>
                        <h5>Connect with Us</h5>
                        <div className="social">
                            <img src="https://alanbiju-mwttech.github.io/Html-CSS/assets/Images/instagram%20(1).png" alt="" />
                            <img src="https://alanbiju-mwttech.github.io/Html-CSS/assets/Images/facebook%20(1).png" alt="" />
                            <img src="https://alanbiju-mwttech.github.io/Html-CSS/assets/Images/twitter%20(1).png" alt="" />
                        </div>
                    </Col>
                </Row>
                <hr />
                <p className="text-center mb-0">&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
                </Container>
            </footer>
        </>
    );
}

export default Footer;