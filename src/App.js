import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const addCounter = () => {
    if (counter < 20) {
      setCounter(counter + 1);
      setErrorMessage(''); 
    } else {
      setErrorMessage('Cannot exceed limit of 20');
      setTimeout(() => {
        setErrorMessage('');
      }, 1000);
    }
  };

  const removeCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      setErrorMessage(''); 
    } else {
      setErrorMessage('Cannot go below limit of 0');
      setTimeout(() => {
        setErrorMessage('');
      }, 1000);
    }
  };

  return (
    <div className="App">
      <header>React Counter Project</header>
      <button onClick={addCounter}>Add</button>
      <input type="text" value={counter} readOnly />      
      <button onClick={removeCounter}>Remove</button>
      {errorMessage && (
        <p className="error">{errorMessage}</p>
      )}
    </div>
  );
}

export default App;
