import { useContext } from "react"
import { UserContext } from "../../../app/page"

import CardContainer1 from "./CardContainer1";
import CardContainer2 from "./CardContainer2";
import MobileInput from "./MobileInput";

const Future = () => {
  const deviceWidth = useContext(UserContext)
  return (
    <div className="w-full flex flex-col justify-center items-start p-0 order-1 min-[360xpx]:h-full min-[360px]:flex-row min-[360px]:items-center min-[360px]:grow">
      <CardContainer1 />
      <CardContainer2 />
      {deviceWidth < 360 && <MobileInput />}
    </div>
  )
}

export default Future