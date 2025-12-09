import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import clientone from '/src/assets/clientone.png'
import clienttwo from "/src/assets/clienttwo.png";
import clientthree from "/src/assets/clientthree.png";
import Heading from '../Heading'
import { FaChevronCircleRight } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Clientreview = () => {
  return (
    <div className="">
      <Container>
        <Flex className={"justify-between"}>
          <div className="w-[32.5%]">
            <Images srcImg={clientone} />
            <Heading
              className={
                "text-[#192239] text-5xl font-extrabold font-oppenS py-5"
              }
              text={"Client Review"}
              as={"h3"}
            />
            <Heading
              className={
                "text-[#6C7D93] text-[18px] font-paprika w-[330px] leading-8 "
              }
              text={
                "people use digital devices instead of visiting physical shops, digital marketing campaigns are becoming more prevalent and efficient.  "
              }
              as={"p"}
            />
            <div className="flex gap-x-5 mt-5 text-[#FF7628]">
              <Link>
                <FaChevronCircleLeft className="text-3xl" />
              </Link>
              <Link>
                {" "}
                <FaChevronCircleRight className="text-3xl" />
              </Link>
            </div>
          </div>
          <div className="w-[32.5%]">
            <Images srcImg={clienttwo} />
          </div>
          <div className="w-[32.5%]">
            <Images srcImg={clientthree} />
          </div>
        </Flex>
      </Container>
    </div>
  );
}

export default Clientreview