import React from 'react';
import ReactDOM from 'react-dom';
import API from './api';


const App = (props) => {
  return (
    <div>
      <h1>Hello World!</h1>
      <API />
      <div style={{height: 100, width: 100}}>
      </div>
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById("root"));
