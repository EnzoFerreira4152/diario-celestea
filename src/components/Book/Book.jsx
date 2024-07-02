// src/components/Book.js
import React, { useState } from 'react';
import Page from '../Page/Page';
import './Book.css';

const images = [
   '/images/cover.png',
   '/images/page1.png',
   '/images/page2.png',
   '/images/page3.png',
   '/images/page4.png',
   '/images/page5.png',
   '/images/page6.png',
   // Añade más rutas de imágenes según sea necesario
];

const Book = () => {
   const [currentPage, setCurrentPage] = useState(0);

   const nextPage = () => {
      if (currentPage < images.length - 1) {
         setCurrentPage(currentPage + 1);
         playPageFlipSound();
      } else {
         setCurrentPage(0);  // Volver al principio
         playCloseSound();
      }
   };

   const prevPage = () => {
      if (currentPage > 0) {
         setCurrentPage(currentPage - 1);
         playPageFlipSound();
      } else {
         playIntroSound();
      }
   };

   const playPageFlipSound = () => {
      const audio = new Audio('./audio/page-flip-1.mp3');
      audio.play();
   };

   const playCloseSound = () => {
      const audio = new Audio('./audio/close.mp3');
      audio.play();
   };

   return (
      <div className="book">
         <div className="book-container">
            {images.map((src, index) => (
               <Page
                  key={index}
                  imageSrc={src}
                  className={
                     index === currentPage
                        ? 'current'
                        : index < currentPage
                           ? 'previous'
                           : 'next'
                  }
               />
            ))}
         </div>
         <button onClick={prevPage} disabled={currentPage === 0}>
            Anterior
         </button>
         <button onClick={nextPage}>
            {currentPage < images.length - 1 ? 'Siguiente' : 'Volver al inicio'}
         </button>
      </div>
   );
};

export default Book;
