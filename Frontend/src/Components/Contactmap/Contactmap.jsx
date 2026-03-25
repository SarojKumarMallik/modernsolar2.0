import React from "react";
import "./Contactmap.css";

const Contactmap = () => {
  return (
    <section className="contactmap-section">
      <div className="contactmap-container">

        <div className="contactmap-header">
          <span className="contactmap-subtitle">OUR LOCATION</span>
          <h2 className="contactmap-title">
            Visit BSP Project Solutions
          </h2>
          <p className="contactmap-description">
            We are located in Kendrapara, Odisha. Feel free to visit our office
            or reach out to us for solar and industrial solutions.
          </p>
        </div>

        <div className="contactmap-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2725.863946211819!2d86.4133171469589!3d20.499959544080593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1bdbd8af4f0e67%3A0x5d90eb33c36fbf0c!2sBSP%20PROJECT%20SOLUTIONS%20PVT.LTD!5e1!3m2!1sen!2sin!4v1770983208841!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="BSP Project Solutions Location"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default Contactmap;
