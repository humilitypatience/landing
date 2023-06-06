import ServiceIntro from "./ServiceIntro"
import ServiceCardContainer from "./ServiceCardContainer";

const Services = () => {
  return (
    <div className="absolute left-0 top-[926px] w-[360px] flex flex-col items-start px-[16px] py-[32px] min-[360px]:h-[766px] min-[360px]:w-[1440px] min-[360px]:justify-center min-[360px]:px-[88px] min-[360px]:py-[8px] min-[360px]:left[1px] min-[360px]:top-[882px]">
      <div className="flex flex-col justify-center items-start p-[8px] gap-[48px] w-full">
        <ServiceIntro />
        <ServiceCardContainer />
      </div>
    </div>
  )
}

export default Services