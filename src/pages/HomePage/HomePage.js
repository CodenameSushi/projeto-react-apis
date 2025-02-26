import React, { useContext, useEffect } from 'react'
import PokemonCard from '../../components/Card/PokemonCard'
import Header from '../../components/Header/Header'
import Modal from '../../components/Modal/Modal'
import { GlobalContext } from '../../contexts/GlobalContext'
import { CardContainer, Main } from './HomePage.styled'

const HomePage = () => {

    const context = useContext(GlobalContext)


    const {addToPokedex, removeFromPokedex, filteredPokelist, isModalOpen} = context




    

  return (
    <>
    {isModalOpen && <Modal/>}
    <Header/>
    <Main>
    <h1>Todos Pokémons</h1>
    <CardContainer>
        {filteredPokelist().map((pokemon) =>(
            <PokemonCard key={pokemon.name} pokemonUrl={pokemon.url} addToPokedex={addToPokedex} removeFromPokedex={removeFromPokedex} />
        ))}

    </CardContainer>
    </Main>
    </>
  )
}

export default HomePage