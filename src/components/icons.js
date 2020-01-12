import React from 'react';

function SVG({ children, className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
    >
      {children}
    </svg>
  );
}

export const IconSend = () => (
  <SVG className="icon-send">
    <path
      className="primary"
      d="M12 20.1L3.4 21.9a1 1 0 0 1-1.3-1.36l9-18a1 1 0 0 1 1.8 0l9 18a1 1 0 0 1-1.3 1.36L12 20.1z"
    ></path>
    <path
      className="secondary"
      d="M12 2c.36 0 .71.18.9.55l9 18a1 1 0 0 1-1.3 1.36L12 20.1V2z"
    ></path>
  </SVG>
);
