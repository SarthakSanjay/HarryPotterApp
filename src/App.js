// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import GetSpells from './components/GetSpells';
import CharactersInformations  from './components/CharactersInformations';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

function App() {
 return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
      <Route exact path='/' element={<CharactersInformations key='1' category='' />} />
      <Route exact path='/students' element={<CharactersInformations key='2' category='students' />} />
      <Route exact path='/staff' element={<CharactersInformations key='3' category='staff' />} />
      {/* for house */}
      <Route exact path='/house/gryffindor' element={<CharactersInformations key='4' category='house/gryffindor' />} />
      <Route exact path='/house/slytherin' element={<CharactersInformations key='5' category='house/slytherin' />} />
      <Route exact path='/house/hufflepuff' element={<CharactersInformations key='6' category='house/hufflepuff' />} />
      <Route exact path='/house/ravenclaw' element={<CharactersInformations key='7' category='house/ravenclaw' />} />
      <Route exact path='/spells' element={<GetSpells key='8' category='spells' />} />
      </Routes>
      </Router>
      <h4 style={{color:"white",
      margin:"0px"}}>Made with ✨magic✨ by Sarthak Sanjay</h4>
    </div>
  );
}

export default App;
