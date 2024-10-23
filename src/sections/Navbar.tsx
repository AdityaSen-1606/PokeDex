import React from 'react'
import pokeball from "../assets/pokeball.png"
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom';

 const navigationRoutes = [
   {
     name: "Search",
     route: "/search",
   },
   {
     name: "Compare",
     route: "/compare",
   },
   {
     name: "About",
     route: "/about",
   },
 ];

function Navbar() {
  return (
    <nav className="grid grid-cols-[5rem_auto_5rem] border-b-[0.5px] border-b-[rgba(255,255,255,0.203)]">
      <div className="flex justify-center items-center">
        <img
          src={pokeball}
          alt="PokeBall"
          className="cursor-pointer h-[3rem]"
        />
      </div>
      <div className="border-t-0 border-b-0 border-[0.5px] border-[rgba(255,255,255,0.203)] p-[0_20rem]">
        <ul className="grid grid-cols-[repeat(5,20%)] h-full list-none z-[1] relative">
          {navigationRoutes.map(({ name, route }, index) => {
            return (
              <Link
                to={route}
                key={index}
                className="no-underline text-white flex justify-center items-center border-b border-b-transparent"
              >
                <li className="uppercase cursor-pointer font-medium tracking-[0.2rem]">
                  {name}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="flex justify-center items-center">
        <GiHamburgerMenu className="text-white text-[2rem] cursor-pointer" />
      </div>
    </nav>
  );
}

export default Navbar