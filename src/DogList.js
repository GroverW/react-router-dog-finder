import React from 'react';
import Dog from './Dog';

const DogList = ({ dogs }) => {
  return (
    <div className="DogList">
      {dogs.map((dog, idx) => (
        <Dog key={idx} dog={dog} />
        ))}
    </div>
  )
}

export default DogList;