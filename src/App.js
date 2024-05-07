// ** for this project we have made account in Pixabay  <--- https://pixabay.com
// Also we are using class based components in this project <-- like: Search.js, ImageResults.js
// use Rafce

import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Navbar from './components/navbar/NavBar'
import Search from './components/search/Search'

function App() {
  return (
    <MuiThemeProvider>

      <div>
      <Navbar />
      <Search />
      </div>

    </MuiThemeProvider>
    
  );
}

export default App;
