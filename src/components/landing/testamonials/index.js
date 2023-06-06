import ImageBox from "./image-box";
import ImageBox1 from "./image-box1";
import SayBox from "./sayBox";
import SayBox1 from "./saybox1";
import { useContext } from "react";
import { UserContext } from "@/app/page";
export default function TestaMonials() {
  
  const deviceWidth = useContext(UserContext);
  return (
    <>
      {/*testamonials*/}
      <div className="flex flex-col justify-center items-start py-[40px] px-[16px] absolute top-[8966px] left-[-1px] right-[-2px] gap-[8px] min-[360px]:py-[8px]  min-[360px]:px-[88px]  min-[360px]:right-[-3px]  min-[360px]:left-[4px] min-[360px]:top-[5616px] min-[360px]:h-[788px]"> {/* Frame72 */}
       <div className="flex flex-col max-[360px]:justify-end justify-start items-start px-[16px] gap-[16px] w-full  min-[360px]:flex-row  min-[360px]:items-start  min-[360px]:p-0  min-[360px]:gap-[48px]" > 
        {/* group1000003951 */}   
        
        {
          deviceWidth > 360 ? <ImageBox /> :<ImageBox1 />
        }
        {
          deviceWidth > 360 ? <SayBox /> :<SayBox1 />
        }
      </div>
      </div>
    </>
  );
}
