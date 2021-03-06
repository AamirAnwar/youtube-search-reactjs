import React, {Component} from 'react';
import {connect} from 'react-redux';

class VideoDetail extends Component {
  render() {
    if (!this.props.video) {
      return <div></div>
    }
    const {video} = this.props;
    const url = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
      <div className="video_detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url}></iframe>
        </div>
        <div className="video_detail_text">
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log('Map state to props with ' + JSON.stringify(state.selected_video));
  return {video:state.selected_video};
}

export default connect(mapStateToProps)(VideoDetail);
