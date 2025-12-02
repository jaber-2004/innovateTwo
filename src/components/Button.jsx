const Button = ({ btnTxt, className }) => {
  return (
    <button
      className={`py-3.5 px-7 rounded-[100px] bg-[#FF7628] border-1 border-[#FF7628] text-[#FFFFFF] text-[18px] font-semibold font-oppenS cursor-pointer hover:bg-transparent hover:text-[#FF7628] hover:border-[#FF7628] duration-300 hover:scale-90 ${className}`}
    >
      {btnTxt}
    </button>
  );
};

export default Button;
