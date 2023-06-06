const NavigationButtons = ({text}) => {
  return (
    <button className="flex flex-row items-center px-[16px] py-[4px] gap-[8px] h-full rounded-[8px]">
      <span className="font-medium text-[12px] leading-[20px] flex items-center text-[#F8F9FA] order-1">
        {text}  
      </span>
    </button>
  )
}

export default NavigationButtons