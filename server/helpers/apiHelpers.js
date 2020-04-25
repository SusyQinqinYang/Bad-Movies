const request = require('request');
const axios = require('axios');
const { API_KEY } = require('../../config.js');

// write out logic/functions required to query TheMovieDB.org

// FOR REFERENCE:
// https://www.themoviedb.org/account/signup
// https://developers.themoviedb.org/3/discover/movie-discover
// Get your API Key and save it in your config file

// .then((data) => {
//     var parsed = JSON.parse(JSON.stringify(data.data.genres));
//     console.log(parsed)
// })



let movieDB = {};
movieDB.getGenreList = () => {
    let options = { params: { api_key: API_KEY } }
    return axios(
        {
            method: 'get',
            url: 'https://api.themoviedb.org/3/genre/movie/list',
            params: options.params,
        }
    )
};

movieDB.getMovieList = (genreId) => {
    let options = {
        params: {
            api_key: API_KEY,
            language: 'en-US',
            sort_by: 'popularity.asc',
            include_video: false,
            page: 2,
            with_genres: genreId,
            'vote_count.gte': 100
        }
    }
    return axios({
        method: 'get',
        url: 'https://api.themoviedb.org/3/discover/movie',
        params: options.params,
    })
}

module.exports = movieDB;
// Don't forget to export your functions and require them within your server file