import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './components/JSX/Home.jsx';
import products from './products/Home.js';
import men_products from './products/Men.js'
import women_products from './products/Women.js'
import children_products from './products/Children.js'
import Categories from './components/JSX/Categories.jsx';
import Cart from './components/JSX/Cart.jsx';
import cart_products from './products/Cart.js'
import Login from './components/JSX/Login.jsx';

function App() {
    return (
        <>
            <Router>    
                <Routes>
                    <Route path='/' element={<Home products={products} />} />
                    <Route path='/men' element={<Categories products={men_products} />} />
                    <Route path='/women' element={<Categories products={women_products} />} />
                    <Route path='/children' element={<Categories products={children_products} />} />
                    <Route path='/cart' element={<Cart products={cart_products} />} />
                    <Route path='/login' element={<Login/>} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
