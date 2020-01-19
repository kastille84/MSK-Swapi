//import constants here
import {
  GET_BROWSE_LIST,
  GET_BROWSE_LIST_DONE,
  GET_BROWSE_NEXT,
  GET_BROWSE_NEXT_DONE,
  GET_BROWSE_PREV,
  GET_BROWSE_PREV_DONE,
  GET_SEARCH_LIST,
  GET_SEARCH_LIST_DONE,
  GET_SEARCH_NEXT,
  GET_SEARCH_NEXT_DONE,
  GET_SEARCH_PREV,
  GET_SEARCH_PREV_DONE,
  SET_SEARCH_TERM,
  SET_BROWSING_TRUE,
  SET_SELECTED_CHARACTER
} from "../constants";

//initial state
const initialState = {
  browsing: true,
  searching: false,
  searchList: [],
  searchTerm: null,
  browseList: [],
  fetchingData: false,
  fetchingListFromUrl: false,
  selectedCharacter: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BROWSE_LIST:
      return {
        ...state,
        fetchingData: true
      };
    case GET_BROWSE_LIST_DONE:
      return {
        ...state,
        fetchingData: false,
        browseList: action.payload
      };
    case GET_BROWSE_PREV:
      return {
        ...state,
        fetchingListFromUrl: true
      };
    case GET_BROWSE_PREV_DONE:
      return {
        ...state,
        fetchingListFromUrl: false,
        browseList: action.payload
      };
    case GET_BROWSE_NEXT:
      return {
        ...state,
        fetchingListFromUrl: true
      };
    case GET_BROWSE_NEXT_DONE:
      return {
        ...state,
        fetchingListFromUrl: false,
        browseList: action.payload
      };
    case GET_SEARCH_LIST:
      return {
        ...state,
        fetchingData: true,
        searching: true,
        browsing: false
      };
    case GET_SEARCH_LIST_DONE:
      return {
        ...state,
        fetchingData: false,
        searchList: action.payload
      };
    case GET_SEARCH_PREV:
      return {
        ...state,
        fetchingListFromUrl: true
      };
    case GET_SEARCH_PREV_DONE:
      return {
        ...state,
        fetchingListFromUrl: false,
        searchList: action.payload
      };
    case GET_SEARCH_NEXT:
      return {
        ...state,
        fetchingListFromUrl: true
      };
    case GET_SEARCH_NEXT_DONE:
      return {
        ...state,
        fetchingListFromUrl: false,
        searchList: action.payload
      };
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload
      };
    case SET_BROWSING_TRUE:
      return {
        ...state,
        browsing: true,
        searching: false,
        searchTerm: null
      };
    case SET_SELECTED_CHARACTER:
      return {
        ...state,
        selectedCharacter: action.payload
      };
    default:
      return state;
  }
};
