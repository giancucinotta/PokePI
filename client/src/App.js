import './App.css';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import AddPokemon from './components/AddPokemon/AddPokemon';
import PokemonDetail from './components/PokemonDetail/PokemonDetail';
import GetTypes from './components/Types/Types'
import PokemonByName from './components/Search/Search';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={LandingPage} />
      <Route path='/' component={GetTypes}/>
      <Route exact path='/addpokemon' component={AddPokemon} />
      <Route exact path='/home' component={Home}/>
      <Route exact path='/pokemon/:name' component={PokemonByName}/>
      <Route exact path='/pokemons/:id' component={PokemonDetail}/>
    </div>
  );
};

export default App;
