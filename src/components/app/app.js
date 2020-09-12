import React from 'react';
import SearchBar from "../search-bar";
import SearchCard from "../search-card";
import SearchResults from "../search-results";

// CSS styles
import "./app.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: null
    }
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(query) {
    this.setState({ query });
  }

  render() {
    return (
      <main className="p-3">
        <SearchCard>
          <SearchBar onSearch={this.onSearch} />
          <SearchResults query={this.state.query} />
        </SearchCard>
      </main>
    );
  }
};

export default App;
