import { useContext } from "react";
import { UserContext } from "@/app/page";

import Titlebar from "./Titlebar.js";
import ProjectContainer from "./ProjectContainer.js";
import FutureContainer from "./FutureContainer.js";


export default () => {
  const deviceWidth = useContext(UserContext)
  return (
    <>
      <div className="absolute top-[10339px] left-[-7px] h-[1862px] w-[363px] flex flex-col items-start py-[40px] px-0 gap-[32px] rounded-[50px] min-[360px]:top-[6404px] min-[360px]:h-[1312px] min-[360px]:w-[1440px] min-[360px]:p-[88px] min-[360px]:rounded-[50px] min-[360px]:justify-between">
        <div className=" w-full flex flex-col items-center p-[8px] gap-[24px]">
          <Titlebar />
          {deviceWidth >= 360 ? (
            <>
              <div className="flex flex-row items-start px-[208px] py-[8px] gap-[48px] order-2">
                <ProjectContainer />
                <FutureContainer />
              </div>
            </>
          ) : (
            <FutureContainer />
          )}
        </div>
      </div>
    </>
  );
};
