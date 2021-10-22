import { useState } from 'react';
import { convertTextToBoolean } from './services/convertTextToBoolean';
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const placeholderText = 'E.g. a and b or c not d';

function App() {
  let [userInput, setUserInput] = useState('');
  let [convertedText, setconvertedText] = useState('');

  function handleInputChange(e) {
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
      <label>Enter text</label><br /><br />
      <TextField
        id="outlined-basic"
        label={placeholderText}
        value={userInput}
        onChange={event => handleInputChange(event)}
        variant="outlined" />
      <br /><br />
      <div>
        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant="contained" onClick={handleClear}>Clear</Button>
      </div>
      <br />
      <label>Converted text</label><br /><br />
      <TextField
        id="outlined-basic"
        value={convertedText}
        readOnly={true}
        variant="outlined" />
    </div>
  );
}

export default App;

// Potential additions:
// Provide option to switch between text field and text area
