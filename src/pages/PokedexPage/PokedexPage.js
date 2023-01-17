import React, { useContext } from 'react'
import PokemonCard from '../../components/Card/PokemonCard'
import Header from '../../components/Header/Header'
import Modal from '../../components/Modal/Modal'
import { BASE_URL } from '../../constants/url'
import { GlobalContext } from '../../contexts/GlobalContext'
import { CardContainer, Main } from './PokedexPage.styled'

const PokedexPage = () => {
    const context = useContext(GlobalContext)
    const {pokedex, removeFromPokedex, isModalOpen} = context



    

    console.log(pokedex)
  return (
    <>
    {isModalOpen && <Modal/>}
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