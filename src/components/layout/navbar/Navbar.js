import React, { useContext } from "react";

import LogoContainer from "./LogoContainer";
import NavOptions from "./NavOptions";
import LoginRegister from "./LoginRegister";
import { UserContext } from "../../../app/page";

const Nabvar = () => {
  const deviceWidth = useContext(UserContext)
  return (
    <div className="absolute w-[360px] left-0 right-0 top-0 flex flex-col items-start px-[24px] py-[16px] gap-[8px] min-[360px]:w-[1440px]">
      <div 
        className="flex flex-row justify-between items-center p-[8px] gap-[8px] w-full self-stretch"
      >
        <LogoContainer />
        {deviceWidth >= 360 ? <NavOptions /> : <></>}
        <LoginRegister />
      </div>
    </div>
  )
}

export default Nabvar