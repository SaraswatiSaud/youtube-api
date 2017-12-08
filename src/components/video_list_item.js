import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  // Video list with the search term = surfboards
  const imageURL = video.snippet.thumbnails.default.url;

  // const video = props.video; // variable declaration to pull videos from props
  return (
    <li onClick={() => onVideoSelect(video)} className='list-group-item'>
      <div className='video-list media'>
        <div className='media-left'>
          <img className='media-object' src={imageURL} />
        </div>
        <div className='media-body'>
          <div className='media-heading'>{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;
