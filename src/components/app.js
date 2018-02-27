import React, {Component} from 'react';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';
import {fetchVideos} from '../actions'
import {connect} from 'react-redux';


class App extends Component {
  componentWillMount() {
    this.props.fetchVideos('saitama');
  }
  render() {
    // const performSearch = _.debounce((query) => {this.performSearch(query)}, 300)
    return (
      <div>
        <SearchBar/>
        <VideoDetail />
        <VideoList videos={this.props.videos} />
      </div>
    );
  }
}

function mapStateToProps({videos}) {
  return {videos:videos};
}

export default connect(mapStateToProps, {fetchVideos})(App);
