import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from '../components/Slideshow';
import data from '../components/data/logements.json';
import Rating from '../components/Rating';
import Collapse from '../components/Collapse';

const AccommodationPage = () => {
  const { id } = useParams();
  const [accommodation, setAccommodation] = useState(null);

  useEffect(() => {
    const foundAccommodation = data.find((item) => item.id === id);
    if (foundAccommodation) {
      setAccommodation(foundAccommodation);
    } else {
    }
  }, [id]);

  if (!accommodation) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{accommodation.title}</h1>
      <Carousel images={accommodation.pictures} />

      <Collapse title="Description">
        <p>{accommodation.description}</p>
      </Collapse>

      <div>
        <img src={accommodation.host.picture} alt={accommodation.host.name} />
        <p>{accommodation.host.name}</p>
      </div>

      <p>{accommodation.location}</p>

      <Collapse title={"Equipements"}>
        
      <ul>
        {accommodation.equipments.map((equipment, index) => (
          <li key={index}>{equipment}</li>
        ))}
      </ul>
      </Collapse>

      <ul>
        {accommodation.tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>

      <Rating rating={accommodation.rating} /> {/* Add the rating here */}

      {/* Ajoutez ici d'autres informations sur le logement */}
    </div>
  );
};

export default AccommodationPage;
