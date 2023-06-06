import ButtonPrimary from "../utilites/ButtonPrimary";

const AboutUsContent = () => {
  const buttonSettings = {
    buttonStyles: "w-[216px] flex flex-row justify-center items-center px-[24px] py-[8px] gap-[14px] bg-[#6366F0] drop-shadow-[0_1px_2px_rgb(255,255,255,0.05)] rounded-[30px]",
    textStyles: "font-medium text-[14px] leading-[20px] text-[#F2F3F5]",
    text: "Get in touch"
  }
  return (
    <div className="w-full flex flex-col justify-center items-start px-[16px] py-0 order-1 min-[360px]:p-0 min-[360px]:grow">
      <div className="w-full flex flex-col items-start p-0 gap-[16px] order-none">
        <div className="w-full flex flex-col justify-end items-center p-0 gap-[32px]">
          <h2 className="w-full font-bold text-[24px] leading-[29px] text-[#374151] min-[360px]:text-[32px] min-[360px]:leading-[39px]">About us</h2>
          <p className="w-full text-[16px] leading-[24px] flex items-center text-[#6B7280] order-1">
          Deployment Hero, is your comprehensive ERP solutions partner, specializing in the customization and integration of Mid-Tier ERP systems, driving business operations with technology solutions that truly work. 
          Our services include Integrations, Customizations, Reporting, and Forms across ERP platforms like Netsuite, Dynamics 365, Acumatica and more...
          <br/>
          <br/>
          Through our innovative client service portal, we guarantee quotes within 2 hours, not 2 days streamlining project initiation with automated acceptance criteria, upload features, and an easy-to-use project request system keeping you in the updated of your project and the deadlines every step of the way.
          <br />
          <br />
          </p>
        </div>
      </div>
      <div className="h-[57px] flex flex-row items-center p-0 gap-[16px] order-1">
        <ButtonPrimary {...buttonSettings} />
      </div>
    </div>
  )
}

export default AboutUsContent