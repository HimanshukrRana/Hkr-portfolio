import React from "react";
import { Link } from "react-scroll";
import { FaArrowRight } from "react-icons/fa";

import Hero from "../assets/linkedin2.png";

const Home = () => {
  return (
    <div
      name="Home"
      className="w-full pt-12 sm:h-screen
         "
    >
      <div className="max-w-screen-md mx-auto flex flex-col items-center justify-center h-full px-4 sm:flex-row sm:ml-12 md:mx-auto">
        <div className="flex flex-col justify-center h-full pt-10">
          <h2 className="text-4xl sm:text-6xl font-bold  ">
            I'm a Aspiring Front-End Developer
          </h2>

          <p className="text-gray-500 py-4  max-w-md">
            I am enthusiastic about learning and expanding my skills. I have
            completed various online courses and tutorials to enhance my
            knowledge, and I am eager to apply my abilities and contribute to a
            team in a professional environment. I possess excellent learning
            skills and am committed to solving complex problems. I am confident
            that my contributions would be valuable to any frontend development
            team.
            {/* A web developer and Javascript enthusiast with an intense
            curiosity about all aspects of web development area as well as the
            ability to learn new stuffs in any area related to innovative
            technology, creating websites and applications. */}
          </p>

          <div>
            <Link
              to="Projects"
              smooth
              duration={500}
              className="w-fit text-white px-6 py-3 my-2 flex items-center cursor-pointer rounded-md bg-gradient-to-r from-purple-700 to-orange-600 font-bold"
            >
              Projects
              <span className="hover:rotate-90 duration-500">
                <FaArrowRight size={20} className="ml-2" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={Hero}
            alt="Hero"
            className="rounded-2xl mx-auto  md:mx-auto h-[450px] w-[850px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

