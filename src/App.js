import Router from "./routes/Router";
import { ChakraProvider } from "@chakra-ui/react";
import { GlobalStyle } from "./GlobalStyles";
import { GlobalContext } from "./contexts/GlobalContext";
import { useState, useEffect } from "react";
import { BASE_URL } from "./constants/url";
import axios from "axios";

function App() {

  const [pokelist, setPokelist] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState([]);


  const addToPokedex = (pokemonToAdd) => {
    const isAlreadyOnPokedex = pokedex.find(
        (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
    )
        if(!isAlreadyOnPokedex) {
            const newPokedex = [...pokedex, pokemonToAdd]
            setPokedex(newPokedex)
            const pokedexStringfy = JSON.stringify(newPokedex)
            window.localStorage.setItem('pokedex', pokedexStringfy)
            console.log("Pokemon adicionado")
            console.log(pokedex)
        }
  }

  const loadPokedexFromLocal = () => {
    if(window.localStorage.getItem('pokedex')){
      const pokedexParse = JSON.parse(window.localStorage.getItem('pokedex'))
      setPokedex(pokedexParse)
    }
  }



  const removeFromPokedex = (pokemonToRemove) => {
    const newPokedex = pokedex.filter(
        (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
    )
        setPokedex(newPokedex)
        const newPokedexStringfy = JSON.stringify(newPokedex)
        window.localStorage.setItem('pokedex', newPokedexStringfy)

  }

  const filteredPokelist = () =>
    pokelist.filter(
      (pokemonInList) =>
        !pokedex.find(
          (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
        )
    );

  useEffect(()=> {
    fetchPokelist()
  },[])

  useEffect(()=>{
    loadPokedexFromLocal()
  },[])

  const fetchPokelist = async () => {
    try {
        const response = await axios.get(BASE_URL);
        setPokelist(response.data.results)
    } catch (error) {
        console.log("Erro ao busca lista de pokemons")
        console.log(error.response)
    }
  }

  


  const context = {
    pokelist,
    setPokelist,
    pokedex,
    setPokedex,
    pokemonDetails,
    setPokemonDetails,
    addToPokedex,
    removeFromPokedex,
    filteredPokelist
  }

  return (
    <GlobalContext.Provider value={context}>
    <ChakraProvider>
      <GlobalStyle/>
      <Router/>
      </ChakraProvider>
      </GlobalContext.Provider>
  );
}

export default App;
