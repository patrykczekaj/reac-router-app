import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../styles/Header.css';
import img1 from '../images/header1.jpg';
import img2 from '../images/header2.jpg';
import img3 from '../images/header3.jpg';

const Header = () => {

    const images = [img1, img2, img3];
    const index = Math.floor(Math.random() * 3);
    const img = images[index];
    return ( 
        <>
            <Routes>
                <Route path="*" element={<img src={img1} alt="miasto"/>} />
                <Route path="/" element={<img src={img1} alt="miasto"/>} />
                <Route path="/products" element={<img src={img2} alt="miasto"/>} />
                <Route path="/contact" element={<img src={img3} alt="miasto"/>} />
                <Route path="/admin" element={<img src={img3} alt="miasto"/>} />
            </Routes>

            {/* <img src={img} alt="header" /> */}
        </>
    );
}
 
export default Header;