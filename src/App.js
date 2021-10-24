import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink
} from "react-router-dom";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { TextToBoolean } from './components/textToBoolean';
import { Instructions } from './components/instructions';
import './App.css';



function App() {
  return (
    <Router>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar variant="dense">
              <Typography variant="h6" color="inherit" component="div">
                <RouterLink to="/" style={{ color: 'white', 'textDecoration': 'none' }} underline="none">Boolean-it</RouterLink>
              </Typography>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Typography variant="h6" color="inherit" component="div">
                <RouterLink to="/instructions" style={{ color: 'white', 'textDecoration': 'none' }} underline="none">Instructions</RouterLink>
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
        <Switch style={{ 'marginTop': '40px' }}>
          <Route exact={true} path="/">
            <TextToBoolean />
          </Route>
          <Route path="/instructions">
            <Instructions />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;



// Potential additions:
// Provide option to switch between text field and text area
