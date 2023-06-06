import { useContext } from "react"
import { UserContext } from "../../../app/page";

import CustomizationIntro from "./CustomizationIntro"
import EarnMoreButton from "./EarnMoreButton"
import Library from "./Library"

const Customization = () => {
  const deviceWidth = useContext(UserContext)
  return (
    <div className="absolute w-[360px] left-[1px] top-[6621px] flex flex-col items-start px-[16px] py-[40px] gap-[16px] min-[360px]:w-[1437px] min-[360px]:h-[788px] min-[360px]:top-[4040px] min-[360px]:left-[6px] min-[360px]:px-[88px] min-[360px]:py-[8px] min-[360px]:gap-[8px]">
      <div className="w-full flex flex-col items-start px-[16px] py-0 gap-[88px] min-[360px]:flex-row min-[360px]:items-center min-[360px]:p-0 min-[360px]:gap-[88px]">
        {deviceWidth >= 360 ? (
          <>
            <div className="relative w-[533px] h-[582px] order-none">
                  <div className="w-full h-[100px]"></div>
                  <img className="absolute w-[293px] h-[415px] right-[256px] top-[40px]" src="/images/landing/vector4.png"/>
                  <img className="absolute w-[284px] h-[416px] right-[256px] top-[40px]" src="/images/landing/vector3.png"/>
                  <Library />
                  <img className="absolute right-[245px] top-[27px] w-[36px] h-[34px] rotate-[35deg]" src="/images/landing/rocket.png"/>
                </div>
                <div className="w-full flex flex-col justify-end items-start px-0 py-[32px] gap-[68px] order-1 grow">
                  <CustomizationIntro />
                  <EarnMoreButton /> 
                </div>
          </>
        ) : (
          <>
            <CustomizationIntro />
            <EarnMoreButton />
            <div className="w-full flex flex-row items-start p-0 gap-[8px] order-2">
              <Library />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Customization