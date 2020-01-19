import React from 'react';
import {connect} from 'react-redux';

import PersonCard from '../PersonCard/PersonCard.component';
import Loading from '../../Shared/Loading/Loading.component';

import "./ListContainer.styles.scss";

const ListContainer = ({list, fetchingListFromUrl}) => {

  const determineDisplay = () => {
    if (fetchingListFromUrl) {
      return (
        <div className="loading-container">
          <Loading />
        </div>
      ) 
    } else if (list.length > 0) {
      return list.map((person,idx) => 
        <PersonCard 
          key={idx} 
          person={person} 
        />
      )
    } else {
      return (
        <div className="no-result-container">
          <p>Sorry no Characters to show</p>
        </div>
      )
    }
  }

  return (
    <div className="list-container">
      {determineDisplay()}
  </div>
  )
}

const mapStateToProps = state => ({
  fetchingListFromUrl: state.starwars.fetchingListFromUrl
})
export default connect(mapStateToProps)(ListContainer);