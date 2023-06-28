import { useState } from 'react'
import './App.css'
import Axios from "axios";



function App() {
  const [count, setCount] = useState(0)

  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState({});

  const searchPokemon = () => {
    Axios.get('https://pokeapi.co/api/v2/pokemon/charmander').then((response) =>
    console.log(response)
    );
  }
  searchPokemon();
  return (
    <>
      <div>
        
      </div>
      
    </>
  )
}

export default App
