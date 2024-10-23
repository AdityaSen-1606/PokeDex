import React from 'react'

const Wrapper = (Component:React.FC) => () => {
    return (
      <div className="m-[0_5rem] border-x-[0.5px] border-x-[rgba(255,255,255,0.203)] h-[80vh] overflow-hidden pb-10">
        <Component />
      </div>
    );
}

export default Wrapper