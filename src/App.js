import Navbarmain from './components/JSX/Navbarmain.jsx';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './components/JSX/Home.jsx';
import products from './products/Home.js';
import men_products from './products/Men.js'
import Categories from './components/JSX/Categories.jsx';

function App() {
    return (
        <>
            <Router>    
                <Navbarmain />
                <Routes>
                    <Route path='/' element={<Home products={products} />} />
                    <Route path='/men' element={<Categories products={men_products} />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
