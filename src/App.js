import React from 'react';
import './App.css';
import HomePage from "./components/HomePage";


const App  = () => {
    return (
      <div className="App">
        <div className="headline">
          <h1 className={"text_ff671d"}>My Cricket Score</h1>
        </div>
        <div className="pageComponents">
            <HomePage />
        </div>
      </div>
    );
};

export default App;
