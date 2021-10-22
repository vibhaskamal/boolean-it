import { useState } from 'react';
import './App.css';
function App() {
  let [userInput, setUserInput] = useState('');
  let [displayText, setDisplayText] = useState('');
  let [convertedText, setconvertedText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(userInput);
    setDisplayText(userInput);
    let str = userInput.length;
    console.log(str);
    convertToBoolean(userInput);
  };

  function handleClear() {
    setUserInput('');
    setDisplayText('');
    console.clear();
  };

  function convertToBoolean(text) {
    text = text.toLowerCase();
    let len = text.length;
    // for (let i = 0; i < len; i++){
    //   console.log("char: ", text.charAt(i));
    // }
    // read the text
    // separate text into array
    // separate and, or, not
    // replace and, or, not with their symbols

    let i = 0;
    while (i < len) {
      if (text.charAt(i) === ' ') {
        // Checking for 'and'
        if ((i + 1) < len && text.charAt(i + 1) === 'a' && (i + 2) < len && text.charAt(i + 2) === 'n'
          && (i + 3) < len && text.charAt(i + 3) === 'd' && (i + 4) < len && text.charAt(i + 4) === ' ') {
          console.log('and');
        }
        else if ((i + 1) < len && text.charAt(i + 1) === 'n' && (i + 2) < len && text.charAt(i + 2) === 'o'
          && (i + 3) < len && text.charAt(i + 3) === 't' && (i + 4) < len && text.charAt(i + 4) === ' ') {
          console.log('not');
        }
      };
      i++;
    }
  }

  return (
    <div className="App">
      <label>User input: </label>
      <input type="text" value={userInput} onChange={event => setUserInput(event.target.value)} />

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
