import React from 'react'
import "./Product.css"
import '@fortawesome/fontawesome-free/css/all.min.css';

import Nature_1 from "../../assets/image/N1.jpg"
import Nature_2 from "../../assets/image/N2.jpg"
import Nature_3 from "../../assets/image/N3.jpg"
import Nature_4 from "../../assets/image/N4.jpg"

const Product = () => {
  return (
    <div className="product-section">
      {/* Header Section */}
      <h2 className="product-title">BUILDING DETAILS</h2>
    <div className='containers'><div className="card" style={{width: '18rem'}}>
    
    <img src={Nature_1} className="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Virtue Royal City</h5>
      <p class="card-text"><i className='fas fa-location'></i> Sarjapura, Bangalore</p>
      <a href="/card-details1" class="btn btn-primary">More Details</a>
    </div>
  </div>
  <div className="card" style={{width: '18rem'}}>
    <img src={Nature_2} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Virtue Royal Nisarga</h5>
      <p class="card-text"><i className='fas fa-location'></i> Kengeri, Bangalore</p>
      <a href="/card-details2" class="btn btn-primary">More Details</a>
    </div>
  </div>
  <div className="card" style={{width: '18rem'}}>
    <img src={Nature_3} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Virtue Eshas Courtyard</h5>
      <p class="card-text"><i className='fas fa-location'></i> Sarjapura, Bangalore</p>
      <a href="/card-details3" class="btn btn-primary">More Details</a>
    </div>
  </div>
  <div className="card" style={{width: '18rem'}}>
    <img src={Nature_4} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Virtue Royal City</h5>
      <p class="card-text"><i className='fas fa-location'></i> Kengeri, Bangalore</p>
      <a href="/card-details4" class="btn btn-primary">More Details</a>
    </div>
  </div>
  </div>
  </div>
  )
}

export default Product

