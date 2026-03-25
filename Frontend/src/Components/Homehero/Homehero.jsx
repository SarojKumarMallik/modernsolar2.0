// Homehero.jsx
import React, { useEffect, useRef, useState } from "react";
import "./Homehero.css";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=2070&q=80",
    title: "Leading Solar Company in Odisha",
    desc: "BSP Project Solutions provides professional rooftop solar installation, on-grid solar systems, and commercial solar solutions across Odisha. Reduce electricity bills with government subsidy support.",
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2072&q=80",
    title: "On-Grid, Off-Grid & Hybrid Solar Systems",
    desc: "Expert installation of grid-connected, off-grid, and hybrid solar power systems for homes, businesses, and industries. Reliable solar energy solutions designed for long-term savings.",
  },
  {
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2070&q=80",
    title: "Save More with Smart Solar Energy",
    desc: "High-efficiency solar panels, advanced inverters, battery backup systems, and complete maintenance services to power your home or commercial property sustainably.",
  },
];
const Homehero = () => {
  const [current, setCurrent] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);
  const intervalRef = useRef(null);

  // AUTO SLIDE EVERY 3 SECONDS
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (current === slides.length) {
      const timeout = setTimeout(() => {
        setEnableTransition(false);
        setCurrent(0);
      }, 1200);

      return () => clearTimeout(timeout);
    }

    if (!enableTransition) {
      requestAnimationFrame(() => {
        setEnableTransition(true);
      });
    }
  }, [current, enableTransition]);

  return (
    <section className="hero">
      {/* Slides Track */}
      <div
        className="hero-track"
        style={{
          transform: `translateX(-${current * 100}%)`,
          transition: enableTransition
            ? "transform 1.2s cubic-bezier(0.77, 0, 0.175, 1)"
            : "none",
        }}
      >
        {slides.map((slide, index) => (
          <div
            className="hero-slide"
            key={index}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <h1>
                {slide.title.split("\n").map((line, i) => (
                  <span key={i}>{line}</span>
                ))}
              </h1>
              <p>{slide.desc}</p>
            </div>
          </div>
        ))}

        {/* CLONE SLIDE */}
        <div
          className="hero-slide"
          style={{ backgroundImage: `url(${slides[0].image})` }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1>
              {slides[0].title.split("\n").map((line, i) => (
                <span key={i}>{line}</span>
              ))}
            </h1>
            <p>{slides[0].desc}</p>
            
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Homehero;
