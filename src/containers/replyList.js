import React, {Component} from 'react';

const pStyle = {
  marginLeft: '20px'
}

class ReplyList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let topreply = this.props.listreply;
    let items = topreply.map((item) => {
      return (
        <p style={pStyle}>{item}</p>
      );
    });

    return(
      <p>{items}</p>
    );
  }
}

export default ReplyList;
