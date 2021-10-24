import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { convertTextToBoolean } from '../services/convertTextToBoolean';

const placeholderText = 'E.g. a and b or c not d';
const convertedPlaceholderText = 'Converted boolean text would be displayed here';

export function TextToBoolean() {
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
    <Grid container spacing={0} style={{ 'marginTop': '40px', 'textAlign': 'center' }}>
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
      <Grid item xs={2} style={{ 'marginTop': '50px' }}>
        <Stack spacing={2}>
          <Button variant="contained" onClick={handleSubmit}>Convert</Button>
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
          label={convertedPlaceholderText}
          value={convertedText}
          readOnly={true}
          variant="outlined" />
      </Grid>
    </Grid>
  );
}