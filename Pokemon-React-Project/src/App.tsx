import { useState } from 'react'
import './App.css'
import { getAllPokemon, getPokemon } from './data/Pokemon';



function App() {
  


  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [pokeURL, setPokeURL] = useState("https://pokeapi.co/api/v2/pokemon");


  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(pokeURL);
    }
  })
  
  return (
    <>
      <div>
        
      </div>
      
    </>
  )
}

export default App
