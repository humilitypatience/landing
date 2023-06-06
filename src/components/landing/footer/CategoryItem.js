const CategoryItem = ({categoryHead, categoryContents}) => {
  return (
    <div className="w-[145px] flex flex-col items-start p-0 gap-[4px]">
      <div className="font-medium text-[16px] leading-[30px] tracking-tighter text-[#E4E6EA]">
        {categoryHead}
      </div>
      {categoryContents.map(item => (
        <div className="text-[14px] leading-[34px] text-center text-[#9BA2AE] tracking-tighter">{item}</div>
      ))}
    </div>
  )
}

export default CategoryItem