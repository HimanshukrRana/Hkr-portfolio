import React from "react";

import Covid from "../assets/covid19.jpg";
import amazon from "../assets/amazon-hkr.jpg";
import tenzie from "../assets/ten-hkr.jpg";
import LandingPage2 from "../assets/L2-hkr.jpg";
import LandingPage1 from "../assets/L1-hkr.jpg";
import saviour from "../assets/savior-hkr.jpg";
import Register from "../assets/register.jpg";
import Admin from "../assets/admin.jpg";
import Fixit from "../assets/fixit.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: amazon,
      demoLink: "https://covid19-web-hkr.netlify.app",
      codeLink: "https://github.com/HimanshukrRana/Covid19web",
    },
    {
      id: 2,
      image: Covid,
      demoLink: "https://covid19-web-hkr.netlify.app",
      codeLink: "https://github.com/HimanshukrRana/Covid19web",
    },
    {
      id: 3,
      image: LandingPage1,
      demoLink: "https://landing-page-m.netlify.app",
      codeLink: "https://github.com/HimanshukrRana/Landing-Page-4",
    },
    {
      id: 4,
      image: LandingPage2,
      demoLink: "https://landing-page-2-hkr.vercel.app",
      codeLink: "https://github.com/HimanshukrRana/Landing-Page-2",
    },
    {
      id: 5,
      image: saviour,
      demoLink: "https://www.savioursecurity.com",
      codeLink: "https://github.com/HimanshukrRana/Savior-Security",
    },
    {
      id: 6,
      image: tenzie,
      demoLink: "https://tenzies-game-hkr.netlify.app",
      codeLink: "https://github.com/HimanshukrRana/Tenzies-game1",
    },

    {
      id: 7,
      image: Register,
      demoLink: "expense-tracker-hkr.vercel.app",
      codeLink: "https://github.com/HimanshukrRana/Expense_Tracker",
    },
    {
      id: 8,
      image: Admin,
      demoLink: "refine-dashboard-dun.vercel.app",
      codeLink:
        "https://github.com/HimanshukrRana/refine_dashboard/tree/main/client",
    },
    {
      id: 9,
      image: Fixit,
      demoLink: "https://fixit-templete.vercel.app/",
      codeLink: "https://github.com/HimanshukrRana/Fixit-templete",
    },
  ];

  return (
    <div
      name="Projects"
      className="bg-gradient-to-b from-black to-gray-800 pt-[20%] w-full sm:h-screen md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-2 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>

          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm-grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, image, demoLink, codeLink }) => {
            return (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <a href={demoLink} target="_blank">
                  <img
                    src={image}
                    alt="project-images"
                    className="rounded-md duration-200 hover:scale-105"
                  />
                </a>

                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-orange-500">
                    {" "}
                    <a href={demoLink} target="_blankk">
                      Demo
                    </a>
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-orange-500">
                    <a href={codeLink} target="_blank">
                      Code
                    </a>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;

