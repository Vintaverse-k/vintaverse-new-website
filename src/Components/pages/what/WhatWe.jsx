import React from 'react';
import '../../styles/what/what.css';

const WhatWe = () => {
  return (
    <div className="whatwe-container">
      <div className="whatwe-left">
        <img src="/assets/iphone2.png" alt="iPhone" className="iphone-image" />
      </div>

      <div className="whatwe-right">
        {/* Wrap the image and text together */}
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
