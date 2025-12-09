import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Flex from "../Flex";
import Images from "../Images";
import creativeone from "/src/assets/creativeone.png";
import creativetwo from "/src/assets/creativetwo.png";
import creativethree from "/src/assets/creativethree.png";
import creativefive from "/src/assets/creativefive.png";

const Ourcreative = () => {
  return (
    <div className="bg-[url('/src/assets/ourcreative.png')] bg-no-repeat bg-cover bg-center py-7">
      <Container>
        <div className="text-center">
          <Heading
            className={"text-[#192239] text-5xl  font-extrabold font-oppenS"}
            text={"Our creative process."}
            as={"h3"}
          />
          <Heading
            className={
              "text-[#6C7D93] text-[18px] px-[330px] leading-8 mt-5 font-paprika"
            }
            text={
              "We provide digital experience services to startups and small businesses."
            }
            as={"p"}
          />
        </div>
        <Flex className={"justify-between items-start mt-10"}>
          <div className="mt-8">
            <Images srcImg={creativeone} />
          </div>
          <div className="">
            <Images srcImg={creativetwo} />
          </div>
        </Flex>
        <Flex className={"justify-between items-start"}>
          <div className="">
            <Images srcImg={creativetwo} />
          </div>
          <div className="mt-8">
            <Images srcImg={creativethree} />
          </div>
        </Flex>
        <Flex className={"justify-between items-start"}>
          <div className="mt-8">
            <Images srcImg={creativefive} />
          </div>
          <div className="">
            <Images srcImg={creativetwo} />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Ourcreative;
