import React, { Component } from 'react';
import {connect} from 'react-redux'

import ListContainer from '../Shared/ListContainer/ListContainer.component'

class BrowseList extends Component {


  render() {
    return (
      <section className="browse-list">
        <p className="list-title">Browsing</p>
        {/*todo - extract these into reusable components */}
        <ListContainer list={(this.props.browseList.results||[])} />
        <div className="list-controls">

        </div>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  fetchingData: state.starwars.fetchingData,
  browseList: state.starwars.browseList
})

export default connect(mapStateToProps)(BrowseList);