import React, { useEffect, useState } from 'react';
import '../../styles/what/what.css';

const WhatWe = () => {
  const iphoneImages = [
    '/assets/iphone1.png',
    '/assets/iphone2.png',
    '/assets/iPhone3.png',
    '/assets/iPhone4.png'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-change image every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === iphoneImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [iphoneImages.length]);

  return (
    <div className="whatwe-container">
      {/* LEFT SIDE — Auto changing iPhone */}
      <div className="whatwe-left">
        <img
          src={iphoneImages[currentIndex]}
          alt="iPhone"
          className="iphone-image fade-in"
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="whatwe-right">
        <div className="image-wrapper">
          <img src="/assets/rightside.png" alt="Right Side" className="rightside-image" />

          <div className="text-overlay">
            <h1>Design & Tech<br />for Tomorrow</h1>

            <div className="p-wrapper">
              <p>
                We transform brands into industry leaders through innovative design
                and cutting-edge technology solutions.
              </p>
            </div>

            <div className="stats-line">
              <div>
                <h3>10+</h3>
                <h4>Year of Exp</h4>
              </div>
              <div>
                <h3>7000+</h3>
                <h4>Project Deliver</h4>
              </div>

              <button className="book-btn">
                Book a Call
                <img src="/assets/rightarrow.svg" alt="arrow" className="btn-icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWe;
