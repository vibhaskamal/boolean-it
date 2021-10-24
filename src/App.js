import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import {TextToBoolean} from './components/textToBoolean';
import './App.css';

function App() {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" component="div">
              <Link href="#" underline="none" style={{ color: 'white' }}>
                Boolean-it
              </Link>
            </Typography>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Typography variant="h6" color="inherit" component="div">
              <Link href="#" underline="none" style={{ color: 'white' }}>
                Instructions
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <TextToBoolean />
    </div>
  );
}

export default App;



// Potential additions:
// Provide option to switch between text field and text area
