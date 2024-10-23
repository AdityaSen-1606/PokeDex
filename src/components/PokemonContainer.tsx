import React from 'react'

function PokemonContainer({image}:{image:string}) {
  return (
    <div className="flex mt-12 bg-red-500 justify-center">
      <div className="bg-orange-500 flex justify-center items-center h-[24rem] w-[24rem]  rounded-[0.2rem] border-[0.2rem] border-[var(--accent-color)] rounded-[50rem] relative">
        <div className="bg-green-500 h-[20rem] w-[20rem] border-[0.3rem] border-[var(--accent-color)] rounded-[40rem] flex items-center justify-center">
          <img
            src={image}
            alt="pokemon"
            className="max-w-full h-[17rem] z-100 block"
          />
        </div>
        <div className="flex gap-12 absolute">
          <div className="h-[28rem] w-[0.3rem] bg-[var(--accent-color)] rotate-45 line-1"></div>
          <div className="h-[28rem] w-[0.3rem] bg-[var(--accent-color)] rotate-45 line-2"></div>
        </div>
      </div>
    </div>
  );
}

export default PokemonContainer