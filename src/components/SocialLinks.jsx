import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  let social = [
    {
      id: 1,
      color: "bg-blue-600",
      child: (
        <>
          Linkedin <FaLinkedin size={30} className="ml-2 text-white" />
        </>
      ),
      link: "linkedin.com/in/himanshu-kumar-rana-5379a7197/",
    },
    {
      id: 2,
      color: "bg-gray-600",
      child: (
        <>
          Github <FaGithub size={30} className="ml-2 text-white" />
        </>
      ),
      link: "https://github.com/HimanshuKrRana",
    },
    {
      id: 3,
      color: "bg-red-600",
      child: (
        <>
          Mail <AiOutlineMail size={30} className="ml-2 text-white" />
        </>
      ),
      link: "mailto:er.ranahimanshu@gmail.com",
    },
    {
      id: 4,
      color: "bg-blue-500",
      child: (
        <>
          Twitter <FaTwitter size={30} className="ml-2 text-white" />
        </>
      ),
      link: "https://twitter.com/@itshkrana",
    },
    {
      id: 5,
      color: "bg-red-600",
      child: (
        <>
          Instagram <FaInstagram size={30} className="ml-2 text-white" />
        </>
      ),
      link: "https://www.instagram.com/_hkr_himanshu/",
    },
    {
      id: 6,
      color: "bg-green-500",
      child: (
        <>
          Resume <BsPersonLinesFill size={30} className="ml-2 text-white" />
        </>
      ),
      link: "https://drive.google.com/file/d/1YfD81D5Hl4cm0vb98kE59fm4LF3bAAZb/view?usp=share_link",
    },
  ];
  return (
    <div>
      <div className=" hidden md:flex flex-col top-[35%] left-0 fixed">
        <ul>
          {social.map(({ id, color, child, link }) => {
            return (
              <li
                key={id}
                className={`flex justify-end items-center w-32 h-1/3 py-3 px-2 ml-[-65%] hover:rounded-md hover:ml-[-3%] duration-500 ${color} cursor-pointer`}
              >
                <a
                  className="flex text-white font-bold"
                  href={link}
                  download="true"
                  target="_blank"
                >
                  {child}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SocialLinks;

