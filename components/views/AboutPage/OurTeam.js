import { teamMemberData } from "../../../data/aboutUsData/ourTeamData";
import MainTitle from "../../MainTitle";
import TeamCard from "./components/TeamCard";

const OurTeam = () => {
  return (
    <div className="py-11 px-7 md:px-11 lg:p-24 w-screen">
      <MainTitle
        title="Our Team"
        description="Meet the developers behind Tech Introspectors!"
        bgColor="#ffff"
      />

      <div className="flex flex-wrap justify-center items-center">
        {teamMemberData.map((data, index) => {
          return (
            <TeamCard
              key={index}
              src={data.img}
              memberName={data.name}
              aboutMember={data.aboutHim}
              profession={data.profession}
              socaiMediaLink={data}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OurTeam;
