import { useContext } from 'react'
import { UserContext } from "../../../app/page"

import HeroInfoContainer from './HeroInfoContainer';
import PhotoContainer from "./PhotoContainer";

const HeroSection = () => {
  const deviceWidth = useContext(UserContext)
  return (
    <div className="absolute w-[360px] left-0 top-[104px] flex flex-col items-center px-[16px] py-0 gap-[8px] min-[360px]:w-[1440px] min-[360px]:px-[88px] min-[360px]:py-[56px] min-[360px]:left-[1px]">
      <div className="flex flex-col items-start p-0 gap-[64px] w-full self-stretch min-[360px]:flex-row">
        <HeroInfoContainer />
        {deviceWidth >= 360 ? <PhotoContainer /> : <></>}
      </div>
    </div>
  )
}

export default HeroSection