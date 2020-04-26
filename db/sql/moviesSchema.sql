-- SET UP SCHEMA HERE

-- // movies: [{
-- //     "popularity": 1.099,
-- //     "poster_path": "/yoKdvhqVw45oEF34No2cD7aP3sx.jpg",
-- //     "id": 49538,
-- //     "backdrop_path": "/7kURId6slyHNujYpCFm0Z1M3kRt.jpg",
-- //     "title": "X-Men: First Class",
-- //     "release_date": "2011-06-01"
-- //   }],

CREATE DATABASE IF NOT EXISTS badMovies;

USE badMovies;

DROP TABLE IF EXISTS movies;
CREATE TABLE movies (
    id INT NOT NULL AUTO_INCREMENT,
    popularity DEC(13, 2) NOT NULL,
    poster_path VARCHAR(500) NOT NULL,
    movie_id INT NOT NULL UNIQUE,
    backdrop_path VARCHAR(500) NULL,
    title VARCHAR(500) NOT NULL,
    release_date VARCHAR(200) NULL DEFAULT NULL,
    PRIMARY KEY(id)
);