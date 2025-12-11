import React from 'react'
import Container from '../Container';
import Heading from '../Heading';

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
            className={"text-[#6C7D93] text-[18px] font-paprika leading-8 px-[340px] mt-6"}
            text={
              "We provide digital experience services to startups and small businesses."
            }
            as={"p"}
          />
        </div>
      </Container>
    </div>
  );
}

export default Ourlatest