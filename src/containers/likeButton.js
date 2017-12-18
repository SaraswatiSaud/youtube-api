import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {like} from '../actions/likeAction';
import {dislike} from '../actions/dislikeAction';

const buttonStyle = {
  margin: '5px',
  color: 'blue',
}

class LikeButton extends Component {
  render() {
    return(
      <div className='offset-md-9'>{this.props.likeValue}
        <button
          onClick={() => this.props.like()}
          className="fa fa-thumbs-up"
          style={buttonStyle}
        ></button>
        <button
          onClick={() => this.props.dislike()}
          className="fa fa-thumbs-down"
          style={buttonStyle}
        ></button>{this.props.dislikeValue}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    likeValue: state.likeValue,
    dislikeValue: state.dislikeValue
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({like, dislike}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps) (LikeButton);
