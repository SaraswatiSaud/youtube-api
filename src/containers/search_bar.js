import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super();
    this.state = { term: '' };
  }

  render() {
    return(
      <div className='search-bar col-md-8'>
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
