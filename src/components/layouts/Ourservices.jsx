import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import Images from "../Images";
import ServiceOne from "/src/assets/service.png";
import ServiceTwo from "/src/assets/serviceTwo.png";
import ServiceThree from "/src/assets/servicethree.png";

const Ourservices = () => {
  return (
    <div className="bg-[url('/src/assets/ourservices.png')] bg-no-repeat bg-cover bg-center py-16">
      <Container>
        <Heading
          className={
            "text-center text-[#192239] text-5xl font-extrabold font-oppenS"
          }
          text={"Our Services"}
          as={"h3"}
        />
        <Heading
          className={
            "text-center text-[#6C7D93] text-[18px]  font-paprika leading-8 px-[430px] mt-5"
          }
          text={"We have been providing great flooring solutions service."}
          as={"p"}
        />
        <Flex className={"justify-between mt-14"}>
          <div className="bg-[#EBF7E9] w-[32.5%] px-5  py-9 text-center rounded-3xl relative">
            <Images className={"mx-auto"} srcImg={ServiceOne} />
            <Heading
              className={
                "text-[#202427] text-3xl font-semibold font-oppenS my-4"
              }
              text={"MARKETING STRATEGY"}
              as={"h4"}
            />
            <Heading
              className={
                "text-[#6C7D93] text-[18px] px-10 leading-7 font-paprika"
              }
              text={
                "Social Media has changed the way we interact & do business while creating"
              }
              as={"p"}
            />
            <div className="">
              <div className="h-10 w-10 rounded-[50%] bg-[#FF7628] absolute left-[125px] bottom-[29px] z-10"></div>
              <Heading
                className="text-[#202427] text-[18px] font-oppenS font-bold mt-3.5 relative z-20"
                text={"Read more"}
                as={"h5"}
              />
            </div>
          </div>
          <div className="bg-[#D8EAFF] w-[32.5%] px-5  py-9 text-center  rounded-3xl relative">
            <Images className={"mx-auto"} srcImg={ServiceTwo} />
            <Heading
              className={
                "text-[#202427] text-3xl font-semibold font-oppenS my-4"
              }
              text={"Social Marketing"}
              as={"h4"}
            />
            <Heading
              className={
                "text-[#6C7D93] text-[18px] px-10 leading-7 font-paprika "
              }
              text={
                "Social Media has changed the way we interact & do business while creating"
              }
              as={"p"}
            />
            <div className="">
              <div className="h-10 w-10 rounded-[50%] bg-[#FF7628] absolute left-[125px] bottom-[29px] z-10"></div>
              <Heading
                className="text-[#202427] text-[18px] font-oppenS font-bold mt-3.5 relative z-20"
                text={"Read more"}
                as={"h5"}
              />
            </div>
          </div>
          <div className="bg-[#FBF1EC] w-[32.5%] px-5  py-9  text-center  rounded-3xl relative">
            <Images className={"mx-auto"} srcImg={ServiceThree} />
            <Heading
              className={
                "text-[#202427] text-3xl font-semibold font-oppenS my-4"
              }
              text={"Content Marketing"}
              as={"h4"}
            />
            <Heading
              className={
                "text-[#6C7D93] text-[18px] px-10 leading-7 font-paprika"
              }
              text={
                "Social Media has changed the way we interact & do business while creating"
              }
              as={"p"}
            />
            <div className="">
              <div className="h-10 w-10 rounded-[50%] bg-[#FF7628] absolute left-[125px] bottom-[29px] z-10"></div>
              <Heading
                className="text-[#202427] text-[18px] font-oppenS font-bold mt-3.5 relative z-20"
                text={"Read more"}
                as={"h5"}
              />
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Ourservices;
