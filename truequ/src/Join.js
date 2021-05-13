import React from 'react';
import Home from './Home.js';
import ReactCodeInput from 'react-code-input';

function Join() {
  return (
    <div className="App">
      <Home />
      Enter a party code
      <div>
        <ReactCodeInput type="text" fields={4} />
      </div>
    </div>
  );
}

export default Join;
