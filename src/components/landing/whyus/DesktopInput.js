import ButtonPrimary from "../utilites/ButtonPrimary"

const DesktopInput = () => {
  const buttonSettings = {
    buttonStyles : "absolute top-0 right-0 flex flex-row items-start px-[24px] py-[8px] gap-[8px] bg-[#6366F0] rounded-[30px]",
    textStyles : "font-medium text-[14px] leading-[34px] tracking-wide text-[#FFFFFF]",
    text : "Contact me"
  }
  return (
    <div className="w-[500px] h-[50px] order-2">
      <div className="relative w-[500px] h-[50px]">
        <input 
          className="w-[500px] h-[50px] box-border flex flex-row items-start px-[24px] py-[8px] gap-[8px] bg-white border border-solid border-[#DFE6FE] rounded-[30px]"
          placeholder="letuscontactyou@email.com"
        />
        <ButtonPrimary {...buttonSettings} />
      </div>
    </div>
  )
}

export default DesktopInput