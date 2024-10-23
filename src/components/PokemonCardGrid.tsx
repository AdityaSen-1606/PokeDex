import React from 'react'
import { pokemonTypeInterface, userPokemonType } from '../utils/Types'
import { IoGitCompare } from 'react-icons/io5';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaPlus, FaTrash } from 'react-icons/fa';
import { useAppDispatch } from '../app/hooks';
import { addToCompare, setCurrentPokemon } from '../app/slices/PokemonSlice';
import { setPokemonTab, setToast } from '../app/slices/AppSlice';
import { pokemonTabs } from '../utils/Constants';

function PokemonCardGrid({pokemons}:{pokemons:userPokemonType[]}) {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

  return (
    <div className="max-h-[80vh] overflow-y-scroll">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-16 m-16 mt-8">
        {pokemons &&
          pokemons.length > 0 &&
          pokemons?.map((data: userPokemonType) => {
            return (
              <div
                key={data.id}
                className="w-[250px] flex flex-col justify-center items-center bg-[rgba(255,255,255,0.125)] rounded-xl p-4 shadow-[0_5px_15px_rgba(0,0,0,0.35)] relative"
              >
                <div className="absolute top-[0.7rem] left-[0.8rem] text-[1rem] cursor-pointer transition ease-in-out duration-300 hover:text-[2rem]">
                  {location.pathname.includes("/pokemon") ? (
                    <FaPlus className="text-[#27af0f]" />
                  ) : location.pathname.includes("/search") ? (
                    <FaPlus className="text-[#27af0f]" />
                  ) : (
                    <FaTrash className="text-[#e21b5a]" />
                  )}
                </div>
                <div className="transition ease-in-out duration-300 hover:text-[2rem] absolute top-[0.7rem] right-[0.8rem] text-[1rem] cursor-pointer">
                  <IoGitCompare
                    onClick={() => {
                      dispatch(addToCompare(data));
                      dispatch(setToast("Pokemon added to Compare Queue"));
                    }}
                  />
                </div>
                <h3 className="text-center cursor-pointer mt-4">{data.name}</h3>
                <img
                  src={data.image}
                  alt="pokemon"
                  loading="lazy"
                  className="h-[10rem] drop-shadow-[20px_10px_10px_#14121281] cursor-pointer"
                  onClick={() => {
                    dispatch(setPokemonTab(pokemonTabs.description));
                    dispatch(setCurrentPokemon(undefined));
                    navigate(`/pokemon/${data.id}`)}}
                />
                <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(60px,1fr))] gap-4 mt-2">
                  {data.types.map(
                    (type: pokemonTypeInterface, index: number) => {
                      const keys = Object.keys(type);
                      return (
                        <div
                          key={index}
                          className="flex flex-col justify-center items-center gap-1"
                        >
                          <img
                            src={type[keys[0]].image}
                            alt="pokemon type"
                            loading="lazy"
                            className="h-[2rem]"
                          />
                          <h6 className="text-smaller">{keys[0]}</h6>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default PokemonCardGrid