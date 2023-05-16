import React from 'react';
import '../css/style.css';  // Assurez-vous d'avoir ce fichier CSS dans le même dossier

const Rating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<span className="star-filled" key={i}>★</span>); // star filled
    } else {
      stars.push(<span className="star-empty" key={i}>☆</span>); // star not filled
    }
  }

  return <div>{stars}</div>;
};

export default Rating;
