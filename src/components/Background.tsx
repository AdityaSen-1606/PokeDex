import pokeball from "../assets/pokeball.png"
import pokeball2 from "../assets/pokeball2.png"

function Background() {
  return (
    <div className="z-[-1] absolute max-h-screen grid grid-cols-3 gap-8">
      <img
        src={pokeball}
        alt="Pokeball"
        className="max-w-full h-[20rem] w-auto"
      />
      <img
        src={pokeball2}
        alt="Pokeball2"
        className="max-w-full h-[20rem] w-auto"
      />
      <img
        src={pokeball}
        alt="Pokeball"
        className="max-w-full h-[20rem] w-auto"
      />
      <img
        src={pokeball2}
        alt="Pokeball2"
        className="max-w-full h-[20rem] w-auto"
      />
      <img
        src={pokeball}
        alt="Pokeball"
        className="max-w-full h-[20rem] w-auto"
      />
      <img
        src={pokeball2}
        alt="Pokeball2"
        className="max-w-full h-[20rem] w-auto"
      />
    </div>
  );
}

export default Background