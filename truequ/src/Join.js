import React from 'react';
import Home from './Home.js';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import ReactCodeInput from 'react-code-input';

function Join() {
  const history = useHistory();
  const [code, setCode] = useState();
  const inputChange = (props) => {
    setCode(props);
  };
  const joinParty = () => {
    history.push('/party/' + code);
    window.location.reload(false);
  };
  return (
    <div className="App">
      <Home />
      Enter a party code
      <div>
        <ReactCodeInput onChange={inputChange} type="text" fields={4} />
      </div>
      <button onClick={joinParty}>Join Party</button>
    </div>
  );
}

export default Join;
