import * as types from './actionTypes'

//Action for  Movies HasErrored
export function EventsHasErrored(bool) {
    return {
        type: types.EVENTS_HAS_ERRORED,
        hasErrored: bool
    }
}

//Action for  Movies IsLoading
export function EventsIsLoading(bool) {
    return { type: types.EVENTS_IS_LOADING, bool}
}
//Action for load Movies Successfully
export function loadEvtSuccess(evts) {
    return {type: types.LOAD_EVENTS_SUCCESS, evts}
}