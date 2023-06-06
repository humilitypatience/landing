'use client'
import { useContext } from "react";

import RocketContainer from "./RocketContainer";
import { UserContext } from "../../../app/page";

const LogoContainer = () => {
  const deviceWidth = useContext(UserContext)

  const lgLogoText = (<span className="flex items-center w-full h-full font-medium text-[17px] leading-[20px] text-[#6366F0] order-1 grow">Development Hero</span>)
  return(
    <div className="flex flex-row items-center p-[8px] gap-[24px] w-[235px] flex-none">
      <RocketContainer />
      {
        deviceWidth > 360 ? lgLogoText : ""
      }
    </div>
  )
}

export default LogoContainer