import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="logo-container">
              <img src="/hiphone.jpg" alt="HiPhone Logo" className="logo" />
              <h3>HiPhone</h3>
            </div>
            <p>Cửa hàng điện thoại chính hãng uy tín, chất lượng hàng đầu Việt Nam.</p>
            <div className="footer-social">
              <a 
                href="https://www.facebook.com/share/1BVBB9pjQt/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a 
                href="https://www.tiktok.com/@huyle9979?_r=1&_t=ZS-913ZGHh1Kqb" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="https://zalo.me" target="_blank" rel="noopener noreferrer" aria-label="Zalo">
                <i className="fas fa-comment-dots"></i>
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Liên Kết Nhanh</h4>
            <ul>
              <li><a href="/#home">Trang Chủ</a></li>
              <li><a href="/#about">Về Chúng Tôi</a></li>
              <li><a href="/#contact">Liên Hệ</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Hỗ Trợ</h4>
            <ul>
              <li><a href="/#warranty">Chính Sách Bảo Hành</a></li>
              <li><a href="/#return">Chính Sách Đổi Trả</a></li>
              <li><a href="/#guide">Hướng Dẫn Mua Hàng</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Liên Hệ</h4>
            <ul className="contact-info">
              <li><i className="fas fa-phone"></i> 0396678112</li>
              <li><i className="fas fa-envelope"></i> Lenguynhonghy1994qn@gmail.com</li>
              <li><i className="fas fa-map-marker-alt"></i> Việt Nam</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            &copy; 2025 HiPhone Store. All rights reserved. Made with <i className="fas fa-heart"></i> by Hy Le
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
