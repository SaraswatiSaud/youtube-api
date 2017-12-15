import React, { Component } from 'react';
// use this to fetch data from youtube
import YTSearch from 'youtube-api-search';
import SearchBar from '../containers/search_bar';
import VideoList from '../containers/video_list';
import VideoDetail from '../containers/video_detail';

import '../style/style.css';
const API_KEY = 'AIzaSyB_zm0K9pV_-G0SL2MO6EMWwrmf2pEs-TM';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('book')
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      // displays the videos
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return(
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <div className='row'>
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos} />
        </div>
      </div>
    );
  }
}


export default App;
