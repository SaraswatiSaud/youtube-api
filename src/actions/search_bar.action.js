export function fetchVideo(video) {
  return {
    type: 'FETCH_VIDEO',
    payload: video
  };
}
