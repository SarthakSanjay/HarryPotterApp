// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CharactersInformations from './components/CharactersInformations';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

function App() {




  return (
    <div className="App">
    <Router>
      <Navbar />
      
      <Routes>
      <Route exact path='/' element={<CharactersInformations />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
