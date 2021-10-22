import { useState } from 'react';
import { convertTextToBoolean } from './services/convertTextToBoolean';
import './App.css';

function App() {
  let [userInput, setUserInput] = useState('');
  let [convertedText, setconvertedText] = useState('');

  function handleInputChange(e){
    setUserInput(e.target.value);
    setconvertedText(convertTextToBoolean(e.target.value));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setconvertedText(convertTextToBoolean(userInput));
  };

  function handleClear() {
    setUserInput('');
    setconvertedText('');
    console.clear();
  };

  return (
    <div className="App">
      <label>User input: </label>
      <input type="text" value={userInput} onChange={event => handleInputChange(event)} />
      <br />
      <button onClick={handleSubmit}>
        Submit
      </button>
      <button onClick={handleClear}>
        Clear
      </button>
      <br />
      <label>Converted text: </label> <input type="text" value={convertedText} readOnly={true} />
    </div>
  );
}

export default App;
