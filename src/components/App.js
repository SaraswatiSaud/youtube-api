import _ from 'lodash';
import React, { Component } from 'react';
import SearchBar from '../containers/searchBar';
import VideoDetail from '../containers/videoDetail';
import VideoList from '../containers/videoList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import{ videoSearch} from '../actions/videoSearchAction';
import '../style/style.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedVideo: null
    }
    this.props.videoSearch('book');
  }

  searchVideo = (term) => {
    this.props.videoSearch(term);
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({selectedVideo: nextProps.selectedVideo});
  }

  render(){
   const searchVideo = _.debounce((term) => {this.searchVideo(term) }, 300)
    return(
      <div>
        <SearchBar onSelectTermChange= {searchVideo}/>
        <div className='row'>
          <VideoDetail video={this.state.selectedVideo}/>
          <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.props.videos} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    videos: state.videos,
    selectedVideo: state.videos[0]
   };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({videoSearch}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
