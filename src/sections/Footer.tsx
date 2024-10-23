import React from 'react'
import { pokemonTabs } from '../utils/Constants';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { useLocation } from 'react-router-dom';
import { setPokemonTab } from '../app/slices/AppSlice';

function Footer() {
  const {currentPokemonTab}=useAppSelector(({app})=>app);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const routes = [
    {
      name: pokemonTabs.description,
      value: "Description",
    },
    {
      name: pokemonTabs.evolution,
      value: "Evolution",
    },
    {
      name: pokemonTabs.locations,
      value: "Catching",
    },
    {
      name: pokemonTabs.moves,
      value: "Capable Moves",
    },
  ];
  return (
    <footer className="grid grid-cols-[5rem_auto_5rem] border-t-[0.5px] border-t-[rgba(255,255,255,0.203)]">
      <div className="flex justify-center items-center text-[#e21b5a]"></div>
      <div className="m-0 border-t-0 border-b-0 border-[0.5px] border-[rgba(255,255,255,0.203)]">
        {/* {location.pathname.includes("/pokemon") && (
          <ul className="grid grid-cols-4 h-full list-none">
            {routes.map((route) => (
              <li
                key={route.name}
                className={`${
                  currentPokemonTab === route.name
                    ? "active bg-accent-color"
                    : ""
                }text-white uppercase font-medium tracking-[0.2rem] flex justify-center items-center cursor-pointer transition ease-in-out duration-300 hover:bg-accent-color`}
                onClick={() => dispatch(setPokemonTab(route.name))}
              >
                {route.value}
              </li>
            ))}
          </ul>
        )} */}
      </div>
      <div className="flex justify-center items-center text-[#e21b5a]"></div>
    </footer>
  );
}

export default Footer