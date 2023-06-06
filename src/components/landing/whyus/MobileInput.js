import ButtonPrimary from "../utilites/ButtonPrimary";

const MobileInput = () => {
  const buttonSettings = {
    buttonStyles : "absolute left-[1px] top-[90px] w-[327px] flex flex-row items-center px-[24px] py-[8px] gap-[8px] w-[216px] bg-[#6366F0] rounded-[30px]",
    textStyles : "font-medium text-[12px] leading-[34px] text-center tracking-wide text-[#FFFFFF] grow",
    text : "Contact me"
  }
  return (
    <div className="w-full flex flex-col items-start px-0 py-[24px] gap-[8px] order-2">
      <div className="relative w-[328px] h-[116px]">
        <input 
          className="absolute left-0 top-[24px] w-[328px] box-border flex flex-row items-start px-[24px] py-[8px] gap-[8px] bg-white border border-solid border-[#DFE6FE] rounded-[30px]"
          placeholder="letuscontactyou@email.com"
        />
        <ButtonPrimary {...buttonSettings} />
      </div>
    </div>
  )
}

export default MobileInput