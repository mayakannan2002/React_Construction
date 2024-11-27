import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: 'Residential Builders',
      content:
        'Residential builders focus on constructing homes, apartments, and villas. They work closely with architects and homeowners to deliver personalized living spaces that meet aesthetic and functional needs.',
    },
    {
      title: 'Commercial Builders',
      content:
        'Commercial builders specialize in office spaces, shopping malls, hotels, and other commercial properties. They handle large-scale projects with advanced structural designs and efficient project management.',
    },
    {
      title: 'Industrial Builders',
      content:
        'Industrial builders construct factories, warehouses, and facilities requiring knowledge of heavy machinery and industrial systems. Their expertise ensures safety and compliance with regulations.',
    },
    {
      title: 'Infrastructure Builders',
      content:
        'Infrastructure builders work on public projects like roads, bridges, railways, and airports. They collaborate with government bodies to create essential services for communities.',
    },
  ];

  return (
    <div className="about-container">
      <div className="heading">
        <h3 className="heading-title"><strong>About Virtue Builders</strong></h3>
      </div>
      <div className="about-content">
        <p>
          <strong>Virtue Builders</strong>, founded in <strong>2005</strong>, is a pioneer in delivering excellence, innovation, and sustainability in the construction industry. Over the years, we have grown to become a trusted name in architecture, construction, and design.
        </p>

        <div className="key-info">
          <p><strong>Founder:</strong> John Smith</p>
          <p><strong>CEO:</strong> Emily Johnson</p>
          <p><strong>Headquarters:</strong> New York City, USA</p>
        </div>

        <p>
          We specialize in various sectors, offering comprehensive solutions for residential, commercial, industrial, and infrastructure projects. Below, you’ll find more details about each type of builder:
        </p>

        <div className="accordion">
          {accordionData.map((item, index) => (
            <div key={index} className="accordion-item">
              <div
                className={`accordion-title ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleAccordion(index)}
              >
                <h4>{item.title}</h4>
                <span className="arrow">{activeIndex === index ? '▼' : '▶'}</span>
              </div>
              {activeIndex === index && (
                <div className="accordion-content">
                  <p>{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Content */}
        <div className="additional-content">
          <div className="content-left">
            <h4>Our Values</h4>
            <p>
              At Virtue Builders, we prioritize integrity, quality, and innovation in every project. Our team is dedicated to creating structures that stand the test of time and contribute positively to the community.
            </p>
          </div>
          <div className="content-right">
            <h4>Why Choose Us?</h4>
            <p>
              With years of experience, a skilled team, and cutting-edge technology, Virtue Builders ensures timely delivery, cost-efficiency, and exceptional quality in every project.
            </p>
           
          </div>
          
        </div>
        <div><p>Builders in Bangalore: A Hub of Innovation and Quality
        Bangalore, often referred to as the Silicon Valley of India, is not only a technology hub but also a booming center for the construction industry. Builders in Bangalore cater to diverse needs, from luxurious residential apartments to state-of-the-art commercial spaces. The city boasts some of the best infrastructure, with projects emphasizing modern architecture, sustainability, and timely delivery. Top builders incorporate advanced technologies and eco-friendly designs, ensuring structures align with global standards. As demand for housing and office spaces continues to grow, builders in Bangalore focus on creating smart homes, green buildings, and premium amenities, making the city a preferred destination for investors and homebuyers alike.</p></div>
      </div>
     
    </div>
  );
};

export default About;
