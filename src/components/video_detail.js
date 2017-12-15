import React from 'react';
import LikeButton from './like_button';
import CommentVideo from './comment_video';

const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Video Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  return(
    <div className='video-detail col-md-6 offset-md-1'>
      <div className='embed-responsive embed-responsive-16by9'>
        <iframe className='embed-responsive-item' src={url}></iframe>
      </div>
      <div className='details'>
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
      <div>
        <br />
        <LikeButton />
        <CommentVideo />
      </div>
    </div>
  )
}

export default VideoDetail;
