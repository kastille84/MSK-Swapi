import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Router from './Router';
import Footer from './components/Footer/Footer.component';
//css imports
import "./App.scss";

import api from './api';

import {
  GET_BROWSE_LIST,
  GET_BROWSE_LIST_DONE,
  // GET_SEARCH_LIST,
  // GET_SEARCH_LIST_DONE
} from './constants'

class App extends React.Component {

  componentDidMount() {
    this.props.getBrowseList();
    //this.props.getSearchList();
  }

  render() {
    return (
      <div className="App">
        <Router />    
        <Footer />    
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  starwars: state.starwars
});

const mapDispatchToProps = (dispatch => ({
  getBrowseList: () => {
    dispatch({type: GET_BROWSE_LIST})
    api.getBrowseList()
      .then(payload => {
        dispatch({type: GET_BROWSE_LIST_DONE, payload})
      })
      .catch()
  }
}))

export default connect(mapStateToProps, mapDispatchToProps)(App);
