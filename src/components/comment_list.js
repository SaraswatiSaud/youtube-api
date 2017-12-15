import React, {Component} from 'react';

class CommentList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(!this.props.listcomments) {
      return(
        <div>No Comments</div>
      );
    }
    let topcomments = this.props.listcomments;
    let items = topcomments.map((item) => {
      return (<p>{item}</p>);
    });

    return(
      <div>
        <p>
          {items}
        </p>
      </div>
    );
  }
}

export default CommentList;
