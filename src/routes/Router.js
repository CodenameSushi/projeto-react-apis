import axios from "axios";

import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import HomePage from "../pages/HomePage/HomePage";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import PokedexPage from "../pages/PokedexPage/PokedexPage";

const Router = () => {
  const [pokelist, setPokelist] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage pokelist={pokelist} pokedex={pokedex} />}
        />
        <Route 
        path="/pokedex"
        element={<PokedexPage pokedex={pokedex}/>}
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
