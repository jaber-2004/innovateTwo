
import Container from "../Container";
import Heading from "../Heading";
import Flex from "../Flex";
import Images from "../Images";
import workOne from "/src/assets/workone.png";
import worktwo from "/src/assets/worktwo.png";
import workthree from "/src/assets/workthree.png";
import workfour from "/src/assets/workfour.png";
import workfive from "/src/assets/workfive.png";
import worksix from "/src/assets/worksix.png";
import { Link } from "react-router-dom";

const Workshowcase = () => {
  return (
    <div className="bg-[url('/src/assets/workshowcase.png')]  bg-no-repeat bg-center bg-cover py-14">
      <Container>
        <Heading
          className={
            "text-center text-5xl text-[#192239] font-extrabold font-oppenS "
          }
          text={"Work Showcase "}
          as={"h3"}
        />
        <div className="mt-10">
          <ul className="text-2xl font-semibold font-oppenS text-[#6C7D93] flex gap-x-7 ">
            <li className="hover:text-[#FF7628] duration-300">
              <Link>All</Link>
            </li>
            <li className="hover:text-[#FF7628] duration-300">
              <Link>Digital Mkt</Link>
            </li>
            <li className="hover:text-[#FF7628] duration-300">
              {" "}
              <Link>Branding</Link>
            </li>
            <li className="hover:text-[#FF7628] duration-300">
              <Link>Content Mkt</Link>
            </li>
            <li className="hover:text-[#FF7628] duration-300">
              <Link> Social Media Mkt</Link>
            </li>
          </ul>
        </div>
        <Flex className={"justify-between mt-10"}>
          <div className="">
            <Images srcImg={workOne} />
          </div>
          <div className="">
            <Images srcImg={worktwo} />
          </div>
          <div className="">
            <Images srcImg={workthree} />
          </div>
        </Flex>
        <Flex className={"justify-between mt-8"}>
          <div className="">
            <Images srcImg={workfour} />
          </div>
          <div className="">
            <Images srcImg={workfive} />
          </div>
          <div className="">
            <Images srcImg={worksix} />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Workshowcase;
