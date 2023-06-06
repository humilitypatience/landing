import { useContext } from 'react'
import { UserContext } from "../../../app/page"

import ButtonContainer from "./ButtonContainer";

const HeroInfoContainer = () => {
  const deviceWidth = useContext(UserContext) 
  return (
    <div className="flex flex-col items-start p-[16px] gap-[32px] w-full self-stretch min-[360px]:h-[666px] min-[360px]:grow">
      <h1 className="w-full font-bold text-[32px] leading-[39px] text-[#374151] min-[360px]:text-[48px] min-[360px]:leading-[58px]">
        <span>Power Up Your &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Business, with &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> <span className="text-indigo-500">Deployed</span> <span>Custom ERP Solutions</span>
      </h1>
      {deviceWidth >= 360 ? (<></>) : (<img className="w-[296px] h-[192.71px] order-1" src="/images/landing/mobilehero.png"/>)}
      <p className="w-full font-normal text-[16px] leading-[24px] text-[#6B7280] order-2 min-[360px]:order-1">
        Supercharge your operations with Deployment Hero. We specialize in seamless integrations, tailored customizations, insightful reporting, and user-friendly forms, all designed to align with your unique business needs. Dive into our innovative Customization Library or experience the power of Deployment Hero Premium. Ready to take your ERP to the next level? Let's elevate your business together.
      </p>
      <ButtonContainer />
    </div>
  )
}

export default HeroInfoContainer
