import App from './App.js';
import VideoListEntry from './VideoListEntry.js';

// var VideoList = () => (
//   <div className="video-list">
//     <div><h5><em>videoListEntry</em> view goes here</h5></div>
//     <div><h5><em>videoListEntry</em> view goes here</h5></div>
//     <div><h5><em>videoListEntry</em> view goes here</h5></div>
//     <div><h5><em>videoListEntry</em> view goes here</h5></div>
//     <div><h5><em>videoListEntry</em> view goes here</h5></div>
//   </div>
// );

function VideoList({videos}) {
  debugger;
  return (
    <div className="video-list">
    {console.log('%cwhat is .map() here?: ', 'background-color: red', typeof (videos.map(function(videos) {
      return (
        <VideoListEntry />
      )
    })))}
  </div>
  )
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
