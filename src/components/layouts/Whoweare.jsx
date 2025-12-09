import React from 'react'
import Container from '../Container';
import Heading from '../Heading';
import Flex from '../Flex';
import Images from '../Images';
import whoweareleft  from '/src/assets/whoweareleft.png'
import whowedesignOne  from '/src/assets/whowedesignone.png'
import whowedesigntwo from "/src/assets/whowedesigntwo.png";

const Whoweare = () => {
  return (
    <div className="bg-[url('/src/assets/whoweare.png')] bg-no-repeat bg-center bg-cover py-[100px]">
      <Container>
        <Flex className={"justify-between items-start"}>
          <div className="w-[40%]">
            <Images srcImg={whoweareleft} />
          </div>
          <div className="w-[50%] mt-14">
            <Heading
              className={"text-[#192239] text-5xl font-extrabold font-oppenS"}
              text={"Who We Are"}
              as={"h3"}
            />
            <Heading
              className={
                "text-[#6C7D93] text-[18px] font-paprika leading-8 w-[440px] mt-4"
              }
              text={
                "We are a Dhaka based Digital Communication Agency committed to creating an actionable strategy, online marketing & technology solution for our partners. As a multidisciplinary company, we operate as a unified, "
              }
              as={"p"}
            />
            <div className="mr-6">
              <Images className={"mt-8"} srcImg={whowedesignOne} />
              <Images srcImg={whowedesigntwo} />
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  );
}

export default Whoweare