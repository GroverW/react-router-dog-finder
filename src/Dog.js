import React from 'react';

const Dog = ({ dog }) => {
  return (
    <div className="Dog">
      <div>
        <h3>{dog.name}</h3>
        <p>Age: {dog.age}</p>
        <ul>
          Facts:
          {dog.facts.map(fact => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
        <img src={dog.src} alt={dog.name} />
      </div>
    </div>
  )
}

export default Dog;