import React from 'react';

import PersonCard from '../PersonCard/PersonCard.component';

import "./ListContainer.styles.scss";

const ListContainer = ({list}) => {

  return (
    <div className="list-container">
    {(list.map(person => 
      <PersonCard person={person} />
    ))}
  </div>
  )
}

export default ListContainer;