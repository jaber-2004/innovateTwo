import React from 'react'

import Container from '../Container';
import Button from '../Button';
import Heading from '../Heading';

const Banner = () => {
  return (
    <div className="bg-[url('/src/assets/Banner.png')] py-[210px] bg-cover bg-no-repeat bg-center">
      <Container>
        <Heading
          className={"text-7xl font-extrabold font-oppenS w-[680px] leading-24"}
          text={"&We& Are Digital &Marketing& Agency"}
          as={"h1"}
        />
        <Heading
          className={
            "text-[20px] text-[#6C7D93] font-paprika w-[571px] leading-9 mt-8"
          }
          text={
            "Use customer data to build great and solid product experiences that convert. Digital &marketing’s& development has changed the way brands and businesses use technology for &marketing.& "
          }
          as={"p"}
        />
        <Button className={"mt-9"} btnTxt={"get free quoto"} />
      </Container>
    </div>
  );
}

export default Banner