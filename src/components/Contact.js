import React from 'react';

function Contact() {
  const socialLinks = [
    {
      name: 'Facebook',
      description: 'Cập nhật tin tức mới nhất',
      icon: 'fa-facebook-f',
      url: 'https://www.facebook.com/share/1BVBB9pjQt/?mibextid=wwXIfr',
      className: 'facebook'
    },
    {
      name: 'Fanpage',
      description: 'Nhận ưu đãi độc quyền',
      icon: 'fa-facebook',
      url: 'https://www.facebook.com/share/17gDtg6z1u/?mibextid=wwXIfr',
      className: 'fanpage'
    },
    {
      name: 'TikTok',
      description: 'Review sản phẩm & tips hay',
      icon: 'fa-tiktok',
      url: 'https://www.tiktok.com/@huyle9979?_r=1&_t=ZS-913ZGHh1Kqb',
      className: 'tiktok'
    },
    {
      name: 'Hotline',
      description: '0396678112',
      icon: 'fa-phone-alt',
      url: 'tel:0396678112',
      className: 'phone'
    }
  ];

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
          {/* Zalo QR Card */}
          <div className="contact-card zalo-card">
            <div className="card-header">
              <i className="fas fa-qrcode"></i>
              <h3>Quét Mã Zalo</h3>
            </div>
            <div className="qr-container">
              <img src="/QR.jpg" alt="Zalo QR Code" className="qr-code" />
              <p className="contact-name">Hy Le</p>
              <p className="contact-label">Liên hệ Zalo</p>
            </div>
            <div className="card-decoration"></div>
          </div>

          {/* Social Links */}
          <div className="social-links-container">
            {socialLinks.map((link, index) => (
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
