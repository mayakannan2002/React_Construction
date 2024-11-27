import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import About from './Components/About';
import Product from './Pages/Products/Product';
import TestimonialParagraphs from './Pages/Testimonial/Testimonial';
import Footer from './Pages/Footer/Footer';
import { Slider } from './Pages/image-sliders/Slider';
import Card_details_1 from './Pages/Card_details/Card_details_1';
import Card_details_2 from './Pages/Card_details/Card_details_2';
import Card_details_3 from './Pages/Card_details/Card_details_3';
import Card_details_4 from './Pages/Card_details/Card_details_4';
import Contact from './Components/Contact/Contact';

const App = () => {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
    
          <Route path="/"
            element={
              <div>
                <Slider />
                <Product />
                <TestimonialParagraphs />
                <Footer />
              </div>
            }
          />
          
          {/* Define routes for card details */}
          <Route path="/About" element={<About/>} />

          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Product" element={<Product/>} />

          <Route path="/card-details1" element={<Card_details_1 />} />
          <Route path="/card-details2" element={<Card_details_2 />} />
          <Route path="/card-details3" element={<Card_details_3 />} />
          <Route path="/card-details4" element={<Card_details_4 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
