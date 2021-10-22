import { useState } from 'react';
import './App.css';
function App() {
  let [input, setInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
  };

  function handleClear() {
    setInput('');
  };

  return (
    <div className="App">
      <label>
        Name: <br />
        <input type="text" value={input} onChange={event => setInput(event.target.value)} />
      </label>
      <br />
      <button onClick={handleSubmit}>
        Submit
      </button>
      <button onClick={handleClear}>
        Clear
      </button>
    </div>
  );
}

export default App;
