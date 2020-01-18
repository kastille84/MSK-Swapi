import React from 'react';

import PersonCard from '../PersonCard/PersonCard.component';

import "./ListContainer.styles.scss";

const ListContainer = ({list}) => {

  return (
    <div className="list-container">
    {list.length > 0 &&
      list.map((person,idx) => 
      <PersonCard key={idx} person={person} />
    )}

    {list.length === 0 &&
      <p>Sorry no Characters to show</p>
    }
  </div>
  )
}

export default ListContainer;