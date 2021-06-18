const ProjectDemoCard = ({ source, title, description }) => {
  return (
    <div className="bg-gray-50 py-6 sm:py-12 flex flex-col justify-center ">
      <div className="relative my-11 py-3 mx-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative bg-white shadow-lg sm:rounded-3xl sm:p-1 overflow-hidden">
          <div>
            <img className src={source} />
          </div>
          <div className="p-3">
            <h1 className="text-lg font-bold text-center text-primaryblue">
              {title}
            </h1>
            <p className="text-primarytextcolor font-semibold">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDemoCard;
