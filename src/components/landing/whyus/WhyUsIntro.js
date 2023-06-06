import { useContext } from "react"

import { UserContext } from "../../../app/page"

import Tabs from "../services/Tabs";
import DesktopInput from "./DesktopInput";
import IntroContent from "./IntroContent";

const WhyUsIntro = () => {
  const deviceWidth = useContext(UserContext)
  return (
    <div className="w-full flex flex-col justify-center items-start px-[16px] py-0 min-[360px]:h-full min-[360px]:py-[64px] min-[360px]:pr-0 min-[360px]:pl-[88px] min-[360px]:grow">
      <div className="w-full flex flex-col items-start p-0 gap-[24px] min-[360px]:h-full min-[360px]:pr-[88px] min-[360px]:gap-[40px] min-[360px]:grow">
        <Tabs />
        <IntroContent />
        {deviceWidth >=360 && <DesktopInput />}
      </div>
    </div>
  )
}

export default WhyUsIntro