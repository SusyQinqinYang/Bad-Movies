const movieModel = require('../models/movieModel.js');
const apiHelpers = require('../helpers/apiHelpers.js');

//Return requests to the client
module.exports = {
  getSearch: (req, res) => {
    // get the search genre     
    // https://www.themoviedb.org/account/signup
    // get your API KEY
    // use this endpoint to search for movies by genres, you will need an API key
    // https://api.themoviedb.org/3/discover/movie
    // and sort them by horrible votes using the search parameters in the API
    let clickedGenreId = req.query.with_genres;
    apiHelpers.getMovieList(clickedGenreId)
      .then(({ data }) => {
        res.json(data.results);
      })
      .catch((err) => {
        console.log('getMovies axios error', err);
      })
  },
  getGenres: (req, res) => {
    // make an axios request to get the list of official genres
    // use this endpoint, which will also require your API key: https://api.themoviedb.org/3/genre/movie/list
    // send back
    apiHelpers.getGenreList()
      .then((data) => {
        res.json(data.data.genres);
      })
      .catch((err) => {
        console.log('getGenres axios error', err);
        res.sendStatus(500);
      })
  },
  saveMovie: (req, res) => {

  },
  deleteMovie: (req, res) => {

  }
}