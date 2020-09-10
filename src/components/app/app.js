import React from 'react';
import SearchResults from "../search-results";
import SearchBar from "../search-bar";
import SearchCard from "../search-card";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    }
    this.onSearch = this.onSearch.bind(this);

    console.log("constructor");
  }

  onSearch(query) {
    this.setState({ query });
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    return (
      <main className="text-center p-3">
        <SearchCard>
          <SearchBar onSearch={this.onSearch} />
          <SearchResults query={this.state.query} />
        </SearchCard>
      </main>
    );
  }
};

export default App;
