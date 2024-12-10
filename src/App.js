import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import About from './Components/About';
import Product from './Pages/Products/Product';
import TestimonialParagraphs from './Pages/Testimonial/Testimonial';
import Footer from './Pages/Footer/Footer';
import { Slider } from './Pages/image-sliders/Slider';
import CardDetails1 from './Pages/Card_details/Card_details_1';
import CardDetails2 from './Pages/Card_details/Card_details_2';
import CardDetails3 from './Pages/Card_details/Card_details_3';
import CardDetails4 from './Pages/Card_details/Card_details_4';
import Contact from './Components/Contact/Contact';
import Popup from '././Pages/Poppup/Poppup'; // Make sure this path is correct

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const data = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    // Add more data here
  ];

  const handleSearch = (query) => {
    const results = data.filter(item => 
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <Router>
      <div>
        <Header onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<>
            <Slider />
            <Product />
            <TestimonialParagraphs />
          </>} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/card-details1" element={<CardDetails1 />} />
          <Route path="/card-details2" element={<CardDetails2 />} />
          <Route path="/card-details3" element={<CardDetails3 />} />
          <Route path="/card-details4" element={<CardDetails4 />} />
        </Routes>
        <Footer />
        <div className="search-results">
          {searchResults.map(item => (
            <div key={item.id}>{item.name}</div>
          ))}
        </div>
        <Popup /> {/* Add the Popup component here */}
      </div>
    </Router>
  );
};

export default App;
