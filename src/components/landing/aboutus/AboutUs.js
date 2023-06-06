import { useContext } from "react";

import AboutUsContent from "./AboutUsContent";
import MobileAboutUsPicture from "./MobileAboutUsPicture";

import { UserContext } from "@/app/page"

const AboutUs = () => {
  const deviceWidth = useContext(UserContext)
  return (
    <div className="absolute left-0 top-[3731px] w-[360px] flex flex-col items-center px-[16px] py-[40px] gap-[8px] min-[360px]:justify-center min-[360px]:items-start min-[360px]:px-[88px] min-[360px]:py-0 min-[360px]:h-[788px] min-[360px]:w-[1443px] min-[360px]:top-[2464px]">
      <div className="w-full flex flex-col justify-center items-start p-0 gap-[24px] min-[360px]:flex-row min-[360px]:items-center min-[360px]:gap-[80px]">
        {deviceWidth >= 360 ? (<img className="w-[545px] h-[546px]" src="/images/landing/aboutus.png"/>) : (<MobileAboutUsPicture />)}
        <AboutUsContent />
      </div>
    </div>
  )
}

export default AboutUs