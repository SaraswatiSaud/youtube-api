import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateReply} from '../actions/replyAction';
import ReplyList from './replyList';

const buttonStyle = {
  cursor: 'pointer',
  color: 'blue'
}

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      replying: false,
      // limitTo: 3
    }
    this.replyComment = this.replyComment.bind(this);
  }

  // onLoadMore() {
  //   this.setState({limitTo: this.state.limitTo + 3});
  // }

  replyComment(event){
    this.setState({ replying: true})
    this.props.dispatch(updateReply(this.state.reply))
  }

  handleChange = (event) => {
    this.setState({
      reply: event.target.value
    });
  }

  render() {
    var replyStyle = {};
    if(!this.state.replying) {
      replyStyle.display = 'none';
    }

    let topcomments = this.props.listcomments;
    let items = topcomments.sort().reverse().slice(0, 3).map((item, index) => {
      return (
        <p>{item}
          <span className='pull-right'>{new Date().toLocaleTimeString()}</span>
          <br />
          <button onClick={() => this.replyComment()}
                  className='btn btn-sm'
                  style={buttonStyle}>Reply</button>
          <br/>
          <input type='text' style={replyStyle} className='form-control'
                 onChange={this.handleChange}/>
            <ReplyList listreply={this.props.reply} />
        </p>
      );
    });

    return(
      <p>{items}</p>
    );
  }
}

function mapStateToProps(state) {
  return {
    reply: state.reply,
  }
}

export default connect(mapStateToProps) (CommentList);
