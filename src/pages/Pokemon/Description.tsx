import React from "react";
import { useAppSelector } from "../../app/hooks";
import Info from "../../components/Info";
import PokemonContainer from "../../components/PokemonContainer";

function Description() {
  const pokemonData = useAppSelector(
    ({ pokemon: { currentPokemon } }) => currentPokemon
  );
  return (
    <>
      <Info data={pokemonData} />
      {pokemonData && <PokemonContainer image={pokemonData.image} />}
    </>
  );
}

export default Description;
