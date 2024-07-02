// src/components/Page.js
import React from 'react';
import './Page.css';

const Page = ({ imageSrc, className }) => {
  return (
    <div className={`page ${className}`}>
      <img src={imageSrc} alt="Page content" className="page-image" />
    </div>
  );
};

export default Page;
