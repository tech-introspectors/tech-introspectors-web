const ProjectTypeCard = ({ projectTypeName, src, id }) => {
  return (
    <a href={`#${id}`}>
      <div className="group overflow-hidden relative cursor-pointer rounded-xl shadow-lg flex flex-col justify-center items-center h-40 w-96 md:w-80 bg-white">
        <div className="flex justify-between items-center w-full gap-5 h-full">
          <div className="absolute left-0 top-0 group-hover:left-1/4 transition-all duration-700 transform  overflow-hidden  h-full w-full">
            <img src={src} className="h-full" />
          </div>
          <div className="absolute transition-all duration-700 group-hover:hidden right-2 w-1/2 text-center z-0">
            <h1 className="text-secondaryblue text-xl font-bold">
              {projectTypeName}
            </h1>
          </div>
        </div>
        <div className="absolute transition-all duration-700 opacity-0 group-hover:opacity-100 rounded-xl transform scale-0 group-hover:scale-100 flex justify-center text-center items-center bg-primaryblue/75 h-full w-full">
          <h1 className="text-white/90 text-2xl font-bold">
            {projectTypeName}
          </h1>
        </div>
      </div>
    </a>
  );
};

export default ProjectTypeCard;
