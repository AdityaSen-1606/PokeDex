import { pokemonStatType, pokemonTypeInterface, userPokemonType } from '../utils/Types';
import { FaPlus } from 'react-icons/fa';
import { pokemonTypes } from '../utils/PokemonTypes';
import { useAppDispatch } from '../app/hooks';
import { removeFromCompare } from '../app/slices/PokemonSlice';
import { useNavigate } from 'react-router-dom';

function CompareContainer({ pokemon = undefined, isEmpty = false }:{
    pokemon?:userPokemonType,
    isEmpty?:boolean
}) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const createStatsArray=(types:pokemonTypeInterface[],statType:pokemonStatType)=>{
    const statsArray:{name:string, image:string}[] =[];
    const statsSet = new Set<string>();
    types.forEach((type:pokemonTypeInterface)=>{
      const key = Object.keys(type)[0];
      type[key][statType].forEach((stat:string)=>{
        if(!statsSet.has(stat)){
          //@ts-ignore
          statsArray.push({name:stat,image:pokemonTypes[stat].image });
          statsSet.add(stat);
        }
      })
    });
    return statsArray;
  }
  const getStats = () => {
    return (
      <>
        <div className="grid grid-cols-[25%_75%] gap-8 w-full">
          <h4 className="flex justify-end items-center">Strength</h4>
          <div className="flex gap-4 w-full flex-wrap">
            {createStatsArray(pokemon?.types!, "strength").map(
              (stat: { image: string }) => {
                return (
                  <div className="flex flex-col justify-center items-center gap-4">
                    <img
                      src={stat.image}
                      alt="pokemon-type"
                      className="h-12 w-12"
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>
        <div className="grid grid-cols-[25%_75%] gap-8 w-full">
          <h4 className="flex justify-end items-center">Resistance</h4>
          <div className="flex gap-4 w-full flex-wrap">
            {createStatsArray(pokemon?.types!, "resistance").map(
              (stat: { image: string }) => {
                return (
                  <div className="flex flex-col justify-center items-center gap-4">
                    <img
                      src={stat.image}
                      alt="pokemon-type"
                      className="h-12 w-12"
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>
        <div className="grid grid-cols-[25%_75%] gap-8 w-full">
          <h4 className="flex justify-end items-center">Vulnerable</h4>
          <div className="flex gap-4 w-full flex-wrap">
            {createStatsArray(pokemon?.types!, "vulnerable").map(
              (stat: { image: string }) => {
                return (
                  <div className="flex flex-col justify-center items-center gap-4">
                    <img
                      src={stat.image}
                      alt="pokemon-type"
                      className="h-12 w-12"
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>
        <div className="grid grid-cols-[25%_75%] gap-8 w-full">
          <h4 className="flex justify-end items-center">Weakness</h4>
          <div className="flex gap-4 w-full flex-wrap">
            {createStatsArray(pokemon?.types!, "weakness").map(
              (stat: { image: string }) => {
                return (
                  <div className="flex flex-col justify-center items-center gap-4">
                    <img
                      src={stat.image}
                      alt="pokemon-type"
                      className="h-12 w-12"
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="h-full w-full">
      {isEmpty && (
        <div className="flex flex-col justify-center items-center gap-12 h-full">
          <button className="cursor-pointer rounded-full flex justify-center items-center p-8 bg-[var(--accent-color)] border-none">
            <FaPlus className="text-[5rem] text-white" />
          </button>
          <h3 className="text-white uppercase tracking-[0.3rem]">
            Add Pokemon to Compare
          </h3>
        </div>
      )}
      {pokemon && (
        <div className="h-full grid grid-rows-[90%_10%] grid-cols-1">
          <div className="text-white uppercase tracking-[0.1rem] w-full grid grid-rows-[40%_60%]">
            <div className="flex flex-col justify-center items-center">
              <h3>{pokemon?.name}</h3>
              <img src={pokemon?.image} alt="pokemon" className="h-[10rem]" />
            </div>
            <div className="w-full flex flex-col gap-4 items-start max-h-full overflow-y-scroll overflow-x-hidden pb-4">
              <div className="grid grid-cols-[25%_75%] gap-8 w-full">
                <h4 className="flex justify-end items-center">Type</h4>
                <div className="flex gap-4 w-full flex-wrap">
                  {pokemon.types.map((type: pokemonTypeInterface) => {
                    const keys = Object.keys(type);
                    return (
                      <div className="flex flex-col justify-center items-center gap-4">
                        <img
                          src={type[keys[0]].image}
                          alt="pokemon type "
                          className="h-12 w-12"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              {getStats()}
            </div>
          </div>
          <div className="grid grid-cols-2 w-full h-full">
            <button className="text-[1.2rem] font-normal uppercase text-[rgb(228,228,228)] tracking-[0.1rem] cursor-pointer border border-[rgba(255,255,255,0.647)] bg-transparent transition ease-in-out duration-300 hover:bg-[#27af0f] hover:border-[#27af0f]" onClick={()=>navigate(`/pokemon/${pokemon.id}`)}>
              View
            </button>
            <button className="text-[1.2rem] font-normal uppercase text-[rgb(228,228,228)] tracking-[0.1rem] cursor-pointer border border-[rgba(255,255,255,0.647)] bg-transparent transition ease-in-out duration-300 hover:bg-[#e21b5a] hover:border-[#e21b5a]" onClick={()=>dispatch(removeFromCompare({id:pokemon.id}))}>
              Remove
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CompareContainer