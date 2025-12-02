import Images from "../Images";
import error from "/src/assets/error.jpg";
import { useNavigate } from "react-router-dom";

const Error = () => {
  let navigate = useNavigate();
  const handelClick = () => {
    navigate("/");
  };
  return (
    <>
      <Images className={"mx-auto mt-2 rounded-4xl"} srcImg={error} />
      <button
        onClick={handelClick}
        className={
          "absolute right-85 bottom-6 py-3.5 px-7 rounded-[100px] bg-[#FF7628] border-1 border-[#FF7628] text-[#FFFFFF] text-[18px] font-semibold font-oppenS cursor-pointer hover:bg-transparent hover:text-[#FF7628] hover:border-[#FF7628] duration-300 hover:scale-90 "
        }
      >
        Go Home
      </button>
    </>
  );
};

export default Error;
