import { useState } from "react";
import { useRouter } from "next/router";
import { navData } from "../../data/nav-data/navData";
import { MdMenu, MdClose } from "react-icons/md";
import styled from "styled-components";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const router = useRouter();

  const openNav = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <div className="w-screen bg-primaryblue py-5 px-7 rounded-bl-full rounded-br-full z-50 absolute t-0">
        <div className="flex justify-between items-center">
          <div className="text-secondarylightblue font-bold text-base sm:text-xl md:text-2xl flex-1 pl-5">
            <h1 className="cursor-pointer" onClick={() => router.push("/")}>
              Tech-Introspectors
            </h1>
          </div>
          <div className="flex text-secondarytextcolor space-x-10 last:px-5">
            {navData.map((item, index) => (
              <h2
                key={index}
                onClick={() => router.push(item.path)}
                className="cursor-pointer transition duration-200 transform hover:scale-110 hover:text-secondarylightblue hidden md:block "
              >
                {item.menu}
              </h2>
            ))}
            {toggle ? (
              <MdClose
                onClick={openNav}
                className="text-3xl cursor-pointer md:hidden block md:-space-x-0 text-secondarylightblue"
              />
            ) : (
              <MdMenu
                onClick={openNav}
                className="text-3xl cursor-pointer md:hidden block md:-space-x-0 text-secondarylightblue"
              />
            )}
          </div>
        </div>
      </div>
      {/* Nav-slider for mobile view */}
      <ToggleNav
        toggle={toggle}
        className="absolute h-screen transform translate-y-0 w-screen bg-primaryblue z-40 md:hidden flex flex-col justify-center items-center space-y-10"
      >
        {navData.map((item, index) => (
          <div key={index}>
            <h2
              onClick={() => {
                setToggle(false);
                router.push(item.path);
              }}
              className="cursor-pointer transition duration-200 transform hover:scale-110 text-secondarytextcolor font-semibold hover:text-secondarylightblue"
            >
              {item.menu}
            </h2>
          </div>
        ))}
      </ToggleNav>
    </div>
  );
};

export default Navbar;

const ToggleNav = styled.div`
  transition: transform 0.5s;
  transform: ${({ toggle }) =>
    toggle ? "translateY(0%)" : "translateY(-100%)"};
`;
