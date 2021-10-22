import { useState } from 'react';
import './App.css';
function App() {
  let [userInput, setUserInput] = useState('');
  let [displayText, setDisplayText] = useState('');
  let [convertedText, setconvertedText] = useState('');

  function handleInputChange(e){
    setUserInput(e.target.value);
    convertToBoolean(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setDisplayText(userInput);
    convertToBoolean(userInput);
  };

  function handleClear() {
    setUserInput('');
    setDisplayText('');
    setconvertedText('');
    console.clear();
  };

  function convertToBoolean(text) {
    text = text.toLowerCase();
    let len = text.length;
    let i = 0;
    while (i < len) {
      if (text.charAt(i) === ' ') {
        if ((i + 1) < len && text.charAt(i + 1) === 'a' && (i + 2) < len && text.charAt(i + 2) === 'n'
          && (i + 3) < len && text.charAt(i + 3) === 'd' && (i + 4) < len && text.charAt(i + 4) === ' ') {
          text = text.slice(0, i) + ' ∧' + text.slice(i + 4);
        }
        else if ((i + 1) < len && text.charAt(i + 1) === 'n' && (i + 2) < len && text.charAt(i + 2) === 'o'
          && (i + 3) < len && text.charAt(i + 3) === 't' && (i + 4) < len && text.charAt(i + 4) === ' ') {
          text = text.slice(0, i) + ' ¬' + text.slice(i + 4);
        }
        else if ((i + 1) < len && text.charAt(i + 1) === 'o' && (i + 2) < len && text.charAt(i + 2) === 'r'
          && (i + 3) < len && text.charAt(i + 3) === ' ') {
          text = text.slice(0, i) + ' ∨' + text.slice(i + 3);
        }
      }
      i++;
    }
    setconvertedText(text);
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
      <label>Display text: </label> <input type="text" value={displayText} readOnly={true} />
      <br />
      <label>Converted text: </label> <input type="text" value={convertedText} readOnly={true} />
    </div>
  );
}

export default App;
