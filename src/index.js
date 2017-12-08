import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// use this to fetch data from youtube
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyB_zm0K9pV_-G0SL2MO6EMWwrmf2pEs-TM';

// create a new component. This component should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    }

    // search the list of videos
    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      // displays the videos
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      }); // use this whenever key and value pair are same
      // this.setState({videos: videos})
    });
  }

  render() {
    return(
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

// Take this component's HTML generated and put it on a page (in the DOM)
ReactDOM.render(<App />, document.getElementById('root'));
