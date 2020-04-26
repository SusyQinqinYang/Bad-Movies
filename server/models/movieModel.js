//Select one db to work with:
const Promise = require('bluebird');
const sqlDb = Promise.promisifyAll(require('../../db/sql'));

//For SQL
// const sqlDb = require('../../db/sql');
//For Mongo
const mongoDb = require('../../db/mongodb')




module.exports = {
    save: (movieForSave) => {
        let queryStr = `insert into movies (popularity, poster_path, movie_id, backdrop_path, title, release_date) values (?, ?, ?, ?, ?, ?)`;
        let values = [movieForSave.popularity, movieForSave.poster_path, movieForSave.id, movieForSave.backdrop_path, movieForSave.title, movieForSave.release_date]
        return sqlDb.queryAsync(queryStr, values);
    },

    retrieve: () => {
        let queryStr = 'select * from movies';
        return sqlDb.queryAsync(queryStr);
    },

    deleteMovie: (movieId) => {
        console.log('movieId', movieId);
        let queryStr = `delete from movies where id = ${movieId}`;
        return sqlDb.queryAsync(queryStr);
    }
}













//***********************************************************************************************************************
//mongo
// module.exports = {
//     save: (movieForSave) => {
//         return mongoDb.save(movieForSave);
//     },

//     retrieve: () => {
//         return mongoDb.retrieve();
//     },

//     deleteMovie: (id) => {
//         return mongoDb.deleteMovie(id);
//     }
// }


