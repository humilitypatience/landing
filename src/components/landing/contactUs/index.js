import ContactForm from "./ContactForm"
import Description from "./Description"
export default () => {
  return (
    <div className="absolute w-[362px] left-[-6px] top-[12201px] flex flex-col items-start pt-0 px-[16px] pb-[80px] gap-[40px] min-[360px]:w-[1438px] min-[360px]:left-[1px] min-[360px]:top-[7716px] min-[360px]:p-[88px]">
      <div className="flex flex-col items-start p-0 gap-[8px] min-[360px]:flex-row">
        <Description />
        <ContactForm />
      </div>
    </div>
  )
}