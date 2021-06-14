import './App.css';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import AddPokemon from './components/AddPokemon/AddPokemon';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/addpokemon' component={AddPokemon} />
      <Route exact path='/home' />
      <Route exact path='/pokemondetail' />
    </div>
  );
};

export default App;
