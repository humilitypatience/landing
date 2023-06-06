import GetStartedButton from "../../layout/navbar/GetStartedButton";
const ButtonContainer = () => {
  const iconComponent = (
    <img className="w-[16px] h-[16px] order-1" src="/images/layout/whiterocket.png"/>
  )
  return (
    <div className="flex flex-row items-center p-0 gap-[16px] w-full h-[57px] order-3 min-[360px]:order-2">
      <GetStartedButton iconComponent = {iconComponent} />
    </div>
  )
}

export default ButtonContainer