import React, { useState, useEffect } from "react";
import "./Testimonial.css";

const testimonials = [
  {
    text: `Choosing this solar company was one of the best decisions we made. The team explained everything clearly and delivered a smooth installation. Our electricity bills have reduced significantly.`,
    name: "Saroj Kumar Mallik",
    role: "Home Owner",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY-m3dMUc5Qx8MSBWXDNvvcsCblFf_08GKJQ&s",
    rating: 5,
  },
  {
    text: `Professional service and excellent support from start to finish. The solar system is performing beyond expectations, and we are happy to contribute to a greener future.`,
    name: "Sandeep Swain",
    role: "Business Owner",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY-m3dMUc5Qx8MSBWXDNvvcsCblFf_08GKJQ&s",
    rating: 5,
  },
  {
    text: `The installation was quick and hassle-free. The team was knowledgeable and guided us properly. We are already seeing great savings on our monthly energy bills.`,
    name: "Maheswar Biswal",
    role: "Engineer",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY-m3dMUc5Qx8MSBWXDNvvcsCblFf_08GKJQ&s",
    rating: 4,
  },
  {
    text: `Highly satisfied with the quality and performance of the solar panels. The company provided excellent service and after-installation support.`,
    name: "Somerash Parida",
    role: "Entrepreneur",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY-m3dMUc5Qx8MSBWXDNvvcsCblFf_08GKJQ&s",
    rating: 5,
  },
];
const Testimonial = () => {
  const [active, setActive] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigate = (direction) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    if (direction === 'next') {
      setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    } else {
      setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    }
    
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === active) return;
    setIsTransitioning(true);
    setActive(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Auto rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        navigate('next');
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [active, isTransitioning]);

  return (
    <section className="testimonial">
      {/* Background decorative elements */}
      <div className="testimonial_background">
        <div className="bg_glow_1"></div>
        <div className="bg_glow_2"></div>
        <div className="bg_grid"></div>
      </div>

      <div className="testimonial_container">
        {/* Header Section */}
        <div className="testimonial_header">
          <div className="header_top">
            <span className="header_label">TESTIMONIALS</span>
            <div className="header_line"></div>
          </div>
          <h2 className="testimonial_title">What Our Customers Say</h2>
          <p className="testimonial_subtitle">
            Real experiences from homeowners who made the switch to solar energy
          </p>
        </div>

        {/* Main Carousel */}
        <div className="testimonial_carousel">
          {/* Navigation Arrows */}
          <button 
            className="carousel_arrow left" 
            onClick={() => navigate('prev')}
            aria-label="Previous testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Testimonial Card */}
          <div className={`testimonial_card ${isTransitioning ? 'transitioning' : ''}`}>
            <div className="card_content">
              <div className="quote_mark">"</div>
              
              <div className="rating_display">
                {[...Array(5)].map((_, i) => (
                  <span 
                    key={i} 
                    className={`star ${i < testimonials[active].rating ? 'filled' : ''}`}
                  >
                    ★
                  </span>
                ))}
                <span className="rating_text">Excellent</span>
              </div>

              <p className="testimonial_text">{testimonials[active].text}</p>

              <div className="user_info">
                <div className="user_avatar">
                  <img src={testimonials[active].avatar} alt={testimonials[active].name} />
                  <div className="avatar_ring"></div>
                </div>
                <div className="user_details">
                  <h4 className="user_name">{testimonials[active].name}</h4>
                  <span className="user_role">{testimonials[active].role}</span>
                  
                </div>
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="carousel_indicators">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === active ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  <div className="indicator_progress"></div>
                </button>
              ))}
            </div>

            {/* Slide Counter */}
            {/* <div className="slide_counter">
              <span className="current_number">{String(active + 1).padStart(2, '0')}</span>
              <span className="counter_divider">/</span>
              <span className="total_number">{String(testimonials.length).padStart(2, '0')}</span>
            </div> */}
          </div>

          {/* Navigation Arrows */}
          <button 
            className="carousel_arrow right" 
            onClick={() => navigate('next')}
            aria-label="Next testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        
      </div>
    </section>
  );
};

export default Testimonial;