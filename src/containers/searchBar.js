import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super();
    this.state = { term: '' };
  }

  onInputChange = (term) => {
    this.setState({term});
    this.props.onSelectTermChange(term);
  }

  render() {
    return(
      <div className='search-bar col-md-7'>
        <form className='input-group'>
          <input
            className='form-control'
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)}
          />
          <span className='input-group-btn'>
            <button type='submit'
                    className='btn btn-secondary'
                    >Search</button>
          </span>
        </form>
      </div>
    );
  }
}

export default SearchBar;
