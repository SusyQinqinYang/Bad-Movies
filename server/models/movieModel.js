//Select one db to work with:

//For SQL
const sqlDb = require('../../db/sql');
//For Mongo
const mongoDb = require('../../db/mongodb')

module.exports = {
    save: (movieForSave) => {
        return mongoDb.save(movieForSave);
    },

    retrieve: () => {
        return mongoDb.retrieve();
    },

    deleteMovie: (id) => {
        return mongoDb.deleteMovie(id);
    }
}

//***********************************************************************************************************************
// router.get('/search', movieController.getSearch)
// router.get('/genres', movieController.getGenres)
// router.post('/save', movieController.saveMovie)
// router.delete('/delete', movieController.deleteMovie)
//OPTION 1: Use regular routes;
//If you are using OPTION 1, you do not need routes>movieRoutes.js file

// app.get("/genres", function(req, res) {
//     // make an axios request to get the official list of genres from themoviedb
//     // use this endpoint. you will need your API key from signup: https://api.themoviedb.org/3/genre/movie/list
//   });

//   app.get("/search", function(req, res) {
//     // use this endpoint to search for movies by genres (using API key): https://api.themoviedb.org/3/discover/movie
//     // and sort them by votes (worst first) using the search parameters in themoviedb API
//     // do NOT save the results into the database; render results directly on the page
//   });

//   app.post("/save", function(req, res) {
//     //save movie as favorite into the database
//   });

//   app.post("/delete", function(req, res) {
//     //remove movie from favorites into the database
//   });