import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({ dogs }) => {
  return (
    <div className="Nav">
      {dogs.map((dog,idx) => (
        <NavLink key={idx * 20} to={`/dogs/${dog.name}`} >{dog.name}</NavLink>
      ))}
    </div>
  )
}

export default Nav;