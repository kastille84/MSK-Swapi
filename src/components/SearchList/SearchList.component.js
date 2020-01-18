import React, { Component } from 'react';
import {connect} from 'react-redux'

import ListContainer from '../Shared/ListContainer/ListContainer.component'
import ListControls from '../Shared/ListControls/ListControls.component';

class SearchList extends Component {

  render() {
    const {searchTerm, searchList} = this.props;
    return (
      <section className="search-list">
        <p className="list-title">Results for ... <span className="search-list__search-term">"{searchTerm}"</span></p>
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

export default connect(mapStateToProps)(SearchList);