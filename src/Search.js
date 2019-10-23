import React, { Component } from "react";
import './Search.css';

class Search extends Component {

  state = {
    value: ''
  };

  onChange = e => {
    this.setState({ value: e.target.value })
  };

  handleSearch = (event) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.value);
  };

  render() {
    return (
      <div>
        <h1>Welcome to the image search app</h1>
        <input
          name="text"
          type="type"
          placeholder="Search"
          onChange={e => this.onChange(e)}
          value={this.state.value}
        />
        <button onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}

export default Search;
