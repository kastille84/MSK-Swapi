import React from 'react';
import {connect} from 'react-redux';

import Button from '../Button/Button.component';

import {SET_SELECTED_CHARACTER} from '../../../constants';
import "./CharacterCard.styles.scss";

const CharacterCard = ({character, setSelectedCharacter}) => {
  return (
    <div className="character-card">
      <h3>{character.name}</h3>
      <Button
        type="primary"
        size="medium"
        onClick={()=>setSelectedCharacter(character)}
      >
        View more
      </Button>

    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setSelectedCharacter: (character) => {
    dispatch({type: SET_SELECTED_CHARACTER, payload: character})
  }
})

export default connect(null, mapDispatchToProps)(CharacterCard);