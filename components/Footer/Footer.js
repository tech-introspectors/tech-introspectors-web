import { navData } from "../../data/nav-data/navData";
import { useRouter } from "next/router";
import CustomeIcon from "../CustomeIcon";
import { secondarylightblue } from "../../constants/colors";
import { techintrospectorsSocialMedia } from "../../data/socialMediaData/socailMediaData";

const Footer = () => {
  const router = useRouter();

  return (
    <div className="h-4/6 w-screen bg-primaryblue overflow-x-hidden">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffff"
          fillOpacity="1"
          d="M0,256L40,250.7C80,245,160,235,240,202.7C320,171,400,117,480,80C560,43,640,21,720,48C800,75,880,149,960,181.3C1040,213,1120,203,1200,181.3C1280,160,1360,128,1400,112L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>

      <div className="px-7 lg:px-44 my-11 gap-x-12 sm:grid  md:grid-cols-2 lg:grid-cols-3 auto-cols-auto">
        <div className="flex justify-center items-center">
          <h2
            onClick={() => router.push("/")}
            className="cursor-pointer text-secondarylightblue font-bold text-3xl text-center whitespace-nowrap"
          >
            Tech-Introspectors
          </h2>
        </div>

        <div className="ml-0 lg:ml-10">
          <h2 className="text-secondarylightblue font-bold mt-10 md:mt-0 mb-4 text-lg">
            Navigation
          </h2>
          <div className="space-y-2 text-secondarytextcolor">
            {navData.map((item, index) => (
              <h3
                onClick={() => router.push(item.path)}
                className=" cursor-pointer my-1 transition-all duration-200 ease-in-out hover:text-secondarylightblue hover:pl-5"
                key={index}
              >
                {item.menu}
              </h3>
            ))}
          </div>
        </div>

        <div className=" mt-10 md:mt-10 lg:mt-0 ">
          <h2 className="text-secondarylightblue mb-4 text-lg font-bold">
            Contact Us
          </h2>
          <div className="text-secondarytextcolor space-y-2 ">
            <p>techintrospectors@gmail.com</p>
            <p>+91 9177114722</p>
            <p>+91 8688668145</p>
          </div>

          <div>
            {techintrospectorsSocialMedia.map((item, index) => {
              return (
                <CustomeIcon
                  Icon={item.icon}
                  link={item.link}
                  iconColor={secondarylightblue}
                  borderColor="transparent"
                  iconSize="2"
                  marginAll="0.5"
                  marginLeft="-0.5"
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center py-5  text-secondarytextcolor">
        <p>
          copyright @ 2021{" "}
          <span
            className="text-secondarylightblue font-semibold
          "
          >
            Tech-Introspectors
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
