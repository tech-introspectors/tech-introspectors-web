import Image from "next/image";

const PageNotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <img src="images/404Error.gif" />
    </div>
  );
};

export default PageNotFound;
