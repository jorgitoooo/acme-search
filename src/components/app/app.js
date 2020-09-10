import React from 'react';
import SearchBar from "../search-bar";
import SearchCard from "../search-card";

// import './app.css';

function App() {
  return (
    <div className="text-center p-3">
      <SearchCard>
        <SearchBar />
        {/* <Results /> */}
      </SearchCard>
    </div>
  );
}

export default App;
