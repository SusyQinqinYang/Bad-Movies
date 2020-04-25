import React from 'react';
import axios from 'axios';




class Search extends React.Component {
  constructor(props) {
    super(props)
    // swapFavorites={this.swapFavorites}
    // showFaves={this.state.showFaves}
    // getMovies={this.getMovies}
    this.state = {
      // genres: []
      genres: [{ id: 28, name: 'Action' }],
      selectedId: 28
    };
    this.handleGenreChange = this.handleGenreChange.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  componentDidMount() {
    this.getGenres()
  };

  getGenres() {
    //make an axios request in this component to get the list of genres from your endpoint GET GENRES
    axios({
      method: 'get',
      url: '/movies/genres'
    })
      .then(({ data }) => {
        this.setState({
          genres: data
        })
      })
      .catch((err) => { console.log('search component getGenreList axios err', err) });
  };

  handleGenreChange(e) {
    let newId = e.target.value;
    this.setState({//setState can take a cb to log the updated id.
      [e.target.name]: newId
    });
  }

  handleSearchChange(e) {
    e.preventDefault();
    this.props.getMovies(this.state.selectedId);
  }

  render() {
    return (
      <div className="search">
        <button onClick={() => { this.props.swapFavorites() }}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br /><br />
        {/* Make the select options dynamic from genres !!! */}
        {/* How can you tell which option has been selected from here? */}
        {/* control component: on change deal with the input value, that is control component
https://reactjs.org/docs/forms.html */}
        <select
          value={this.state.selectedId}
          name="selectedId"
          onChange={this.handleGenreChange}
        //the process, maybe: invoke the function. target value from line 61. line 63 get the 
        //value from 68 the selected one.
        >
          {this.state.genres.map((genre) => (
            <option
              key={genre.id}
              value={genre.id}
            >
              {genre.name}
            </option>
          ))
          }
        </select>
        <br /><br />

        <button onClick={this.handleSearchChange}>
          Search
          </button>

      </div>
    );
  }
}

export default Search;