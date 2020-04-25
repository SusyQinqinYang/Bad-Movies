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
        res.sendStatus(404);
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
        res.sendStatus(404);
      })
  },

  /*res.sendStatus(201);//don't use sendStatus. it would conflict with 
  the express auto created status and cause double header. because 1 status sent 
  by express. and yourself are sending another one.
  use res.status to custom your own code if you don't want express to auto identify one for you.*/
  saveMovie: (req, res) => {
    let movieForSave = req.body.movie;
    movieModel.save(movieForSave)
      .then((result) => {
        console.log('result after saving', result);
        res.status(201).json(result);
      })
      .catch((err) => {
        console.log('save axios error', err);
        res.status(500).json('save failed');
      })
  },

  getFav: (req, res) => {
    movieModel.retrieve()
      .then((result) => {
        console.log('fav result from db', result);
        res.json(result);
      })
      .catch((err) => {
        console.log('get fav axios error', err);
        res.status(500).json('get fav failed');
      })
  },

  deleteMovie: (req, res) => {
    movieModel.deleteMovie(req.body.movieId)
      .then(() => {
        res.send('deleted');
      })
      .catch((err) => {
        console.log('delete err', err);
        res.send('delete failed');
      })

  }
}