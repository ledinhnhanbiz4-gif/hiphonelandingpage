import React, { useState, useEffect } from 'react';

function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section id="home" className={`hero ${visible ? 'visible' : ''}`}>
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <i className="fas fa-mobile-alt"></i>
            <span>Điện Thoại Chính Hãng</span>
          </div>
          
          <h1 className="hero-title">
            Chào Mừng Đến <br />
            <span className="gradient-text">HiPhone Store</span>
          </h1>
          
          <p className="hero-subtitle">
            Điện thoại xịn – Giá cực mịn
          </p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <i className="fas fa-shield-alt"></i>
              <div>
                <h3>100%</h3>
                <p>Chính Hãng</p>
              </div>
            </div>
            <div className="stat-item">
              <i className="fas fa-truck"></i>
              <div>
                <h3>Free</h3>
                <p>Ship</p>
              </div>
            </div>
            <div className="stat-item">
              <i className="fas fa-headset"></i>
              <div>
                <h3>24/7</h3>
                <p>Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default Hero;
