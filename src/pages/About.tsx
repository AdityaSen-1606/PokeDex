import avatarImage from '../assets/aditya.jpeg'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Wrapper from '../sections/Wrapper';

function About() {
  return (
    <div className="flex flex-col items-center gap-4 text-white mt-8">
      <img
        src={avatarImage}
        alt=""
        className="h-[25rem] rounded-[10rem] border-[0.3rem] border-accent-color p-4"
      />
      <h1 className=" tracking-[0.2rem] text-4xl">
        Hi I am Aditya Sen
      </h1>
      <h2 className="uppercase tracking-[0.2rem]">PokeDex</h2>
      <h3 className=" tracking-[0.2rem]">
        This project is created as assignment task.
      </h3>
      <div className="profile-links">
        <a
          href="https://github.com/AdityaSen-1606"
          className="text-accent-color"
        >
          <FaGithub className="flex gap-8 mt-8 cursor-pointer text-3xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/aditya-sen-1606as2002/"
          className="text-accent-color"
        >
          <FaLinkedin className="flex gap-8 mt-8 cursor-pointer text-3xl" />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About)