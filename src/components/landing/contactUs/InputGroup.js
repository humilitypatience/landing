const InputGroup = ({labelText, placeholderText}) => {
  return (
    <div className="flex flex-col items-start p-0 gap-[6px]">
      <label className="text-[12px] leading-[21px] text-[#6B7280]">
        {labelText}
      </label>
      <input className="w-[298px] px-[24px] py-[12px] gap-[10px] bg-[#F4F5F9] rounded-[20px] min-[360px]:w-[256px]" placeholder={placeholderText}/>
    </div>
  )
}

export default InputGroup