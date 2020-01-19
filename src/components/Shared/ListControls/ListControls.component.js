import React from "react";
import { connect } from "react-redux";

import Button from "../Button/Button.component";

import api from "../../../api";
import {
  GET_BROWSE_NEXT,
  GET_BROWSE_NEXT_DONE,
  GET_BROWSE_PREV,
  GET_BROWSE_PREV_DONE,
  GET_SEARCH_NEXT,
  GET_SEARCH_NEXT_DONE,
  GET_SEARCH_PREV,
  GET_SEARCH_PREV_DONE
} from "../../../constants";

import "./ListControls.styles.scss";

const ListControls = ({ prevUrl, nextUrl, listType, getNext, getPrev }) => {
  const determinePage = () => {
    //will either be a number or null
    const prevPageNum = getPageNumFromUrl(prevUrl);
    const nextPageNum = getPageNumFromUrl(nextUrl);
    //base currentPage off of next page num - 1
    let currentPage;
    if (nextPageNum) {
      currentPage = nextPageNum - 1;
    } else {
      currentPage = prevPageNum + 1;
    }
    return currentPage;
  };

  const getPageNumFromUrl = url => {
    if (!url) {
      return null;
    }
    let numAsString = "";
    url.split("").forEach(c => {
      if (!isNaN(c)) {
        numAsString += c;
      }
    });
    return parseInt(numAsString);
  };

  return (
    <section className="list-controls">
      <div className="list-controls__wrapper">
        <Button
          type={prevUrl ? "primary" : "disabled"}
          size="large"
          onClick={() => getPrev(prevUrl, listType)}
        >
          {"< "} Prev
        </Button>

        <p className="page-title">Page {determinePage()}</p>

        <Button
          type={nextUrl ? "primary" : "disabled"}
          size="large"
          onClick={() => getNext(nextUrl, listType)}
        >
          Next {" >"}
        </Button>
      </div>
    </section>
  );
};

const mapDispatchToProps = dispatch => ({
  getNext: (url, listType) => {
    switch (listType) {
      case "browsing":
        dispatch({ type: GET_BROWSE_NEXT });
        api.getBrowseNext(url).then(payload => {
          dispatch({ type: GET_BROWSE_NEXT_DONE, payload });
        });
        break;
      case "searching":
        dispatch({ type: GET_SEARCH_NEXT });
        api.getSearchNext(url).then(payload => {
          dispatch({ type: GET_SEARCH_NEXT_DONE, payload });
        });
        break;
      default:
        return;
    }
  },
  getPrev: (url, listType) => {
    switch (listType) {
      case "browsing":
        dispatch({ type: GET_BROWSE_PREV });
        api.getBrowsePrev(url).then(payload => {
          dispatch({ type: GET_BROWSE_PREV_DONE, payload });
        });
        break;
      case "searching":
        dispatch({ type: GET_SEARCH_PREV });
        api.getSearchPrev(url).then(payload => {
          dispatch({ type: GET_SEARCH_PREV_DONE, payload });
        });
        break;
      default:
        return;
    }
  }
});

export default connect(null, mapDispatchToProps)(ListControls);
