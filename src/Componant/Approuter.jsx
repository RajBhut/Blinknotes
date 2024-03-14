import React from 'react';
import Info from './Info';
import App from '../App';
import Material from './Material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/about" element={<Info/>} />
                <Route path="/material"element={<Material/>}/>
            </Routes>
        </Router>
    );
}

export default AppRouter;
