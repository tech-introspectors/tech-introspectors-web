const Hero = () => {
  return (
    <div>
      <div className="relative bg-primaryblue flex justify-center items-center w-screen h-screen text-4xl">
        <div className="absolute bottom-0 ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="rgba(249, 250, 251,1)"
              fillOpacity="1"
              d="M0,288L40,288C80,288,160,288,240,261.3C320,235,400,181,480,144C560,107,640,85,720,106.7C800,128,880,192,960,234.7C1040,277,1120,299,1200,266.7C1280,235,1360,149,1400,106.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
