
export default function({no, title, text}){
    return (
        
      <div className="w-full flex flex-row items-center py-[16px] pr-[40px] pl-[16px] gap-[24px] min-[360px]:w-[588.5px] min-[360px]:h-[104px] bg-white shadow-[5px_5px_20px_1px_rgba(115,115,115,0.05)] rounded-[60px] flex-none order-none self-stretch grow-0">
        {/* frame275 */}
        <div className="flex flex-row items-start p-0">
          {/* group100003946 */}
          <div className="relative w-[40px] h-[40px] min-[360px]:w-[72px] min-[360px]:w-[72px]">
            {/* ellpse 3898 */}
            <span className="absolute left-0 top-0 w-[40px] h-[40px]  min-[360px]:w-[72px] min-[360px]:h-[72px] bg-indigo-500 rounded-full"></span>
            <div className="absolute top-[8.5px] left-[11px] w-[18px] h-[22.5px] font-medium text-[16px] leading-[54px] flex items-center text-center text-white min-[360px]:w-[32.4px] min-[360px]:h-[40.5px] min-[360px]:left-[20px] min-[360px]:top-[15px] min-[360px]:text-[24px] min-[360px]:leading-[54px] justify-around">
              <span>{no}</span>
            </div>
          </div>
        </div>
    
        {/* frame274 */}
        <div className="w-full flex flex-col items-start p-0 gap-[8px] order-1 grow">
          <h3 className="w-full font-medium text-[16px] leading-[12px] text-[#374151]">
            {title}
          </h3>
          <div className="w-full text-[14px] leading-[26px] text-gray-500 order-1">
            {text}
          </div>
        </div>
      </div>
    )
}