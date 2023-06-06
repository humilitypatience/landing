import { useContext } from "react";
import { UserContext } from "@/app/page";

import ButtonPrimary from "../utilites/ButtonPrimary";
import ProjectContainer from "./ProjectContainer";


export default function () {
  const deviceWidth = useContext(UserContext)
  const buttonSettings = {
    buttonStyles: "w-full flex flex-row justify-center items-center px-[24px] py-[10px] gap-[6px] bg-[#C6D1FD] shadow-md rounded-[30px] order-2",
    textStyles: "font-medium text-[14px] leading-[20px] flex items-center text-[#6366F0]",
    text: "Register"
  }
  const buttonSettings1 = {
    buttonStyles: "w-full flex flex-row justify-center items-center px-[24px] py-[10px] gap-[6px] bg-[#6366F0] shadow-md rounded-[30px] order-2",
    textStyles: "font-medium text-[14px] leading-[20px] flex items-center text-[#FFFFFF]",
    text: "Register"
  }
  return (
    // title bar
    <>
      <div className="w-full flex flex-col items-start px-0 py-[8px] gap-[24px]">
        <h2 className="w-full font-bold text-[24px] leading-[56px] text-center text-[#374151] min-[360px]:text-[32px]">
          All, for the price of Launch
        </h2>
        <sapn className="w-full font-medium text-[16px] leading-[26px] text-center text-[#6B7280] order-1">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </sapn>
      </div>
      <div className="w-full flex flex-col items-start px-[16px] py-[8px] gap-[48px] order-1 min-[360px]:flex-row min-[360px]:px-[208px]">
        <div className="w-full box-border flex flex-col items-start px-[40px] py-[32px] gap-[24px] bg-white border border-solid border-[#E4E6EA] shadow-md rounded-[20px]">
          <div className="w-full flex flex-col items-start p-0 gap-[8px]">
            <span className="w-full font-medium text-[18px] leading-[26px] text-[#1F2937]">
              Free
            </span>
            <span className="w-full font-medium text-[14px] leading-[26px] text-[#6B7280] order-1">
              Free account with limited features
            </span>
          </div>
          <span className="w-full font-medium text-[24px] leading-[26px] text-[#1F2937] order-1">Stater</span>
          <ButtonPrimary {...buttonSettings}/>
        </div>
        {deviceWidth < 360 && <ProjectContainer />}
        <div className="w-full box-border flex flex-col items-start px-[40px] py-[32px] gap-[24px] bg-white border border-solid border-[#6366F0] shadow-md rounded-[20px] order-2 min-[360px]:order-1">
          <div className="w-full flex flex-col items-start p-0 gap-[8px]">
            <span className="w-full font-medium text-[18px] leading-[26px] text-[#1F2937]">
              $5000 USD/mo
            </span>
            <span className="w-full font-medium text-[14px] leading-[26px] text-[#6B7280] order-1">
              Take advantage of all the oportunities
            </span>
          </div>
          <span className="w-full font-medium text-[24px] leading-[26px] text-[#1F2937] order-1">Premium</span>
          <ButtonPrimary {...buttonSettings1}/>
        </div>
      </div>
    </>
  )
}