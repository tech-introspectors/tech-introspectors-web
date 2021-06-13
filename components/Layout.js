const { default: Navbar } = require("./Navbar/Navbar");

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
