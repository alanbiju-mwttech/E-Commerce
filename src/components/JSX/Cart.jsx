import '../CSS/Cart.css'
import Navbarmain from './Navbarmain.jsx';

const Cart = (products) =>{
    return(
        <>
        <Navbarmain />
            <div className="cart-page">
                <div className="products">
                    <h3>My Cart</h3>
                    <hr></hr>
                    <div className="product-list mt-2">
                        {products.products.map(product => (
                            <div className="each-products mb-3" key={product.id}>
                                <img src={product.image} alt={product.name} />
                                <div className="product-details">
                                    <p className='fw-bolder m-0 name'>{product.name}</p>
                                    <p className='m-0 fw-bold text-danger price'>Price : ₹{product.price}</p>
                                    <div className="color-select">
                                        <p className="fs-5">Color:</p>
                                        <div className="color"></div>
                                        <div className="color bg-danger"></div>
                                    </div>
                                    <div className="pt-1">
                                    <label className="fs-5">Select Size: </label>
                                    <select className="fs-5 ms-3 border border-2 rounded"
                                        name="size" id="size">
                                        <option className="fs-5" value="S">S
                                        </option>
                                        <option className="fs-5" value="M">M
                                        </option>
                                        <option className="fs-5" value="L">L
                                        </option>
                                        <option className="fs-5" value="XL">XL
                                        </option>
                                    </select>
                                    <div className="incrementor pt-2">
                                        <button type="button" className="less qntity">-</button>
                                        <div className="number">0</div>
                                        <button type="button" className="more qntity">+</button>
                                        <button className="ms-3 fs-5 remove">Remove</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="price-section mb-3">
                    <h3>Price Details</h3>
                    <hr></hr>
                    <div className="price-details">
                        <div className="price-row">
                            <span className="label">Total Price</span>
                            <span className="amount">₹3,197.00</span>
                        </div>
                        <div className="price-row">
                            <span className="label">Total Discount</span>
                            <span className="amount">₹1,000.00</span>
                        </div>
                        <div className="price-row">
                            <span className="label">Delivery Fee</span>
                            <span className="amount text-success">FREE</span>
                        </div>
                        <div className="price-row total">
                            <span className="label">Total Amount</span>
                            <span className="amount">₹2,197.00</span>
                        </div>
                    </div>
                </div> 
            </div>
        </>
    )
};

export default Cart;