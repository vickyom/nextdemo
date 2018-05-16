import axios from 'axios';

class BMSApi {
    static getAllMovies() {
        return axios
            .get(
                `https://api.themoviedb.org/3/movie/now_playing?api_key=e2df83ac84acb977bef0b1fd007c11ad&language=en-US&page=1`
            )
            .then(function(response) {
                //   console.log("getAllMovies === ",response)
                return response.data; // the response.data is string of src
            })
            .catch(function(err) {
                console.log(err);
            });
    }

    static getAllEvents() {
        return axios
            .get(
                `https://api.themoviedb.org/3/movie/top_rated?api_key=e2df83ac84acb977bef0b1fd007c11ad&language=en-US&page=1`
            )
            .then(function(response) {
                return response.data; // the response.data is string of src
            })
            .catch(function(response) {
                console.log(response);
            });
    }
}
export default BMSApi;

//http://data-in.bookmyshow.com/?cmd=DEGETEVENTSWEB&rc=PUNE&sr=PUNE&lt=&lg=&et=MT&f=json&t=67x1xa33b4x422b361ba&ch=mobile&issubscribed=N
//http://data-in.bookmyshow.com/?cmd=DEGETEVENTLIST&rc=MUMBAI&sr=MWEST&lt=&lg=&cc=&dt=&et=CT&f=json&t=67x1xa33b4x422b361ba&ch=mobile
