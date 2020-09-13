import React from 'react';

// Components
import SearchBar from "../search-bar";
import SearchCard from "../search-card";
import SearchResults from "../search-results";

// Services
import services from "../../services";

// Utilities
import utils from "../../utils";

// CSS styles
import "./app.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = { results: null }
    this.onSearch = this.onSearch.bind(this);

    utils.analytics.init(process.env.NODE_ENV === "development");
  }

  onSearch(query) {
    if (query) {
      this.setState({
        results: services.main.getSearchResults(query)
      });
    }
  }

  render() {
    return (
      <main className="p-3">
        <SearchCard>
          <SearchBar onSearch={this.onSearch} />
          <SearchResults results={this.state.results} />
        </SearchCard>
      </main>
    );
  }
};

export default App;
