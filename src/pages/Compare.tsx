import React from 'react'
import Wrapper from '../sections/Wrapper'
import { useAppSelector } from '../app/hooks'
import CompareContainer from '../components/CompareContainer.tsx';

function Compare() {
  const {compareQueue} = useAppSelector(({pokemon})=>pokemon);
  return (
    <div className="grid grid-cols-2 gap-4 h-full w-full p-4">
      <CompareContainer
        pokemon={compareQueue[0]}
        isEmpty={compareQueue.length < 1}
      />
      <CompareContainer
        pokemon={compareQueue[1]}
        isEmpty={compareQueue.length < 2}
      />
    </div>
  );
}

export default Wrapper(Compare)