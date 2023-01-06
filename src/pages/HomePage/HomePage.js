import React from 'react'
import PokemonCard from '../../components/Card/PokemonCard'
import Header from '../../components/Header/Header'
import { CardContainer, Main } from './HomePage.styled'

const HomePage = (props) => {

    const {pokelist, pokedex, addToPokedex, removeFromPokedex} = props

    console.log(pokedex)

    const filteredPokelist = () =>
    pokelist.filter(
      (pokemonInList) =>
        !pokedex.find(
          (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
        )
    );

  return (
    <>
    <Header/>
    <Main>
    <h1>Todos Pokémons</h1>
    <CardContainer>
        {filteredPokelist().map((pokemon) =>(
            <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url} addToPokedex={addToPokedex} removeFromPokedex={removeFromPokedex} />
        ))}

    </CardContainer>
    </Main>
    </>
  )
}

export default HomePage