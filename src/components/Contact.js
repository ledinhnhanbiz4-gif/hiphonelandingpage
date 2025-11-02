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
      icon: 'fa-phone',
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

          {/* Right Column */}
          <div className="contact-right">
            {/* Social Links */}
            <div className="social-links-container">
            {socialLinks.map((link, index) => (
              link.isZalo ? (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <a
                  key={index}
                  href="#"
                  onClick={handleZaloClick}
                  className={`social-card ${link.className} animate-on-scroll`}
                >
                  <div className="social-icon zalo-icon-img">
                    <img src="/iconzalo.jpg" alt="Zalo" />
                  </div>
                  <div className="social-info">
                    <h4>{link.name}</h4>
                    <p>{link.description}</p>
                  </div>
                  <i className="fas fa-arrow-right"></i>
                </a>
              ) : (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-card ${link.className} animate-on-scroll`}
                >
                  <div className="social-icon">
                    <i className={`${link.className === 'phone' || link.className === 'map' ? 'fas' : 'fab'} ${link.icon}`}></i>
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

            {/* Google Maps */}
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30999.90013350069!2d109.17640537171918!3d13.779625993354145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316f6d003e344825%3A0x8d950cc6ed5cb1f9!2sHi%20Phone!5e0!3m2!1sen!2s!4v1762097646957!5m2!1sen!2s"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HiPhone Store Location"
              ></iframe>
            </div>
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
