import CardHead from "./CardHead"

const Card = ({head, text}) => {
  return (
    <div className="w-full box-border flex flex-col items-start pt-[16px] px-[24px] pb-[24px] bg-white border border-solid border-[rgba(230,232,236,0.5)] shadow-[5px_5px_20px_1px_rgba(115,115,115,0.05)] rounded-[20px]">
      <CardHead head={head}/>
      <div className="w-full flex flex-col items-start font-normal text-[14px] leading-[20px] text-[#6B7280] p-0 pl-[48px] gap-[12px] order-1">
        {text}
      </div>
    </div>
  )
}

export default Card