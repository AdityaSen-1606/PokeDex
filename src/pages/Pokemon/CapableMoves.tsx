import React from "react";
import { useAppSelector } from "../../app/hooks";

function CapableMoves() {
  const pokemonData = useAppSelector(
    ({ pokemon: { currentPokemon } }) => currentPokemon
  );
  return (
    <div className="w-full h-full overflow-y-scroll">
      <h1 className="text-white uppercase tracking-[0.1rem] p-4">Abilities</h1>
      <ul className="list-none grid grid-cols-4 auto-rows-[150px] gap-4 p-4 w-full overflow-y-scroll">
        {pokemonData?.pokemonAbilities.abilities.map((ability: string) => (
          <li
            className="h-full p-8 text-xl bg-[rgba(255,255,255,0.125)] rounded-lg shadow-[0px_5px_15px_rgba(0,0,0,0.35)] text-white flex justify-center items-center text-center cursor-pointer uppercase bg-[var(--accent-color)]"
            key={ability}
          >
            {ability}
          </li>
        ))}
      </ul>
      <h1 className="text-white uppercase tracking-[0.1rem] p-4">Moves</h1>
      <ul className="list-none grid grid-cols-4 auto-rows-[150px] gap-4 p-4 w-full overflow-y-scroll">
        {pokemonData?.pokemonAbilities.moves.map((ability: string) => (
          <li
            className="h-full p-8 text-xl bg-[rgba(255,255,255,0.125)] rounded-lg shadow-[0px_5px_15px_rgba(0,0,0,0.35)] text-white flex justify-center items-center text-center cursor-pointer uppercase"
            key={ability}
          >
            {ability}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CapableMoves;
