import Tabs from "./Tabs";

const IntegrationsHead = () => {
  return (
    <div className="flex flex-col items-start p-0 gap-[40px] w-full">
      <Tabs />
      <div className="w-full flex flex-col justify-end items-center p-0 gap-[56px] order-1">
        <h2 className="w-full font-bold text-[24px] leading-[29px] text-[#374151]">
          Integrations we support
        </h2>
      </div>
    </div>
  )
}

export default IntegrationsHead