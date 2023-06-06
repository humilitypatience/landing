const GetStartedButton = (props) => {
  return (
    <button className="flex flex-row justify-center items-center px-[24px] py-[8px] gap-[6px] bg-[#6366F0] drop-shadow-[0_1px_2px_rgb(255,255,255,0.05)] rounded-[30px] order-2">
      <span className="font-medium text-[14px] leading-[20px] flex items-center text-[#F2F3F5] order-none">
        Get started
      </span>
      {props.iconComponent}
    </button>
  )
}

export default GetStartedButton