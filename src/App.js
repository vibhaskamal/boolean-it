import { useState } from 'react';
import { convertTextToBoolean } from './services/convertTextToBoolean';
import './App.css';
import Button from '@mui/material/Button';

const placeholderText = 'E.g. a and b or c not d';

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
      <input type="text" placeholder={placeholderText} value={userInput} onChange={event => handleInputChange(event)} />
      <br />
      <Button variant="outlined" onClick={handleSubmit}>Submit</Button>
      <Button variant="outlined" onClick={handleClear}>Clear</Button>
      <br />
      <label>Converted text: </label> <input type="text" value={convertedText} readOnly={true} />
    </div>
  );
}

export default App;
