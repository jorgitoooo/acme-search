import React from 'react';

// Components
import SearchBar from "../search-bar";
import SearchCard from "../search-card";
import SearchResults from "../search-results";
import SearchResultsLinks from "../search-results-links";
import ButtonScroll from "../button-scroll";

// Services
import services from "../../services";

// CSS styles
import "./app.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      results: null,
      scrollButtonActive: false
    }
    this.onSearch = this.onSearch.bind(this);
    this.ref = React.createRef();

    services.analytics.init();
    services.analytics.externalLibLoadTime();
  }

  componentDidMount() {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY >= 500) {
        this.setState({ 
          scrollButtonActive: true
        });
      } else {
          this.setState({ 
            scrollButtonActive: false
          });
      }
    });

    // Tracks the time it takes our app to mount
    services.analytics.appMountTime();
  }

  componentWillUnmount() {
    // Tracks the time a user has spent on the app
    services.analytics.appUsageTime();
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
      <main ref={this.ref}>
        <SearchCard>
          <SearchBar onSearch={this.onSearch} />
          <SearchResultsLinks results={this.state.results} />
          <SearchResults results={this.state.results} />
        </SearchCard>
        <ButtonScroll ref={this.ref} active={this.state.scrollButtonActive} />
      </main>
    );
  }
};

export default App;
