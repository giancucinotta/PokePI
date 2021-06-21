import './App.css';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import AddPokemon from './components/AddPokemon/AddPokemon';
import PokemonDetail from './components/PokemonDetail/PokemonDetail';
import GetTypes from './components/Types/Types'
import PokemonByName from './components/PokemonSearch/PokemonSearch';
import Home from './components/Home/Home';
import PokemonHome from './components/Home/PokemonHome';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={LandingPage} />
      <Route path='/' component={GetTypes}/>
      <Route path='/' component={PokemonHome}/>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/home/:name' component={PokemonByName}/>
      <Route exact path='/home/detail/:id' component={PokemonDetail}/>
      <Route exact path='/addpokemon' component={AddPokemon}/>
    </div>
  );
};

export default App;
