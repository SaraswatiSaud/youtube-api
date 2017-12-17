// importing boilerplate
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchVideo } from '../actions/search_bar.action';

class SearchBar extends Component {
  constructor(props) {
    super();
    this.state = { term: '' };

    // this.onInputChange = this.onInputChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  onInputChange = (term) => {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  handleSubmit = (event) => {
    // event.preventDefault();

    // fetch video data
    this.props.dispatch(fetchVideo(this.state.term));
    // this.setState({ term: '' });
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
                    onClick={() => this.handleSubmit()}
            >Search</button>
          </span>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    video: state.video
  }
}

// null is passed because we always pass mapDispatchToProps as a second
// argument
export default connect(mapStateToProps) (SearchBar);
