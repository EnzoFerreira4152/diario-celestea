// src/components/Book.js
import React, { useState } from 'react';
import Page from '../Page/Page';
import './Book.css';

const images = [
   '/images/cover.png',
   '/images/page0.png',
   '/images/page1.png',
   '/images/page2.png',
   '/images/page3.png',
   '/images/page4.png',
   '/images/page5.png',
   '/images/page6.png',
   '/images/page7.png',
];

const Book = () => {
   const [currentPage, setCurrentPage] = useState(0);
   const audioFlip = new Audio('./audio/page-flip.mp3');
   const audioClose = new Audio('./audio/close.mp3');

   const nextPage = () => {
      if (currentPage === 0){
         setCurrentPage(currentPage + 1);
      } else if (currentPage > 0 && currentPage < images.length - 1) {
         audioFlip.play();
         setCurrentPage(currentPage + 1);
      } else {
         audioClose.play();
         setCurrentPage(0);
      }
   };

   const prevPage = () => {
      if (currentPage === 1){
         audioClose.play();
         setCurrentPage(0);
      }
      else if (currentPage > 0) {
         audioFlip.play();
         setCurrentPage(currentPage - 1);
      }
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
