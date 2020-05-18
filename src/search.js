import React, { useEffect } from 'react';
import './App.css';


function Search(props) {


  return (  
        <div className="app">
          <div className="input">
            <button onClick={props.handleClick}>What shall i cook today?</button>
          </div>
        </div>
    );
}

export default Search;