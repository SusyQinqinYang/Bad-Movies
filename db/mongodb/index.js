const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/badMovies', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'db connection error:'));
db.once('open', () => {
    console.log('connected to db...')
})

const movieSchema = mongoose.Schema({
    popularity: Number,
    poster_path: { type: String, unique: true },
    id: { type: Number, unique: true },
    backdrop_path: String,
    title: String,
    release_date: String
});

const Movie = mongoose.model('Movie', movieSchema);

const save = (movieForSave) => {

    let movie = new Movie({
        popularity: movieForSave.popularity,
        poster_path: movieForSave.poster_path,
        id: movieForSave.id,
        backdrop_path: movieForSave.backdrop_path,
        title: movieForSave.title,
        release_date: movieForSave.release_date
    });
    return movie.save();
}

const retrieve = () => {
    return Movie.find().exec();
}

const deleteMovie = (id) => {
    return Movie.findOneAndDelete({ "id": id }).exec();
};


module.exports = { save, retrieve, deleteMovie };






























// const mongoose = require('mongoose');
// if (process.env.MONGODB_URI) {
//   mongoose.connect(process.env.MONGODB_URI)
// } else {
//   // mongoose.connect('mongodb://localhost:27017/badmovies', { useNewUrlParser: true });
//   mongoose.connect('mongodb://localhost/badmovies', { useNewUrlParser: true });

// }

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'Connection error:'));
// db.once('open', () => {
//   console.log('Connected to db...');
// })

// module.exports.db = db