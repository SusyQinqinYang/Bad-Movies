// const Promise = require('bluebird');
// const mysql = Promise.promisifyAll(require('mysql'));
const mysql = require('mysql');


const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'badMovies'
});

conn.connect((err) => {
    if (err) {
        console.log('database badMovies connection err', err);
    } else {
        console.log('database badMovies is connected')
    }
});

// conn.save = (movieForSave) => {
//     let queryStr = 'insert into movies (popularity, poster_path, movie_id, backdrop_path, title, release_date) values (?, ?, ?, ?, ?, ?)';
//     let values = [movieForSave.popularity, movieForSave.poster_path, movieForSave.id, movieForSave.backdrop_path, movieForSave.title, movieForSave.release_date]
//     return mysql.queryAsync(queryStr, values);
// }

module.exports = conn;




























// const mysql = require('mysql');
// const mysqlConfig = require('../../config.js');

// const connection = mysql.createConnection(mysqlConfig);
// // var d = 5;