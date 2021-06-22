import {
  secondarylightblue,
  secondarytextcolor,
} from "../../../constants/colors";
import CustomeIcon from "../../CustomeIcon";

const TeamCard = ({
  memberName,
  profession,
  aboutMember,
  src,
  socaiMediaLink,
}) => {
  const data = socaiMediaLink.socialMeida;

  return (
    <div className="group rounded-3xl overflow-hidden flex flex-col sm:flex-row h-auto  w-[450px] sm:w-[500px] my-5 md:m-5 shadow-xl bg-primaryblue">
      <div className="showdow-lg rounded-3xl flex justify-center items-center w-auto sm:w-40 bg-white">
        <img
          className="object-cover"
          src={src || "images/aboutUsImg/teamMemberImg/programmer.svg"}
        />
      </div>
      <div className="w-full sm:w-2/3 h-full p-5">
        <h1 className="text-secondarylightblue font-bold text-lg sm:text-xl">
          {memberName} <span> ({profession})</span>{" "}
        </h1>
        <p className="text-secondarytextcolor py-2 transition-all duration-700 line-clamp-3 group-hover:line-clamp-none ">
          {aboutMember}
        </p>
        <div className="px-2 flex">
          {data.map((item, index) => {
            return (
              <div className="mr-2">
                <CustomeIcon
                  key={index}
                  Icon={item.icon}
                  link={item.link}
                  iconColor={secondarytextcolor}
                  borderColor={secondarylightblue}
                  iconSize="1.2"
                  marginAll="0.5"
                  marginLeft="-0.5"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
