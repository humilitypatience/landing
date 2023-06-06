const CardHead = ({head}) => {
  return (
    <div className="w-[264px] flex flex-row justify-center items-start p-0 gap-[8px]">
      <div className="w-full flex flex-row items-center p-0 gap-[8px] grow">
        <div className="bg-[#EDF1FE] rounded-[8px] p-[8px] gap-[8px]">
          <img className="w-[24px] h-[24px]" src="/images/landing/whyuscardicon.png"/>
        </div>
        <div className="w-full flex flex-col items-start p-0 gap-[8px] order-1 grow">
          <div className="w-full flex flex-col items-start p-0 gap-[12px]">
            <h3 className="w-full font-medium text-[16px] leading-[20px] text-[#374151]">
              {head}
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardHead