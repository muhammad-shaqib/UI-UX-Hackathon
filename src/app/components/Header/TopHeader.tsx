import React from "react";
import { LuPhone } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import { IoLogoInstagram } from "react-icons/io";
import { FiYoutube } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const TopHeader = () => {
  return (
    <div className="w[full] h-[58px] bg-[#252B42] flex justify-between items-center pl-[24px] pr-[24px]">
      {/* Contact Info */}
      <div className="flex text-[#FFFFFF] items-center gap-4">
        <LuPhone />
        <h6 className="font-[700] text-[14px] gap-[0.5] leading-[24px]">
          (225) 555-0118
        </h6>
        <div className="w-[260px] h-[44px] gap-[5px] flex items-center ml-5">
          {/* <BiMessage className="w-[16px] h-[16px]" /> */}
          <TfiEmail className="w-[16px] h-[16px]" />
          <h6 className="font-[700] text-[14px] gap-[0.5] leading-[24px]">
            michelle.rivera@example.com
          </h6>
        </div>
      </div>

      {/* Follow Us Text */}
      <div className="flex items-center text-[#FFFFFF] font-[700] text-[14px] gap-2">
        <h6>Follow Us and get a chance to win 80% off</h6>
      </div>

      {/* Social Icons */}
      <div className="flex items-center text-[#FFFFFF] gap-2">
        <h6 className="font-[700] text-[14px]">Follow Us:</h6>
        <IoLogoInstagram className="w-[18px] h-[18px]" />
        <FiYoutube className="w-[18px] h-[18px]" />
        <FaFacebook className="w-[18px] h-[18px]" />
        <FaTwitterSquare className="w-[18px] h-[18px]" />
      </div>
    </div>
  );
};

export default TopHeader;
