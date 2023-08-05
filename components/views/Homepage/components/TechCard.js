const TechCard = ({ logoURL, techName }) => {
  return (
    <div className="group transition-all duration-300 hover:scale-110 relative bg-secondaryblue shadow-lg cursor-pointer h-40 w-96 lg:w-80 rounded-xl overflow-hidden  flex flex-col justify-center sm:py-12">
      <div className="absolute shadow-lg transition-all duration-500 opacity-100 group-hover:opacity-0 group-hover:-translate-x-52 bg-white h-full w-32 md:w-36 rounded-xl overflow-hidden">
        <img className="h-full p-2" src={logoURL} />
      </div>

      <div className="absolute right-2 w-1/2 z-0">
        <h1 className="text-white text-xl font-bold">{techName}</h1>
      </div>

      <div className="absolute z-10 transition-all duration-500 transform translate-x-96 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 bg-white  h-full w-32 md:w-36 rounded-xl overflow-hidden">
        <img className="h-full p-2" src={logoURL} />
      </div>
    </div>
  );
};

export default TechCard;
