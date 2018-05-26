import * as types from '../action/movies/actionTypes';

export default function movies(state = {}, action) {
    switch (action.type) {
        case types.LOAD_MOVIE_SUCCESS:
        console.log("LOAD_MOVIE_SUCCESS  - -- - >",action.movies.results )
            return { ...state, moviesData: action.movies.results };

        case types.MOVIE_IS_LOADING:
            return { ...state, MovisLoading: action.bool };

        default:
            return state;
    }
}
