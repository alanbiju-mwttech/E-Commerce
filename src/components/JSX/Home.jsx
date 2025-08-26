import '../CSS/Home.css'
import Carousel from 'react-bootstrap/Carousel';

const Home = () =>{
    return(
        <>
        <div className="carousel">
            <Carousel>
                <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src="https://alanbiju-mwttech.github.io/Html-CSS/assets/Images/carousel/image2.png" alt="" />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src="https://alanbiju-mwttech.github.io/Html-CSS/assets/Images/carousel/image1.png" alt="" />
                </Carousel.Item>
            </Carousel>
        </div>
        </>
    )
}

export default Home