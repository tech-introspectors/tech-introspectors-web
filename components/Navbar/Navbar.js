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
    <div className="relative w-full  ">
      <div className="w-screen border-b-2 shadow-lb-2xl border-secondarylightblue bg-primaryblue py-5 px-7 rounded-bl-full rounded-br-full z-50 fixed top-0">
        <div className="flex justify-between items-center">
          <div className="text-secondarylightblue font-bold text-base sm:text-xl md:text-2xl flex-1 pl-5">
            <h1
              className="cursor-pointer inline-block"
              onClick={() => router.push("/")}
            >
              Tech Introspectors
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
        {/* Nav-slider for mobile view */}
        <ToggleNav
          toggle={toggle}
          className="absolute  top-0 left-0 h-screen transform translate-y-0 w-screen bg-primaryblue md:hidden flex flex-col justify-center items-center space-y-10"
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
    </div>
  );
};

export default Navbar;

const ToggleNav = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -50;
  transition: transform 0.5s, opacity 0.5s linear;
  transform: ${({ toggle }) =>
    toggle ? "translateY(0%)" : "translateY(-100%)"};
  opacity: ${({ toggle }) => (toggle ? "1" : "0")};
`;
