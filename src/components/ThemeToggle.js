import React from 'react';

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <i className={`fas fa-${theme === 'light' ? 'moon' : 'sun'}`}></i>
    </button>
  );
}

export default ThemeToggle;
