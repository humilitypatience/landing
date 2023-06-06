const ListGroup = ({text}) => {
  return (
    <div className="flex flex-row items-center p-0 gap-[12px]">
      <img className="w-[20px] h-[20px] order-none" src="/images/landing/checkicon.png"/>
      <span className="text-[16px] leading-[26px] text-[#626967] order-1 grow">
        {text}
      </span>
    </div>
  )
}

export default ListGroup