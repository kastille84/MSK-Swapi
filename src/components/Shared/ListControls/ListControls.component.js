import React from 'react';
import {connect} from 'react-redux';

import Button from '../Button/Button.component';

import api from '../../../api';
import {
  GET_BROWSE_NEXT,
  GET_BROWSE_NEXT_DONE,
  GET_BROWSE_PREV,
  GET_BROWSE_PREV_DONE
} from '../../../constants';

import "./ListControls.styles.scss";

const ListControls = ({prevUrl,nextUrl,getNext, getPrev}) => {

  // const determinePage = () => {
  //   const prevNum = 
  // }
  // const parse

  return (
    <section className="list-controls">
      <div className="list-controls__wrapper">
          <Button
            type="primary"
            size="large"
            onClick={()=>getPrev(prevUrl)}
          >{'< '} Prev</Button>

          {/*<p>Page: {determinePage()}</p>*/}

          <Button
            type="primary"
            size="large"
            onClick={()=>getNext(nextUrl)}
          >Next {' >'}</Button>
      </div>
    </section>
  )
}

const mapDispatchToProps = dispatch => ({
  getNext: (url) => {
    dispatch({type: GET_BROWSE_NEXT})
    api.getBrowseNext(url)
    .then(payload => {
      dispatch({type: GET_BROWSE_NEXT_DONE, payload})
    })
  },
  getPrev: (url) => {
    dispatch({type: GET_BROWSE_PREV})
    api.getBrowsePrev(url)
    .then(payload => {
      dispatch({type: GET_BROWSE_PREV_DONE, payload})
    })
  }
})

export default connect(null, mapDispatchToProps)(ListControls);