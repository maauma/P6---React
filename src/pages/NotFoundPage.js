import React from 'react';

function NotFound() {
  return (
    <div className='error'>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <a>Retourner sur la page d’accueil</a>
    </div>
  );
}

export default NotFound;
