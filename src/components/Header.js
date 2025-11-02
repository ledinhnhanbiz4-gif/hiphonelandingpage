import React, { useState, useEffect } from 'react';

function Header({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo-container">
          <img src="/hiphone.jpg" alt="HiPhone Logo" className="logo" />
          <h1 className="brand-name">HiPhone</h1>
        </div>
        <nav className="nav">
          <a href="#home" className="nav-link" onClick={(e) => scrollToSection(e, '#home')}>
            Trang Chủ
          </a>
          <a href="#about" className="nav-link" onClick={(e) => scrollToSection(e, '#about')}>
            Về Chúng Tôi
          </a>
          <a href="#contact" className="nav-link" onClick={(e) => scrollToSection(e, '#contact')}>
            Liên Hệ
          </a>
          <button 
            className="theme-toggle-nav" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <i className={`fas fa-${theme === 'light' ? 'moon' : 'sun'}`}></i>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
