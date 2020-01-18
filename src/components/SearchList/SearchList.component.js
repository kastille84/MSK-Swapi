import React, { Component } from 'react';
import {connect} from 'react-redux'

import ListContainer from '../Shared/ListContainer/ListContainer.component'

class SearchList extends Component {

  render() {
    return (
      <section className="search-list">
        <p className="list-title">Results for ... <span className="search-list__search-term">"{this.props.searchTerm}"</span></p>
        {/*todo - extract these into reusable components */}
        <ListContainer list={(this.props.searchList.results||[])} />
        <div className="list-controls">

        </div>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  fetchingData: state.starwars.fetchingData,
  // browsing: state.starwars.browsing,
  // searching: state.starwars.searching,
  searchList: state.starwars.searchList,
  searchTerm: state.starwars.searchTerm
})

export default connect(mapStateToProps)(SearchList);