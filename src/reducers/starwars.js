//import constants here
import { 
  GET_BROWSE_LIST,
  GET_BROWSE_LIST_DONE,
  GET_SEARCH_LIST,
  GET_SEARCH_LIST_DONE,
  SET_SEARCH_TERM
} from '../constants';


//initial state
const initialState = {
  browsing: true,
  searching: false,
  searchList: [],
  searchTerm: null,
  browseList: [],
  fetchingData: false
};

export default (state=initialState, action) => {
  switch(action.type) {
    case GET_BROWSE_LIST:
      return {
        ...state,
        fetchingData: true
      }
    case GET_BROWSE_LIST_DONE:
      return {
        ...state,
        fetchingData: false,
        browseList: action.payload
      }
    case GET_SEARCH_LIST:
      return {
        ...state,
        fetchingData: true
      }
    case GET_SEARCH_LIST_DONE:
      return {
        ...state,
        fetchingData: false,
        searchList: action.payload
      }
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload
      }
    default:
      return state;
  }
}