import * as types from './actionTypes';  


export default function events(state = {eventsData:[]}, action) {

      switch(action.type) {
        case types.LOAD_EVENTS_SUCCESS:
           return {  ...state, eventsData: action.evts}

        case types.EVENTS_IS_LOADING:
             return {  ...state, EventsLoading: action.bool}
                 
        default: 
            return state;
      }
}