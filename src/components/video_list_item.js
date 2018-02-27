import React, {Component} from 'react';
import {didSelectVideo} from '../actions';
import {connect} from 'react-redux';

class VideoListItem extends Component {
  render() {
    return (
      <li onClick={(e) => {this.props.didSelectVideo(this.props.video)}} className="list-group-item">
        <div className="video_list_item media">

          <div className="media-left">
            <img src={this.props.video.snippet.thumbnails.default.url} alt="" />
          </div>

          <div className="media-body">
            <div className="media-heading">{this.props.video.snippet.title}></div>
          </div>

        </div>
      </li>
    );
  }
}


export default connect(null, {didSelectVideo})(VideoListItem);
