import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import Logo from '/src/assets/Logo.png'
import Heading from '../Heading'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="mt-[135px] mb-14">
      <Container>
        <Flex className={"items-start justify-between"}>
          <div className="">
            <Images srcImg={Logo} />
            <Heading
              className={
                "text-[#6C7D93] text-[18px] font-paprika w-[450px] leading-[180%] mt-8"
              }
              text={
                "Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page."
              }
              as={"p"}
              Blog
            />
          </div>
          <div className="">
            <Heading
              className={"text-[#413F45] text-2xl font-semibold font-oppenS "}
              text={"Features"}
              as={"h3"}
            />
            <ul className="text-[#6C7D93] text-[20px] font-semibold font-oppenS mt-8 ">
              <li className="pt-6">
                <Link>Home</Link>
              </li>
              <li className="pt-6">
                <Link>About</Link>
              </li>
              <li className="pt-6">
                <Link>Benifit</Link>
              </li>
              <li className="pt-6">
                <Link>Pricing</Link>
              </li>
              <li className="pt-6">
                <Link>Blog</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <Heading
              className={"text-[#413F45] text-2xl font-semibold font-oppenS "}
              text={"Products"}
              as={"h3"}
            />
            <ul className="text-[#6C7D93] text-[20px] font-semibold font-oppenS mt-8 ">
              <li className="pt-6">Task Management</li>
              <li className="pt-6">Company growth</li>
              <li className="pt-6">Time tracking</li>
            </ul>
          </div>
          <div className="">
            <Heading
              className={"text-[#413F45] text-2xl font-semibold font-oppenS "}
              text={"Support"}
              as={"h3"}
            />
            <ul className="text-[#6C7D93] text-[20px] font-semibold font-oppenS mt-8 ">
              <li className="pt-6">Customer service</li>
              <li className="pt-6">Accessibility</li>
              <li className="pt-6">Contact us</li>
            </ul>
          </div>
        </Flex>
        <Flex className={"justify-between mt-20 text-[#6C7D93] text-[18px] font-oppenS"}>
          <div className="">
            <Heading text={"@20201 Innovate.All rights reserved."} as={"h5"} />
          </div>
          <div className=" flex gap-x-12">
            <div className="">
              <Heading text={"Privacy policy"} as={"h5"} />
            </div>
            <div className="">
              <Heading text={"Terms & condition"} as={"h5"} />
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  );
}

export default Footer