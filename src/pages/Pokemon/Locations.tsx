import React from "react";
import { useAppSelector } from "../../app/hooks";

function Locations() {
  const pokemonData = useAppSelector(
    ({ pokemon: { currentPokemon } }) => currentPokemon
  );
  return (
    <div className="h-full w-full">
      <ul className="list-none grid grid-cols-4 auto-rows-[150px] gap-4 p-4 w-full overflow-y-scroll h-full">
        {pokemonData?.encounters.map((encounter: string) => (
          <li
            key={encounter}
            className="h-full p-8 text-xl bg-[rgba(255,255,255,0.125)] rounded-xl shadow-[0px_5px_15px_rgba(0,0,0,0.35)] text-white flex justify-center items-center text-center cursor-pointer"
          >
            {encounter}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Locations;
