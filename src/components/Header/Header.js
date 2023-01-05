import { Button, Link } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import React from "react";
import Logo from "../../assets/PokeLogo.png";
import { Container } from "./Header.styled";
import { useLocation, useNavigate } from "react-router-dom";
import { goToPokedexPage } from "../../routes/coordinator";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const renderRightHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <Button
            colorScheme="blue"
            width="287px"
            height="74px"
            fontSize="24px"
            lineHeight="36px"
            onClick={() => goToPokedexPage(navigate)}
          >
            Pokédex
          </Button>
        );

      case "/pokedex":
        return <></>;

      case "/details":
        return (
          <Button colorScheme="red" width="226px" height="57px" fontSize="24px">
            Excluir da Pokédex
          </Button>
        );

      default:
    }
  };

  const renderLeftHeader = () => {
    switch (location.pathname) {
      case "/":
        return <></>;

      case "/pokedex":
        return (
          <Link
            href="/"
            textDecoration="underline"
            fontSize="24px"
            lineHeight="36px"
          >
            <ChevronLeftIcon />
            Todos Pokemons
          </Link>
        );
      case "/details":
        return (
          <Link
            href="/"
            textDecoration="underline"
            fontSize="24px"
            lineHeight="36px"
          >
            <ChevronLeftIcon />
            Todos Pokemons
          </Link>
        );
      default:
    }
  };

  return (
    <Container>
      <div className="header-div" id="left">
        {renderLeftHeader()}
      </div>
      <div className="header-div" id="center">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="header-div" id="right">
        {renderRightHeader()}
      </div>
    </Container>
  );
};

export default Header;
