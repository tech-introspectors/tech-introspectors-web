import React from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import Link from "next/link";

const ProjectCard = ({
  projectImgSrc,
  projectName,
  projectCategory,
  projectDescription,
  projectDemoLink,
}) => {
  return (
    <div className="shadow-lg p-3 w-[270px] bg-white rounded-lg">
      <div className="w-full h-[200px] relative ">
        <img
          className="w-full h-full rounded-lg object-cover"
          src={projectImgSrc}
          alt={projectName}
        />
        <div
          className="absolute bg-black/30 md:bg-transparent md:hover:bg-black/30 cursor-pointer w-full h-full top-0 left-0 flex justify-center items-center transition-all 
              rounded-lg duration-300 group
        "
        >
          <Link href={projectDemoLink || "#"} passHref>
            <a target={projectDemoLink && "_blank"}>
              <AiFillEye
                className="text-white
           text-2xl -translate-x-1/2 bg-black/60 p-3 -translate-y-1/2
           md:group-hover:scale-100
           
           hover:scale-105
           active:scale-90
           transition-all duration-300
           absolute left-1/2
           md:scale-0
           rounded-full w-[50px] h-[50px]"
              />
            </a>
          </Link>
        </div>
        <div
          className="bg-white absolute left-1/2 font-semibold
        -translate-x-1/2 px-2 py-[2px] text-gray-500 bottom-0 rounded-t-lg"
        >
          <p className="text-[13px]">{projectCategory}</p>
        </div>
      </div>
      <div className="py-2">
        <h1
          className="text-center font-bold py-2 line-clamp-1
        "
        >
          {projectName}
        </h1>
        <p className="line-clamp-3 text-[14px] text-gray-500 text-center">
          {projectDescription}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
