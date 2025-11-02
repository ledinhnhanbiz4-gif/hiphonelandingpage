import React from 'react';

function About() {
  const features = [
    {
      icon: 'fa-certificate',
      title: 'Chính Hãng 100%',
      description: 'Nhập khẩu chính hãng, đầy đủ giấy tờ'
    },
    {
      icon: 'fa-tag',
      title: 'Giá Tốt Nhất',
      description: 'Cam kết giá rẻ, trả góp 0% lãi suất'
    },
    {
      icon: 'fa-tools',
      title: 'Bảo Hành 12 Tháng',
      description: '1 đổi 1 trong 30 ngày đầu'
    },
    {
      icon: 'fa-gift',
      title: 'Nhiều Ưu Đãi',
      description: 'Quà tặng giá trị khi mua hàng'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Về Chúng Tôi</span>
          <h2 className="section-title">
            Tại Sao Chọn <span className="gradient-text">HiPhone</span>?
          </h2>
          <p className="section-subtitle">
            Chúng tôi cam kết mang đến trải nghiệm mua sắm điện thoại tốt nhất
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card animate-on-scroll">
              <div className="feature-icon">
                <i className={`fas ${feature.icon}`}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
