import React, { Component } from 'react';
import withRedux from 'next-redux-wrapper';
import makeStore from '../../store';
import { loadMovs } from './movActionsCreator';
import { MoviesIsLoading } from './moviesAction';
import Header from '../../components/header';
import Api from '../../helper/BMSApi';

class movies extends Component {
    static async getInitialProps({ store }) {
      store.dispatch(loadMovs());
      // const moviesData = await store.dispatch(loadMovs());
        // console.log('getInitialProps - - - - -  ', moviesData);
        // const movies = await Api.getAllMovies()
        // store.dispatch({ type: 'LOAD_MOVIE_SUCCESS', movies});

        // return {
        //     moviesData,
        // };
    }
    render() {
         console.log("render - - -> --- >",this.props.moviesData);
        if (this.props.isLoading) {
            return <p>Loading…</p>;
        } else {
            return (
                <div className="row">
                    {/* <Header /> */}
                    <div className="col-md-12">
                        <div className="form-group col-md-4">
                            <label htmlFor="sel1">Select Popular movies:</label>
                            <select className="form-control" id="sel1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-12">
                    {this.props.moviesData &&
                        this.props.moviesData.map(mov => (
                            <div className="col-md-3">
                                <div className="card">
                                    {/* <img style={imgStyle} class="card-img-top" src={`http://image.tmdb.org/t/p/w185//${mov.poster_path}`} alt="Card image"/> */}
                                    <div className="card-body">
                                        <h6 className="card-title">
                                            {mov.title}
                                        </h6>
                                        <p className="card-text">
                                            {mov.release_date}
                                        </p>
                                        <a
                                            href={`/movies/${mov.title.replace(
                                                / /g,
                                                '-'
                                            )}/${mov.id}`}
                                            className="btn btn-primary"
                                        >
                                            See Profile
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
              </div>
            );
        }
    }
}
var imgStyle = {
    height: 325,
};

function mapStateToProps(state) {
    console.log('mapStateToProps - - -> --- >', state);
    return {
        moviesData: state.movReducer.moviesData,
        isLoading: state.movReducer.MovisLoading,
    };
}

movies = withRedux(makeStore, mapStateToProps)(movies);

export default movies;
