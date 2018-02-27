import React, {Component} from 'react';
import VideoListItem from './video_list_item';

class VideoList extends Component {
  constructor(props) {
    super(props);
    this.state = {videos:[]};
  }

  renderVideos(videos) {
    if (!videos || videos.length < 1) {
      return <div></div>
    }
    return (
      videos.map((video) => {
        return <VideoListItem onVideoClick={this.props.onVideoClick} key={video.id.videoId} video={video} />
      })
    );
  }

  render() {
    return (
      <ul className="col-md-4 list-group">
        {this.renderVideos(this.props.videos)}
      </ul>
    );
  }
}
export default VideoList;
