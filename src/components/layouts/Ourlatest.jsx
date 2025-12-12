import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Flex from "../Flex";

const Ourlatest = () => {
  return (
    <div className="bg-[url('/src/assets/ourlastes.png')] bg-no-repeat bg-cover bg-center mt-32">
      <Container>
        <div className="text-center">
          <Heading
            className={"text-[#413F45] text-5xl font-extrabold font-workS"}
            text={"Our Latest Blog"}
            as={"h3"}
          />
          <Heading
            className={
              "text-[#6C7D93] text-[18px] font-paprika leading-8 px-[340px] mt-6"
            }
            text={
              "We provide digital experience services to startups and small businesses."
            }
            as={"p"}
          />
        </div>
        <Flex className={"gap-x-5  mt-8"}>
          <div className="">
            <div className="bg-[#C4C4C4]  h-[240px] w-[370px] rounded-tr-3xl rounded-tl-3xl"></div>
            <div className="shadow-[0_28px_70px_0_rgba(99,122,166,0.1)]   h-[240px] w-[370px] rounded-br-3xl rounded-bl-3xl p-8 relative">
              <Heading
                className={"text-[#413F45] text-2xl font-medium font-workS"}
                text={"How to Be Ahead"}
                as={"h3"}
              />
              <Heading
                className={"text-[#413F45] text-2xl font-medium font-workS"}
                text={"of Stock Changes"}
                as={"h3"}
              />
              <Heading
                className={"text-[#474747] text-[18px]  font-workS mt-4"}
                text={"By John  - 5 Comments"}
                as={"h4"}
              />
              <div className="h-8 w-8 rounded-[50%] bg-[#FF7628] absolute left-5 bottom-[52px]"></div>
              <Heading
                className={
                  "text-[#202427] text-[18px] font-bold font-oppenS relative mt-5 z-10"
                }
                text={"Read more"}
                as={"h3"}
              />
            </div>
          </div>
          <div className="">
            <div className="bg-[#C4C4C4] h-[240px] w-[370px] rounded-tr-3xl rounded-tl-3xl"></div>
            <div className="shadow-[0_28px_70px_0_rgba(99,122,166,0.1)]  h-[240px] w-[370px] rounded-br-3xl rounded-bl-3xl p-8 relative">
              <Heading
                className={"text-[#413F45] text-2xl font-medium font-workS"}
                text={"Online Reputation"}
                as={"h3"}
              />
              <Heading
                className={"text-[#413F45] text-2xl font-medium font-workS"}
                text={"And Management"}
                as={"h3"}
              />
              <Heading
                className={"text-[#474747] text-[18px]  font-workS mt-4"}
                text={"By Amin  - 10 Comments"}
                as={"h4"}
              />
              <div className="h-8 w-8 rounded-[50%] bg-[#FF7628] absolute left-5 bottom-[52px]"></div>
              <Heading
                className={
                  "text-[#202427] text-[18px] font-bold font-oppenS relative mt-5 z-10"
                }
                text={"Read more"}
                as={"h3"}
              />
            </div>
          </div>
          <div className="">
            <div className="bg-[#C4C4C4]  h-[240px] w-[370px] rounded-tr-3xl rounded-tl-3xl"></div>
            <div className="shadow-[0_28px_70px_0_rgba(99,122,166,0.1)] h-[240px] w-[370px] rounded-br-3xl rounded-bl-3xl p-8 relative">
              <Heading
                className={"text-[#413F45] text-2xl font-medium font-workS"}
                text={"Tips To Move Your"}
                as={"h3"}
              />
              <Heading
                className={"text-[#413F45] text-2xl font-medium font-workS"}
                text={"Project More Forward"}
                as={"h3"}
              />
              <Heading
                className={"text-[#474747] text-[18px]  font-workS mt-4"}
                text={"By Insider  - 15 Comments"}
                as={"h4"}
              />
              <div className="h-8 w-8 rounded-[50%] bg-[#FF7628] absolute left-5 bottom-[52px]"></div>
              <Heading
                className={
                  "text-[#202427] text-[18px] font-bold font-oppenS relative mt-5 z-10"
                }
                text={"Read more"}
                as={"h3"}
              />
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Ourlatest;
