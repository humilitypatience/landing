import FooterContent from "./FooterContent"

export default () => {
  return(
    <div className="absolute left-[1px] top-[13621px] bg-[#121826] w-[360px] flex flex-col items-start px-[24px] py-[8px] gap-[8px] min-[360px]:w-[1441px] min-[360px]:left-[-1px] min-[360px]:top-[8504px] min-[360px]:px-[88px]">
      <div className="w-full flex flex-col items-start px-[8px] py-[48px] gap-[8px]">
        <div className="w-full flex flex-col items-start p-0 gap-[40px]">
          <div className="flex flex-row items-start p-0 gap-[24px]">
            <img className="w-[40px] h-[40px]" src="/images/landing/rocket.png"/>
            <span className="h-[40px] font-medium text-[16px] leading-[20px] flex items-center text-center text-[#E4E6EA]">
              Development Hero
            </span>
          </div>
          <FooterContent />
          <hr className="w-[296px] border border-solid border-[#383D3A] min-[360px]:w-[1249px]"/>
          <div className="w-full flex flex-col justify-center items-start p-0 gap-[24px] min-[360px]:flex-row min-[360px]:items-center">
            <div className="w-full flex flex-row items-start p-[8px] gap-[8px]">
              <span className="text-[14px] leading-[20px] text-[#B1B5B4]">
                Copyright&#169 2023 Development Hero 
              </span>
            </div>
            <div className="flex flex-row justify-end items-start p-0 gap-[18px]">
              <img className="w-[38px] h-[38px]" src="/images/landing/facebook.png"/>
              <img className="w-[38px] h-[38px]" src="/images/landing/twitter.png"/>
              <img className="w-[38px] h-[38px]" src="/images/landing/linkdin.png"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}