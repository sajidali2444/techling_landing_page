import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { link } from "fs";
import { HiBuildingOffice } from "react-icons/hi2";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa";

const Footer = () => {
  const social = [
    {
      logo: <IoLogoWhatsapp />,
      link: "https://www.facebook.com/techlinginc",
    },
    {
      logo: <FaTwitter />,
      link: "https://twitter.com/techlinginc",
    },
    {
      logo: <RiInstagramFill />,
      link: "https://www.linkedin.com/company/techlinginc",
    },
    {
      logo: <FaLinkedinIn />,
      link: "https://www.instagram.com/techlinginc",
    },
    {
      logo: <FaFacebookF />,

      link: "https://www.instagram.com/techlinginc",
    },
  ];
  const options = [
    { link: "#", text: "    Artificial Intelligence" },
    { link: "#", text: "Mobile Development" },
    { link: "#", text: "Web Development" },
    { link: "#", text: "UI/UX Design" },
    { link: "#", text: "Software Quality Assurance" },
    { link: "#", text: "Custom Software Development" },
    { link: "#", text: "DevOps" },
  ];
  const options2 = [
    { link: "#", text: "About Us" },
    { link: "#", text: "Privacy Policy" },
    { link: "#", text: "Terms of Use" },
  ];
  const contact = [
    { logo: <HiBuildingOffice />, text: "Techling, LLC", link: "#" },
    { logo: <IoCall />, text: "+1-737-307-3967", link: "#" },
    { logo: <IoMail />, text: "info@techling.tech", link: "#" },
    { logo: <IoMail />, text: "sales@techling.tech", link: "#" },
    {
      logo: <FaLocationArrow />,
      text: "6001 W Parmer LN STE 370 # 290, Austin TX 78727-3908, USA",
      link: "#",
    },
  ];

  return (
    <div className="bg-black relative">
      <div className="absolute right-0 top-0 bg-[url('/images/footr.png')] z-[9999999] w-full" />
      <div className="absolute left-0 bottom-0 bg-[url('/images/footl.png')] z-[9999999] w-full max-w-[400px]" />
      <div className="max-w-[1240px] mx-auto py-[50px] px-5">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 ">
          <div className="lg:col-span-2 p-4 pr-10">
            <img
              className="max-w-[250px] w-full"
              src="/images/logofooter.png"
              alt=""
            />
            <p className="md:text-[14px] text-[12px] text-[#8B8B8B] mt-2">
              At Techling, we specialize in elevating efficiency and achieving
              cost savings in the mobility and healthcare industries through our
              custom AI and ML software solutions. We are committed to
              delivering exceptional results with a 100% satisfaction guarantee
              and a promise of ontime delivery. Partner with us to leverage the
              power of AI and ML, and take your business to new heights.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {social.map((item, index) => (
                <Link className="group" key={index} href={item?.link}>
                  <div className="w-[35px] h-[35px] rounded-full hover:bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 bg-gray-400 grid items-center justify-center text-gray-500 hover:text-white">
                    <div className="text-[15px] ">{item?.logo}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 p-2.5">
            <p className="md:text-[17px] text-[14px] font-bold text-white mb-2">
              Services
            </p>
            {options.map((item, i) => (
              <Link key={i} href={item?.link}>
                <p className="text-gray-400 text-xs md:text-sm hover:text-blue-500 cursor-pointer">
                  {item?.text}
                </p>
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4 p-2.5">
            <p className="md:text-[17px] text-[14px] font-bold text-white mb-2">
              Information
            </p>
            {options2.map((item, i) => (
              <Link key={i} href={item?.link}>
                <p className="text-gray-400 text-xs md:text-sm hover:text-blue-500 cursor-pointer">
                  {item?.text}
                </p>
              </Link>
            ))}
          </div>
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-4 p-2.5">
              <p className="md:text-[17px] text-[14px] font-bold text-white mb-2">
                Contact Us
              </p>
              {contact.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 pb-3 border-b border-gray-400"
                >
                  <div className="text-blue-600 text-xl">{item?.logo}</div>
                  <Link href={item?.link}>
                    <p className="text-gray-400 text-xs md:text-sm hover:text-blue-600">
                      {item?.text}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

