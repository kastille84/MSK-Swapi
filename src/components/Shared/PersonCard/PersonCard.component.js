import React from 'react';

import "./PersonCard.styles.scss";

const PersonCard = ({person}) => {

  return (
    <div className="person-card">
      <h3>{person.name}</h3>
      {/* TODO - Make a button component */}
      <button>View more</button>
    </div>
  )
}

export default PersonCard;