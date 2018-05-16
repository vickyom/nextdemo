import * as types from './actionTypes';

export default function movies(state = {}, action) {
    // console.log("LOAD_MOVIE_SUCCESS - - - - - ",action);
    switch (action.type) {
        case types.LOAD_MOVIE_SUCCESS:
            return { ...state, moviesData: action.movies.results };

        case types.MOVIE_IS_LOADING:
            return { ...state, MovisLoading: action.bool };

        default:
            return state;
    }
}
