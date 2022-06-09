import Slider from "react-slick";
import { topProjectsData } from "../../../../data/projectsData/topProjectsData";
import ProjectDemoCard from "./ProjectDemoCard";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CaroselSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="overflow-hidden bg-gray-50 pointer-events-none">
      <Slider {...settings}>
        {topProjectsData.map((item, index) => {
          return (
            <ProjectDemoCard
              key={index}
              source={item.projectImg}
              title={item.projectName}
              description={item.description}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default CaroselSlider;
