import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import AnyComponent from './components/filename.jsx'
import Search from './components/Search.jsx'
import Movies from './components/Movies.jsx'
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [{
        "popularity": 1.099,
        "poster_path": "/yoKdvhqVw45oEF34No2cD7aP3sx.jpg",
        "id": 49538,
        "backdrop_path": "/7kURId6slyHNujYpCFm0Z1M3kRt.jpg",
        "title": "X-Men: First Class",
        "release_date": "2011-06-01"
      }],
      favorites: [{ deway: "favorites" }],
      showFaves: false,
    };

    // you might have to do something important here!
    this.getMovies = this.getMovies.bind(this);
  }

  getMovies(clickedGenreId) {
    // make an axios request to your server on the GET SEARCH endpoint
    axios({
      method: 'get',
      url: '/movies/search',
      params: {
        with_genres: clickedGenreId
      }
    })
      .then(({ data }) => {
        console.log('data from search movie', data);
        this.setState({
          movies: data
        }, () => { console.log('set movie', this.state.movies) })
      })
      .catch((err) => {
        console.log('axios err for getting movie', err);
      });
  }

  saveMovie() {
    // same as above but do something diff
  }

  deleteMovie() {
    // same as above but do something diff
  }

  swapFavorites() {
    //dont touch
    this.setState({
      showFaves: !this.state.showFaves
    });
  }

  render() {
    return (
      <div className="app">
        <header className="navbar"><h1>Bad Movies</h1></header>

        <div className="main">
          <Search
            swapFavorites={this.swapFavorites}
            showFaves={this.state.showFaves}
            getMovies={this.getMovies}
          />
          <Movies
            movies={this.state.showFaves ? this.state.favorites : this.state.movies}
            showFaves={this.state.showFaves}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));