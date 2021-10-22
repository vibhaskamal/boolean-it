import { useState } from 'react';
import { convertTextToBoolean } from './services/convertTextToBoolean';
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from '@mui/material/Typography';

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
      {/*  
      <Typography variant="h5" gutterBottom component="div">
        Enter text
      </Typography>
      <br />
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
      <Typography variant="h5" gutterBottom component="div">
        Converted text
      </Typography>
      <br />
      <TextField
        id="outlined-basic"
        value={convertedText}
        readOnly={true}
        variant="outlined" />
        */}
      <Grid container spacing={0}>
        <Grid item xs={5}>
          <Typography variant="h5" gutterBottom component="div">
            Enter text
          </Typography>
          <br />
          <TextField
            sx={{ width: '50ch' }}
            id="outlined-basic"
            label={placeholderText}
            value={userInput}
            onChange={event => handleInputChange(event)}
            variant="outlined" />
        </Grid>
        <Grid item xs={2} style={{ 'margin-top': '50px' }}>
          <Stack spacing={2}>
            <Button variant="contained" onClick={handleSubmit}>Submit</Button>
            <Button variant="contained" onClick={handleClear}>Clear</Button>
          </Stack>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="h5" gutterBottom component="div">
            Converted text
          </Typography>
          <br />
          <TextField
            sx={{ width: '50ch' }}
            id="outlined-basic"
            value={convertedText}
            readOnly={true}
            variant="outlined" />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

// Potential additions:
// Provide option to switch between text field and text area
