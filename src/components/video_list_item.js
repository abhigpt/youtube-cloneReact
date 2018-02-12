import React from 'react';
import ReactDOM from 'react-dom';
const VideoListItem = (props)=>{
  let video = props.video
  let imageUrl = video.snippet.thumbnails.default.url
  let onVideoSelect = props.onVideoSelect
  console.log(video);
  return (
    <li className = "list-group-item" onClick = {()=> onVideoSelect(video)}>
      <div className = "video-list media">
        <div className = "media-left">
          <img className = "media-object" src = {imageUrl}/>
        </div>
      </div>
      <div className = "media-body">
        <div className = "media-heading">{video.snippet.title}</div>
      </div>

    </li>
  )
}

export default VideoListItem
