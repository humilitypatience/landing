import { useContext } from "react"

import { UserContext } from "@/app/page"

import IntegrationsHead from "./IntegrationsHead";
import MobileConnectionsContainer from "./MobileConnectionsContainer"
import IntroTextContainer from "./IntroTextContainer";
import ButtonPrimary from "../utilites/ButtonPrimary"
import IntroText from "./IntroText";
import DesktopConnectionsContainer from "./DesktopConnectionsContainer";

const Integrations = () => {
  const deviceWidth = useContext(UserContext)

  const buttonSettings = {
    buttonStyles : "flex flex-row justify-center items-center px-[24px] py-[8px] gap-[14px] w-[216px] bg-[#6366F0] drop-shadow-[0_1px_2px_rgb(255,255,255,0.05)] rounded-[30px]",
    textStyles : "font-medium text-[14px] leading-[20px] text-[#F2F3F5]",
    text : "How can we help?"
  }
  const mobileContent = (<>
    <MobileConnectionsContainer />
    <IntroTextContainer />
    <div className="w-full flex flex-col items-start p-[8px] gap-[8px] order-3">
      <ButtonPrimary {...buttonSettings}/>
    </div>
  </>)
  const desktopContent = (<>
    <IntroText />
    <div className="flex flex-row items-center p-0 gap-[16px] h-[57px] order-3">
      <ButtonPrimary {...buttonSettings}/>
    </div>
  </>)
  return (
    <div className="absolute w-[360px] left-0 top-[2597px] flex flex-col items-center px-[16px] py-[40px] gap-[8px] min-[360px]:px-[88px] min-[360px]:py-[93px] min-[360px]:h-[816px] min-[360px]:left-[-3px] min-[360px]:w-[1443px] min-[360px]:top-[1648px]">
      <div className="w-full flex flex-col items-start px-[16px] py-0 gap-[63px] min-[360px]:flex-row min-[360px]:items-center min-[360px]:p-0">
        <div className="w-full flex flex-col items-center p-0 gap-[40px] min-[360px]:h-full min-[360px]:justify-center min-[360px]:items-start min-[360px]:gap-[24px] min-[360px]:grow min-[360px]:w-[602px]">
          <IntegrationsHead />
          {deviceWidth >= 360 ? desktopContent : mobileContent}
        </div>
        {deviceWidth >= 360 && (
          <>
            <DesktopConnectionsContainer />
            <img className="absolute w-[1081px] h-[355px] left-[-28px] top-[403px] transform scale-x-100 rotate--2 skew-x-2" src="/images/landing/vector2.png"/>
            <img className="absolute w-[1079px] h-[357px] left-[-35px] top-[396px] transform scale-x-100 rotate-1 skew-x-1" src="/images/landing/vector1.png"/>
          </>
        )}
        
      </div>
    </div>
  )
}

export default Integrations