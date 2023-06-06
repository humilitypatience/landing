import Tabs from "./Tabs"
import IntroSection from "./IntroSection"

const ServiceIntro = () => {
  return (
    <div className="flex flex-col items-start p-0 gap-[16px] w-full">
      <Tabs />
      <IntroSection />
    </div>
  )
}

export default ServiceIntro