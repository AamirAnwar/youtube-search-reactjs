import React, {Component} from 'react';

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
      this.props.onSearchTermChange(query);

    }
  }
  export default SearchBar;
