import React, { Component } from 'react';
import {connect} from 'react-redux'

import ListContainer from '../Shared/ListContainer/ListContainer.component'
import ListControls from '../Shared/ListControls/ListControls.component';
import Button from '../Shared/Button/Button.component';

import {
  SET_BROWSING_TRUE
} from '../../constants';

import "./SearchList.styles.scss";

class SearchList extends Component {

  render() {
    const {searchTerm, searchList, setBrowsing} = this.props;
    return (
      <section className="search-list">
        <div className="search-list__info">
          <p>Results for ... <span className="search-list__info__search-term">"{searchTerm}"</span></p>
          <Button 
            type="primary"
            size="large"
            onClick={()=>setBrowsing()}
            >Back to browsing
          </Button>
        </div>
        <ListContainer list={(searchList.results||[])} />
        <ListControls prevUrl={searchList.previous} nextUrl={searchList.next} listType="searching"/>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  fetchingData: state.starwars.fetchingData,
  searchList: state.starwars.searchList,
  searchTerm: state.starwars.searchTerm
})

const mapDispatchToProps = dispatch => ({
  setBrowsing: () => {
    dispatch({type: SET_BROWSING_TRUE})
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchList);