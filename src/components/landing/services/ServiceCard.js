const ServiceCard = ({iconUrl, futureHead, futureContent}) => {
  return (
    <div className="w-full h-[319px] box-border flex flex-col items-start p-[24px] gap-[16px] bg-white border border-solid border-[rgba(230,232,236,0.5)] shadow-[5px_5px_20px_1px_rgba(115,115,115,0.05)] rounded-[20px] min-[360px]:grow">
      <div className="flex flex-col justify-center items-center p-[8px] gap-[8px] bg-[#EDF1FE] rounded-[8px]">
        <img className="w-[32px] h-[32px] order-1" src={iconUrl}/>
      </div>
      <div className="flex flex-col items-start p-0 gap-[8px] w-full h-full order-1 grow">
        <div className="flex flex-col items-start p-0 gap-[12px] w-full">
          <h3 className="font-medium text-[18px] leading-[28px] text-[#374151]">
            {futureHead}
          </h3>
        </div>
        <div className="w-full h-full font-normal text-[14px] leading-[20px] text-[#6B7280] order-1 grow">
          {futureContent}
        </div>
        <div className="flex flex-row justify-center items-center px-0 py-[4px] bg-white order-2">
          <span className="font-medium text-[14px] leading-[24px] text-center text-indigo-500">Learn more</span>
          <img className="w-[24px] h-[24px] order-1" src="/images/landing/arrowright.png"/>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard