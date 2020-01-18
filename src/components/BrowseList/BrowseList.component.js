import React, { Component } from 'react';
import {connect} from 'react-redux'

import ListContainer from '../Shared/ListContainer/ListContainer.component'
import ListControls from '../Shared/ListControls/ListControls.component';

class BrowseList extends Component {

  render() {
    const {results, next, previous} = this.props.browseList;
    return (
      <section className="browse-list">
        <p className="list-title">Browsing</p>
        <ListContainer list={(results||[])} />
        <ListControls prevUrl={previous} nextUrl={next} />
      </section>
    )
  }
}

const mapStateToProps = state => ({
  fetchingData: state.starwars.fetchingData,
  browseList: state.starwars.browseList
})

export default connect(mapStateToProps)(BrowseList);