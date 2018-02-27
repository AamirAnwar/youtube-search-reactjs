import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchVideos} from '../actions';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {query:''};
  }

  render() {
    return (
      <div className="search_bar">
        <input
          // This line makes this component a controlled component
          value = {this.state.query}
          onChange={(event) => this.onInputChange(event.target.value)}
          type="text"/>
        </div>
      );
    }

    onInputChange(query) {
      // Set state
      this.setState({query});
      // Hit youtube API
      this.props.fetchVideos(query);

    }
  }


  export default connect(null, {fetchVideos})(SearchBar);
