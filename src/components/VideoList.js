import React from 'react';
import VideoItem from './VideoItem';

// Destructured
const VideoList = ({ videos }) => {
  const renderedList = videos.map((video) => {
    return <VideoItem video={video} />;
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

// Old Way
// const VideoList = props => {
//   return (
//     <div>{props.videos.length}</div>
//   );
// };

export default VideoList;