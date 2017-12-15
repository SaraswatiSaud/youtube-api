import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {like} from '../actions/like';
import {dislike} from '../actions/dislike';

const buttonStyle = {
  margin: '5px',
  color: 'blue',
  // fontSize: '20px'
}

class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likeValue: null,
      dislikeValue: null
    }
  }

  render() {
    return(
      <div className='offset-md-9'>
        {this.props.likeValue}
        <button
          onClick={() => this.props.like()}
          class="fa fa-thumbs-up"
          style={buttonStyle}
        ></button>
        <button
          onClick={() => this.props.dislike()}
          class="fa fa-thumbs-down"
          style={buttonStyle}
        ></button>
        {this.props.dislikeValue}
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
