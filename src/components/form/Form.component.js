import React, {Component} from 'react';
import {connect} from 'react-redux';

import './Form.style.scss';
import { 
  SET_SEARCH_TERM,
  GET_SEARCH_LIST,
  GET_SEARCH_LIST_DONE
} from '../../constants';

import api from '../../api';

class Form extends Component {

  state = {
    search: ""
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.search)

    //validate searchTerm for empty string
    if(this.state.search.trim()==="") {
      return;
    }
    //make api call to get searchlist
    this.props.setSearchTerm(this.state.search.trim());
    this.props.getSearchList(this.state.search.trim());

    //clear out the form
    this.setState({"search": ""});
  }


  handleChangeSearch = (event) => {
    let value = event.target.value;
    this.setState({search: value})
  }


  render() {
    return (
      <div className="form-container">
        <form 
          className="form"
          onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <input 
              name="search"
              type="text"
              value={this.state.search}
              placeholder="Search all characters"
              onChange={this.handleChangeSearch}
            />
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  //searchTerm: state.starwars.searchTerm
})
const mapDispatchToProps = dispatch => ({
  setSearchTerm: (word) => {
    dispatch({type: SET_SEARCH_TERM, payload: word})
  },
  getSearchList: (word) => {
    dispatch({type: GET_SEARCH_LIST})
    api.getSearchList(word)
      .then(payload => {
        dispatch({type: GET_SEARCH_LIST_DONE, payload})
      })
      .catch()
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);