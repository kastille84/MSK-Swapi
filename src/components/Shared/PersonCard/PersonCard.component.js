import React from 'react';

import Button from '../../Shared/Button/Button.component';

import "./PersonCard.styles.scss";

const PersonCard = ({person}) => {

  return (
    <div className="person-card">
      <h3>{person.name}</h3>
      <Button
        type="primary"
        size="medium"
      >
        View more
      </Button>
    </div>
  )
}

export default PersonCard;