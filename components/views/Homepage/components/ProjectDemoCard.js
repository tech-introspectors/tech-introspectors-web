const ProjectDemoCard = ({ source, title, description }) => {
  return (
    <div className="bg-gray-50 py-6 sm:py-12 flex flex-col justify-center ">
      <div className="relative my-11 py-3 mx-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative bg-white shadow-lg sm:rounded-3xl sm:pb-8 overflow-hidden">
          <div className="h-52 overflow-hidden ">
            <img
              className="object-cover object-center h-52 w-full"
              src={source}
            />
          </div>
          <div className="px-5 py-2">
            <h1 className="text-2xl pb-2 font-bold text-center text-primaryblue line-clamp-1">
              {title}
            </h1>
            <p className="text-primarytextcolor font-semibold line-clamp-2">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDemoCard;
