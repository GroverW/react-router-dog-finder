import React from 'react';
import { Redirect } from 'react-router-dom';
import Dog from './Dog';

const DogDetails = ({ dog }) => {
  return (
    <div className="DogDetails">
      {dog ? 
        <Dog dog={dog} /> :
        <Redirect to="/dogs" />}
    </div>
  )
}

export default DogDetails;