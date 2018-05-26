import Api from '../../helper/BMSApi';
import * as types from './actionTypes';
import { MoviesIsLoading, loadMovSuccess } from './moviesAction';

export function loadMovs() {
    return function(dispatch, getState) {
        dispatch(MoviesIsLoading(true));
        return Api.getAllMovies()
            .then(movs => {
                dispatch(loadMovSuccess(movs));
                dispatch(MoviesIsLoading(false));
            })
            .catch(() => dispatch(MoviesHasErrored(true)));
    };
}
