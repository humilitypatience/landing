const Libraryitem = ({iconStyles, iconUrl, head, text}) => {
  return (
    <div className="w-full flex flex-row items-center px-[8px] py-[16px] gap-[24px] min-[360px]:w-[447px]">
      <img className="w-[99px] h-[99px]" src={iconUrl}/>
      <div className="w-full flex flex-col items-start p-0 gap-[8px] order-1 grow">
        <h3 className="w-full font-medium text-[18px] leading-[27px] flex items-center text-[#374151]">
          {head}
        </h3>
        <p className="w-full text-[14px] leading-[21px] flex items-center text-[#6B7280] order-1">
          {text}
        </p>
      </div>
    </div>
  )
}

export default Libraryitem