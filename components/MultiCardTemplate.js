const MultiCardEffect = ({ children }) => {
  return (
    <div className="bg-secondaryblue relative p-8 rounded-3xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 bg-white p-11 rounded-3xl">
            {children}
          </div>
        </div>
  );
};

export default MultiCardEffect;
