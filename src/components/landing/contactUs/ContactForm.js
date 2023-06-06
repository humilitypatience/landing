import ButtonPrimary from "../utilites/ButtonPrimary";
import InputGroup from "./InputGroup";
import TextAreaGroup from "./TextareaGroup";

const ContactForm = () => {
  const nameSettings = [
    {
      labelText: "First Name",
      placeholderText: "John"
    },
    {
      labelText: "Last Name",
      placeholderText: "Doe"
    }
  ]
  const personSetting = [
    {
      labelText: "Email",
      placeholderText: "email@email.com"
    },
    {
      labelText: "Subject",
      placeholderText: "Customize my ERP PLEASE"
    }
  ]
  const messageSetting = {
    labelText: "Message",
    placeholderText: "YOU! Fix !! Pay"
  }
  const buttonSettings = {
    buttonStyles : "w-[216px] flex flex-row justify-center items-center px-[24px] py-[8px] gap-[14px] bg-[#6366F0] shadow-xs rounded-[30px]",
    textStyles : "flex items-center font-medium text-[14px] leading-[20px] tracking-wide text-[#F2F3F5]",
    text : "Submit"
  }
  return (
    <div className="box-border w-[627px] flex flex-col justify-center items-start px-[16px] py-[40px] gap-[16px] bg-white border border-solid border-[#E4E6EA] shadow-md rounded-[20px] order-1 min-[360px]:px-[46px] min-[360px]:grow">
      <h3 className="text-[16px] leading-[24px] text-[#374151]">
        Send us a message
      </h3>
      <div className="flex flex-row items-center p-0 gap-[60px] order-1">
        <div className="flex flex-col items-end p-0 gap-[24px] grow">
          <div className="flex flex-col items-start p-0 gap-[16px]">
            <div className="flex flex-col items-start p-0 gap-[24px] min-[360px]:flex-row">
              {nameSettings.map(setting => <InputGroup {...setting} />)}
            </div>
            <div className="flex flex-col items-start p-0 gap-[24px] min-[360px]:flex-row">
              {personSetting.map(setting => <InputGroup {...setting} />)}  
            </div>
            <div className="h-[203px] flex flex-col items-start p-0 gap-[6px]">
              <TextAreaGroup {...messageSetting} />
            </div>
          </div>
          <div>
            <ButtonPrimary {...buttonSettings} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm