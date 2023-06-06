import WhyUsIntro from "./WhyUsIntro"
import Future from "./Future"

const WhyUs = () => {
  return (
    <div className="absolute w-[360px] left-0 top-[4752px] flex flex-row justify-center items-center px-[16px] py-[40px] min-[360px]:flex-col min-[360px]:items-start min-[360px]:px-0 min-[360px]:py-[8px] min-[360px]:gap-[8px] min-[360px]:w-[1440px] min-[360px]:h-[788px] min-[360px]:top-[3252px]">
      <div className="w-full h-full flex flex-col items-start p-0 gap-[40px] grow min-[360px]:flex-row min-[360px]:justify-center min-[360px]:items-center min-[360px]:py-[64px] min-[360px]:pr-[84px] min-[360px]:pl-0">
        <WhyUsIntro />
        <Future />
      </div>
    </div>
  )
}

export default WhyUs