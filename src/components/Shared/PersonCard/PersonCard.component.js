import React from 'react';
import {connect} from 'react-redux';

import Button from '../../Shared/Button/Button.component';

import {SET_SELECTED_CHARACTER} from '../../../constants';
import "./PersonCard.styles.scss";

const PersonCard = ({person, setSelectedCharacter}) => {
  return (
    <div className="person-card">
      <h3>{person.name}</h3>
      <Button
        type="primary"
        size="medium"
        onClick={()=>setSelectedCharacter(person)}
      >
        View more
      </Button>

    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setSelectedCharacter: (person) => {
    dispatch({type: SET_SELECTED_CHARACTER, payload: person})
  }
})

export default connect(null, mapDispatchToProps)(PersonCard);