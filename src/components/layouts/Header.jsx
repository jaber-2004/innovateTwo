import { Link } from "react-router-dom";
import Button from "../Button";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import Logo from "/src/assets/Logo.png";
import { ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <div className="mt-5">
      <Container>
        <Flex className={"justify-between"}>
          <div className="">
            <Link to={"/"}>
              <Images srcImg={Logo} />
            </Link>
          </div>
          <div className="">
            <ul className="flex gap-x-5 text-[18px] font-semibold font-oppenS">
              <li>
                <Link to={"/"} className="flex hover:text-[#FF7628] duration-300">
                  Home <ChevronDown className="pl-1.5"/>
                </Link>
              </li>
              <li>
                <Link to={"/about"} className="flex hover:text-[#FF7628] duration-300">
                  About <ChevronDown className="pl-1.5"/>
                </Link>
              </li>
              <li>
                <Link to={"/service"} className="flex hover:text-[#FF7628] duration-300">
                  Service <ChevronDown className="pl-1.5"/>
                </Link>
              </li>
              <li>
                <Link to={"/portfolio"} className="flex hover:text-[#FF7628] duration-300">
                  Portfolio <ChevronDown className="pl-1.5"/>
                </Link>
              </li>
              <li>
                <Link to={"/price"} className="flex hover:text-[#FF7628] duration-300">
                  Price <ChevronDown className="pl-1.5"/>
                </Link>
              </li>
              <li>
                <Link to={"/blog"} className="flex hover:text-[#FF7628] duration-300">
                  Blog <ChevronDown className="pl-1.5"/>
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <Button btnTxt={"Contact Us"} />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
