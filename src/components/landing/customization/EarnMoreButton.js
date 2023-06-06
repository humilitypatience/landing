import ButtonPrimary from "../utilites/ButtonPrimary"

const EarnMoreButton = () => {
  const buttonSettings = {
    buttonStyles : "w-[216px] flex flex-row justify-center items-center px-[24px] py-[8px] gap-[14px] bg-[#6366F0] shadow-xs rounded-[30px]",
    textStyles : "flex items-center font-medium text-[14px] leading-[20px] tracking-wide text-[#F2F3F5]",
    text : "Earn more"
  }
  return (
    <div className="h-[57px] flex flex-row items-center p-0 gap-[16px] order-1">
      <ButtonPrimary {...buttonSettings}/>
    </div>
  )
}

export default EarnMoreButton