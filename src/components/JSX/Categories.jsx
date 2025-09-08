import '../CSS/Categories.css'
import Footer from './Footer';
import Navbarmain from './Navbarmain.jsx';

const Categories = (products) => {

    return(
        <>
        <Navbarmain />
            <div className="products-list">
                { products.products.length > 0 ?(
                    products.products.map(product => (
                        <div className="products-card" key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <p className='fw-bolder m-0'>{product.name}</p>
                            <p className='m-0 fw-bold text-danger'>₹{product.price}</p>
                        </div>
                    ))
                ) : (
                    <p>Loading</p>
                )}
            </div>
            <Footer />
        </>
    );
}

export default Categories;