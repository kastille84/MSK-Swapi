import React from "react";

import Button from "../Button/Button.component";
import "./CharacterDetail.styles.scss";

const CharacterDetail = ({ selectedCharacter, closeModal }) => {
  return (
    <section className="character-detail">
      {/* Name */}
      <article className="character-detail__info">
        <div className="character-detail__info--left">Name</div>
        <div className="character-detail__info--right">
          {selectedCharacter.name}
        </div>
      </article>
      {/* Gender */}
      <article className="character-detail__info">
        <div className="character-detail__info--left">Gender</div>
        <div className="character-detail__info--right">
          {selectedCharacter.gender}
        </div>
      </article>
      {/* Birth */}
      <article className="character-detail__info">
        <div className="character-detail__info--left">Birth year</div>
        <div className="character-detail__info--right">
          {selectedCharacter.birth_year}
        </div>
      </article>
      {/* Hair Color */}
      <article className="character-detail__info">
        <div className="character-detail__info--left">Hair color</div>
        <div className="character-detail__info--right">
          {selectedCharacter.hair_color}
        </div>
      </article>
      {/* Eye Color */}
      <article className="character-detail__info">
        <div className="character-detail__info--left">Eye color</div>
        <div className="character-detail__info--right">
          {selectedCharacter.eye_color}
        </div>
      </article>
      {/* Height */}
      <article className="character-detail__info">
        <div className="character-detail__info--left">Height</div>
        <div className="character-detail__info--right">
          {selectedCharacter.height}
        </div>
      </article>
      {/* Mass */}
      <article className="character-detail__info">
        <div className="character-detail__info--left">Mass</div>
        <div className="character-detail__info--right">
          {selectedCharacter.mass}
        </div>
      </article>
      <div className="character-detail__footer">
        <Button onClick={() => closeModal()} type="primary" size="medium">
          Close
        </Button>
      </div>
    </section>
  );
};

export default CharacterDetail;
