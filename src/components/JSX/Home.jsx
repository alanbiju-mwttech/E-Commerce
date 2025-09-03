import '../CSS/Home.css'
import Carousel from 'react-bootstrap/Carousel';
import Footer from './Footer';

const Home = (products) => {

    console.log(products)

    return (
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
            <div className="products">
                <h4 className=''>Top Products</h4>
                <div className='home-product-list'>
                    {products.products.map(product => (
                        <div className="product-card" key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <p className='fw-bolder m-0'>{product.name}</p>
                            <p className='m-0 fw-bold text-danger'>₹{product.price}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home