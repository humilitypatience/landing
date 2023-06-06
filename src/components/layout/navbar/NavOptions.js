import NavOverView from "./NavOverView";
import NavIntegrations from "./NavIntegrations";
import NavPricing from "./NavPricing";
import NavContactUs from "./NavContactUs";

const NavOptions = () => {
  return (
    <div className="flex flex-row items-center px-[24px] py-0 gap-[8px] w-[885px] h-[56px] order-1 min-[360px]:h-full">
      <NavOverView />
      <NavIntegrations />
      <NavPricing />
      <NavContactUs />
    </div>
  )
}

export default NavOptions