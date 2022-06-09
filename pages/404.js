import Button from "./../components/Button/Button";
import { useRouter } from "next/router";

const PageNotFound = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <img src="images/404Error.gif" />
      <Button onClick={() => router.replace("/")} width="300">
        Back To Home
      </Button>
    </div>
  );
};

export default PageNotFound;
