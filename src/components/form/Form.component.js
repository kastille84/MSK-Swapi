import React, {Component} from 'react';
import {connect} from 'react-redux';

import './Form.style.scss';
import { SET_SEARCH_TERM } from '../../constants';

class Form extends Component {

  state = {
    search: ""
  }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(this.state.search)
  //   // let shortUrlObj = {
  //   //   originalUrl: this.state.customUrl.length >0? `https://merry.com/${this.state.customUrl}`: this.state.url,
  //   //   tinyUrl: `https://merry.com/${this.makeTinyUrl()}`,
  //   //   created_at:Math.round(new Date().getTime()/1000),
  //   //   visited_date: null
  //   // }
    
  //   // //store it in local storage
  //   // let urlArray = JSON.parse(localStorage.getItem("urlArray"));
  //   // urlArray.push(shortUrlObj);
  //   // localStorage.setItem('urlArray', JSON.stringify(urlArray))

  //   // //clear out the form
  //   // this.setState({"url": "", "customUrl":""});
  // }


  handleChangeSearch = (event) => {
    let value = event.target.value;
    this.props.setSearchTerm(event.target.value)
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
              value={this.props.searchTerm}
              placeholder="Search all characters"
              onChange={this.handleChangeSearch}
            />
          </div>
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  searchTerm: state.starwars.searchTerm
})
const mapDispatchToProps = dispatch => ({
  setSearchTerm: (word) => {
    dispatch({type: SET_SEARCH_TERM, payload: word})
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);