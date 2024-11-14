import React from 'react'
import './App.css'
import Header from './Components/Header/Header'

import Product from './Pages/Products/Product'
import TestimonialParagraphs from './Pages/Testimonial/Testimonial'
import Footer from './Pages/Footer/Footer'
import { Slider } from './Pages/image-sliders/Slider'


const App = () => {
  return (
    <div>
      <Header/>
      <Slider/>
      <Product/>
     <TestimonialParagraphs/>
     <Footer/>
    </div>
  )
}

export default App