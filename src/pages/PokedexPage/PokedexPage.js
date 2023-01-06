import React from 'react'
import PokemonCard from '../../components/Card/PokemonCard'
import Header from '../../components/Header/Header'
import { BASE_URL } from '../../constants/url'
import { CardContainer, Main } from './PokedexPage.styled'

const PokedexPage = (props) => {

    const {pokedex, removeFromPokedex} = props

    console.log(pokedex)
  return (
    <>
    <Header/>
    <Main>
    <h1>Meus Pokémons</h1>
    <CardContainer>
    {pokedex.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemonUrl={`${BASE_URL}/${pokemon.name}`} removeFromPokedex={removeFromPokedex} />
    )) }
    </CardContainer>
    </Main>
    </>
  )
}

export default PokedexPage