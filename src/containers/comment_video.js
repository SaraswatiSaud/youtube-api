import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateComment} from '../actions/comment.action';
import CommentList from './comment_list';

class CommentVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleChange = (event) => {
    this.setState({
      comment: event.target.value
    });
  }

  handleSubmit = (event) => {
    if(!this.props.comment) {
      return false;
    }
    this.setState({
      count: this.state.count + 1
    })
    this.props.dispatch(updateComment(this.state.comment))
  }

  render() {
    return(
      <div>
        <hr />
        <h3>Add a comment</h3>
        <textarea
          cols='75' value={this.state.value}
          onChange={this.handleChange}
        ></textarea><br />
        <button
          onClick={() => this.handleSubmit()}
          className='btn btn-primary'
        >
        Comment</button>
        <br />
        <hr />
        <h5>Top Comments<i className="pull-right">Total Comments ({this.state.count})</i></h5>
        <CommentList
          listcomments={this.props.comment}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    comment: state.comment,
  }
}

export default connect(mapStateToProps)(CommentVideo);
