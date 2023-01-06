import axios from "axios";

import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BASE_URL } from "../constants/url";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import HomePage from "../pages/HomePage/HomePage";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import PokedexPage from "../pages/PokedexPage/PokedexPage";

const Router = () => {
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
            console.log("Pokemon adicionado")
            console.log(pokedex)
        }
  }

  const removeFromPokedex = (pokemonToRemove) => {
    const newPokedex = pokedex.filter(
        (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
    )
        setPokedex(newPokedex)
  }

  useEffect(()=> {
    fetchPokelist()
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

  console.log(pokelist)

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage pokelist={pokelist} pokedex={pokedex} addToPokedex={addToPokedex} removeFromPokedex={removeFromPokedex} />}
        />
        <Route 
        path="/pokedex"
        element={<PokedexPage pokedex={pokedex} removeFromPokedex={removeFromPokedex}/>}
        />
        <Route 
        path="/details"
        element={<DetailsPage pokemonDetails={pokemonDetails} />}
        />
        <Route
        path="*"
        element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
