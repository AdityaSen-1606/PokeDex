import React, { useEffect } from "react";
import Wrapper from "../sections/Wrapper";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getInitialPokemonData } from "../app/reducers/getInitialPokemonData";
import { getPokemonsData } from "../app/reducers/getPokemonsData";
import PokemonCardGrid from "../components/PokemonCardGrid";
import { debounce } from "../utils/Debounce";

function PokeDex() {
  const dispatch = useAppDispatch();
  const { allPokemon, randomPokemons } = useAppSelector(
    ({ pokemon }) => pokemon
  );

  useEffect(() => {
    dispatch(getInitialPokemonData());
  }, [dispatch]);

  useEffect(() => {
    if (allPokemon) {
      const clonedPokemons = [...allPokemon];
      const randomPokemonsId = clonedPokemons
        .sort(() => Math.random() - Math.random())
        .slice(0, 20);
      dispatch(getPokemonsData(randomPokemonsId));
    }
  }, [allPokemon, dispatch]);

  const handleChange = debounce((value:string)=>getPokemon(value),300)

  const getPokemon = async (value:string)=>{
    if(value.length){
        const pokemons = allPokemon?.filter((pokemon)=>pokemon.name.includes(value.toLowerCase()));
        dispatch(getPokemonsData(pokemons!));
    }else{
        const clonedPokemons = [...allPokemon as []];
        const randomPokemonsId = clonedPokemons
          .sort(() => Math.random() - Math.random())
          .slice(0, 20);
        dispatch(getPokemonsData(randomPokemonsId));
    }
  }

  return (
    <>
      <div className="h-full w-full max-w-full text-white uppercase">
        <input
          type="text"
          placeholder="Search Pokemon"
          onChange={(e)=>handleChange(e.target.value)}
          className="bg-[rgba(255,255,255,0.125)] outline-none border-none shadow-[0_5px_15px_rgba(0,0,0,0.35)] w-full h-[9%] text-white text-[1.3rem] pl-4"
        />
        <PokemonCardGrid pokemons={randomPokemons!} />
      </div>
    </>
  );
}

export default Wrapper(PokeDex);
