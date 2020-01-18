import React, {Component} from 'react';
import {connect} from 'react-redux';

import './Home.styles.scss';
import Form from '../../components/Form/Form.component';
import BrowseList from '../../components/BrowseList/BrowseList.component';
import SearchList from '../../components/SearchList/SearchList.component';

class Home extends Component {

  determineTypeOfList = () => {
    if(this.props.fetchingData) {
      return <p>Loading</p>
    }
    if(this.props.browsing) {
      return <BrowseList />
    }
    if(this.props.searching) {
      return <SearchList />
    }
  }

  render() {
    return (
      <main className="home">
        <h1 className="page-title">Star Wars</h1>
        <Form />
        {this.determineTypeOfList()}
      </main>
    )
  }
}

const mapStateToProps = state => ({
  fetchingData: state.starwars.fetchingData,
  browsing: state.starwars.browsing,
  searching: state.starwars.searching,
})

export default connect(mapStateToProps)(Home);