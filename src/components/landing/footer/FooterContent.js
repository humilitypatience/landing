import { useContext } from "react";

import { UserContext } from "@/app/page";

import ButtonPrimary from "../utilites/ButtonPrimary";
import CategoryItem from "./CategoryItem";
const FooterContent = () => {
  const deviceWidth = useContext(UserContext)
  const buttonSettings1 = {
    buttonStyles: "absolute left-0 bottom-0 w-[295px] flex flex-row items-center px-[24px] py-[8px] gap-[8px] bg-[#6366F0] rounded-[30px]",
    textStyles: "font-medium text-[12px] leading-[34px] text-center tracking-wide text-[#FFFFFF] grow",
    text: "Subscribe now"
  }
  const buttonSettings2 = {
    buttonStyles: "absolute right-0 w-[141px] h-[50px] flex flex-row items-start px-[24px] py-[8px] gap-[8px] bg-[#6366F0] rounded-[30px]",
    textStyles: "font-medium text-[12px] leading-[34px] tracking-wide text-[#FFFFFF]",
    text: "Subscribe now"
  }
  const productCat = {
    categoryHead: "Product",
    categoryContents: ["Future", "Integration", "Pricing"]
  }
  const serviceCat = {
    categoryHead: "Services",
    categoryContents: ["Integrations", "Customizations", "Reports", "Forms"]
  }
  const supportCat = {
    categoryHead: "Support",
    categoryContents: ["About us", "Testamonials", "Contact"]
  }
  const legalCat = {
    categoryHead: "Legals",
    categoryContents: ["Terms & Conditions", "Privacy Policy", "Data Policy", "Security Policy"]
  }
  const mobileSubscribe = (
    <>
      <div className="flex flex-row justify-center items-center p-0 gap-[14px]">
        <button className="flex flex-row items-center justify-between w-[221px] h-[34px]">
          <img className="w-[25px] h-[20px]" src="/images/landing/newslettericon.png" />
          <span className="font-medium text-[18px] leading-[34px] tracking-2 text-[#E4E6EA]">
            Join Our Newsletter
          </span>
        </button>
        <img className="w-[40px] h-[40px]" src="/images/landing/whiterocket.png" />
      </div>
      <div className="relative w-[296px] h-[116px] order-1">
        <input
          className="absolute left-0 top-0 w-[295px] flex flex-row items-start px-[24px] py-[8px] gap-[8px] bg-[#1E293B] rounded-[30px]"
          placeholder="letuscontactyou@email.com"
        />
        <ButtonPrimary {...buttonSettings1} />
      </div>
    </>
  )
  const desktopSubscribe = (
    <>
      <div className="w-[388px] flex flex-col items-start p-0 gap-[22px]">
        <div className="flex flex-row justify-center items-center p-0 gap-[14px]">
          <button className="flex flex-row items-center justify-between w-[221px] h-[34px]">
            <img className="w-[25px] h-[20px]" src="/images/landing/newslettericon.png" />
            <span className="font-medium text-[18px] leading-[34px] tracking-2 text-[#E4E6EA]">
              Join Our Newsletter
            </span>
          </button>
          <img className="w-[40px] h-[40px]" src="/images/landing/whiterocket.png" />
        </div>
        <div className="relative w-[388px] h-[50px] order-1">
          <input
            className="absolute left-0 w-[330px] h-[50px] flex flex-row items-start px-[24px] py-[8px] gap-[8px] bg-[#1E293B] rounded-[30px]"
            placeholder="letuscontactyou@email.com"
          />
          <ButtonPrimary {...buttonSettings2} />
        </div>
      </div>
    </>
  )
  const mobileCategory = (
    <div className="flex flex-col items-start p-0 gap-[32px]">
      <div className="flex flex-row items-start p-0 gap-[8px]">
        <CategoryItem {...productCat} />
        <CategoryItem {...serviceCat} />
      </div>
      <div className="flex flex-row items-start p-0 gap-[8px]">
        <CategoryItem {...supportCat} />
        <CategoryItem {...legalCat} />
      </div>
    </div>
  )
  const desktopCategory = (
    <div className="flex flex-row items-start p-0 gap-[8px]">
      <CategoryItem {...productCat} />
      <CategoryItem {...serviceCat} />
      <CategoryItem {...supportCat} />
      <CategoryItem {...legalCat} />
    </div>
  )
  return (
    <div className="w-full flex flex-col items-start p-0 gap-[41px] min-[360px]:flex-row min-[360px]:gap-[129px]">
      <div className="flex flex-col items-start p-0 gap-[22px] order-none min-[360px]:items-end min-[360px]:px-[8px] min-[360px]:order-1">
        {deviceWidth >= 360 ? desktopSubscribe : mobileSubscribe}

      </div>
      {deviceWidth >= 360 ? desktopCategory : mobileCategory}
    </div>
  )
}

export default FooterContent