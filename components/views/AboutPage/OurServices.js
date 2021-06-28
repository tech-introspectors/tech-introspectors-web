import Fade from 'react-reveal/Fade';

import {
  primaryblue,
  secondarydarkblue,
  secondarylightblue,
  sectionColor,
} from '../../../constants/colors';
import { ourServices } from '../../../data/aboutUsData/aboutUsData';
import MainTitle from '../../MainTitle';
import ListCard from './components/ListCard';

const OurServices = () => {
  return (
    <div className="relative flex flex-col gap-5 md:flex-row justify-center items-center py-11 px-7 md:px-11 md:p-14 h-auto w-screen bg-gray-50">
      <div className="my-11 w-full md:w-1/2">
        <MainTitle
          outerDivColor={primaryblue}
          innerDivColor={secondarylightblue}
          textColor={secondarydarkblue}
          bgColor={sectionColor}
          title="Our Services"
        />
        <div>
          {ourServices.map((item, index) => (
            <ListCard
              key={index}
              animationDelay={item.animationDelay}
              data={item.service}
            />
          ))}
        </div>
      </div>
      <Fade right>
        <div className="w-full h-full md:w-1/2 md:p-2 lg:p-11">
          <img
            className="object-cover"
            src="images/aboutUsImg/ourServices.svg"
          />
        </div>
      </Fade>
    </div>
  );
};

export default OurServices;
