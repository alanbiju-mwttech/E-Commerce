import Navbarmain from './components/JSX/Navbarmain.jsx';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './components/JSX/Home.jsx';

function App() {
    return (
        <>
        <Router>    
            <Navbarmain />
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
