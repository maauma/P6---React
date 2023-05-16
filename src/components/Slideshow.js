import React, { useState } from 'react';

const Slideshow = ({ images }) => {
  // Définir l'état pour suivre l'image actuellement affichée
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Gestionnaire d'événements pour le bouton "précédent"
  const previousSlide = () => {
    // Si on est à la première image, aller à la dernière image, sinon, aller à l'image précédente
    const newIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  };

  // Gestionnaire d'événements pour le bouton "suivant"
  const nextSlide = () => {
    // Si on est à la dernière image, aller à la première image, sinon, aller à l'image suivante
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="slideshow">
      {images.length > 1 && (
        <>
          <button onClick={previousSlide}>Précédent</button>
          <button onClick={nextSlide}>Suivant</button>
        </>
      )}
      <img src={images[currentImageIndex]} alt="" />
    </div>
  );
};

export default Slideshow;
