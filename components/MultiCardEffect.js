const MultiCardEffect = ({ children }) => {
  return (
    <div className="h-screen w-screen">
      <div className="relative overflow-hidden flex justify-center items-center h-full w-full -rotate-2 -left-2 rounded-3xl bg-secondaryblue">
        <div className="absolute h-full sm:h-5/6  w-full sm:w-10/12 md:w-11/12 rotate-2 rounded-3xl bg-white">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MultiCardEffect;
