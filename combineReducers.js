import { combineReducers } from 'redux'
import movReducer  from "./pages/movies/reducer";
import evtReducer  from "./pages/events/reducer";

export default combineReducers({
    movReducer,
    evtReducer
  })