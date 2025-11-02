import React, { useState } from 'react';

function Contact() {
  const [showQR, setShowQR] = useState(false);

  const socialLinks = [
    {
      name: 'Facebook',
      description: 'Cập nhật tin tức mới nhất',
      icon: 'fa-facebook-f',
      url: 'https://www.facebook.com/share/1BVBB9pjQt/?mibextid=wwXIfr',
      className: 'facebook'
    },
    {
      name: 'TikTok',
      description: 'Xem review & mẹo hay',
      icon: 'fa-tiktok',
      url: 'https://www.tiktok.com/@huyle9979?_r=1&_t=ZS-913ZGHh1Kqb',
      className: 'tiktok'
    },
    {
      name: 'Zalo',
      description: 'Chat ngay qua Zalo',
      icon: 'fa-comment-dots',
      url: '#',
      className: 'zalo',
      isZalo: true
    },
    {
      name: 'Hotline',
      description: '0396678112',
      icon: 'fa-phone-alt',
      url: 'tel:0396678112',
      className: 'phone'
    }
  ];

  const handleZaloClick = (e) => {
    e.preventDefault();
    setShowQR(true);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Liên Hệ</span>
          <h2 className="section-title">
            Kết Nối Với <span className="gradient-text">Chúng Tôi</span>
          </h2>
          <p className="section-subtitle">
            Hãy liên hệ ngay để được tư vấn và nhận ưu đãi tốt nhất
          </p>
        </div>
        
        <div className="contact-content">
          {/* Fanpage Card */}
          <div className="contact-card fanpage-card">
            <div className="card-header">
              <i className="fab fa-facebook"></i>
              <h3>Fanpage Chính Thức</h3>
            </div>
            <div className="fanpage-container">
              <img src="/fanpage.jpg" alt="Fanpage" className="fanpage-image" />
              <p className="contact-name">HiPhone Store</p>
              <p className="contact-label">Like để nhận ưu đãi</p>
              <a 
                href="https://www.facebook.com/share/17gDtg6z1u/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="fanpage-btn"
              >
                <i className="fab fa-facebook"></i> Truy cập Fanpage
              </a>
            </div>
            <div className="card-decoration"></div>
          </div>

          {/* Social Links */}
          <div className="social-links-container">
            {socialLinks.map((link, index) => (
              link.isZalo ? (
                <button
                  key={index}
                  onClick={handleZaloClick}
                  className={`social-card ${link.className} animate-on-scroll`}
                >
                  <div className="social-icon">
                    <i className={`fas ${link.icon}`}></i>
                  </div>
                  <div className="social-info">
                    <h4>{link.name}</h4>
                    <p>{link.description}</p>
                  </div>
                  <i className="fas fa-arrow-right"></i>
                </button>
              ) : (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-card ${link.className} animate-on-scroll`}
                >
                  <div className="social-icon">
                    <i className={`fab ${link.icon}`}></i>
                  </div>
                  <div className="social-info">
                    <h4>{link.name}</h4>
                    <p>{link.description}</p>
                  </div>
                  <i className="fas fa-arrow-right"></i>
                </a>
              )
            ))}
          </div>
        </div>
      </div>

      {/* QR Modal */}
      {showQR && (
        <div className="qr-modal" onClick={() => setShowQR(false)}>
          <div className="qr-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="qr-modal-close" onClick={() => setShowQR(false)}>
              <i className="fas fa-times"></i>
            </button>
            <div className="qr-modal-header">
              <i className="fas fa-qrcode"></i>
              <h3>Quét Mã Zalo</h3>
            </div>
            <img src="/QR.jpg" alt="Zalo QR Code" className="qr-modal-image" />
            <p className="qr-modal-text">Quét mã để chat với chúng tôi qua Zalo</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;
