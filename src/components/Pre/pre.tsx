
import React from 'react';
import './pre.scss';

interface PreProps {
  load: boolean;
}

const Pre: React.FC<PreProps> = ({ load }) => {
  if (!load) return null;

  return (
    <div className="preloader-overlay">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="gooey-svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
            <feColorMatrix 
              in="blur" 
              mode="matrix" 
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 30 -10" 
              result="goo" 
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      
      {/* Loader */}
      <div className="loader">
        <div></div>
      </div>
      
      {/* Texto opcional */}
      <p className="loading-text">Cargando arte...</p>
    </div>
  );
};

export default Pre;