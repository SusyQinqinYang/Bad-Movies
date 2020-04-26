import React from 'react';

class Movies extends React.Component {
  constructor(props) {
    super(props)
    // movies={this.state.showFaves ? this.state.favorites : this.state.movies}
    // showFaves={this.state.showFaves}
    // saveMovie={this.saveMovie}
    // deleteMovie={this.deleteMovie}
    this.handleSaveOrDelete = this.handleSaveOrDelete.bind(this);
  }

  // Make an onClick for each list item. If the movies shown is the search results, 
  // onClick add it to the database (do it in the main app, and pass down the function)

  // If you're currently showing the fave list, delete the movie instead
  // You can tell which list is currently being rendered based on whether the prop "showFaves" is false (search results) or true (fave list) (within index.jsx)

  handleSaveOrDelete(movie) {
    if (!this.props.showFaves) {
      //currently showing movie results.
      this.props.saveMovie(movie);
    } else {
      // console.log('movie');
      this.props.deleteMovie(movie);
    }
  }

  render() {
    return (
      <ul className="movies">
        {this.props.movies.map((movie) => {
          return (
            <li
              className="movie_item"
              value={movie.id}
              key={movie.id}
              //can't passing in value attribute into js function as arg. because i is html another is js.
              onClick={() => { this.handleSaveOrDelete(movie) }}
            >
              <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
              {/* <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} /> */}
              <div className="movie_description">
                <h2>{movie.title}</h2>
                <section className="movie_details">
                  <div className="movie_year">
                    <span className="title">Year</span>
                    <span>{movie.release_date.slice(0, 4)}</span>
                  </div>
                  <div className="movie_rating">
                    <span className="title">Rating</span>
                    <span>{movie.vote_average}</span>
                  </div>
                </section>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Movies;