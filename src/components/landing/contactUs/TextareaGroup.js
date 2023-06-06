const TextareaGroup = ({labelText, placeholderText}) => {
  return (
    <div className="flex flex-col items-start p-0 gap-[6px]">
      <label className="text-[12px] leading-[21px] text-[#6B7280]">
        {labelText}
      </label>
      <textarea 
        className="w-[298px] h-[176px] px-[24px] py-[12px] gap-[10px] bg-[#F4F5F9] rounded-[20px] resize-none min-[360px]:w-[535px]" 
        placeholder={placeholderText}
      />
    </div>
  )
}

export default TextareaGroup