import React, {Component} from 'react';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
const API_KEY = "AIzaSyAeAhee6cfDyYaCg0aY9PCKvhdD93Vcqjc";

class App extends Component {
  state = {
    videos:[],
    selectedVideo:null
  };

  componentWillMount() {
    this.performSearch('saitama');
  }
  render() {
    const performSearch = _.debounce((query) => {this.performSearch(query)}, 300)
    return (
      <div>
        <SearchBar onSearchTermChange={performSearch.bind(this)}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList onVideoClick={this.onVideoClick.bind(this)} videos={this.state.videos} />
      </div>
    );
  }

  onVideoClick(video) {
    this.setState({selectedVideo:video});
  }

  performSearch(query) {
    YTSearch({term:query, key:API_KEY}, function(videos){
      // We get videos here!
      console.log(`Search for ${query}`);
      console.log(videos[0]);
      // console.log(this);

      this.setState({
        videos:videos,
        selectedVideo:videos[0]
      })
    }.bind(this));
  }
}

export default App;
