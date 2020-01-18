import React, { Component } from 'react';
import {connect} from 'react-redux'

class SearchList extends Component {


  render() {
    return (
      <section>

      </section>
    )
  }
}

const mapStateToProps = state => ({
  fetchingData: state.starwars.fetchingData,
  // browsing: state.starwars.browsing,
  // searching: state.starwars.searching,
  searchList: state.starwars.searchList
})

export default connect(mapStateToProps)(SearchList);