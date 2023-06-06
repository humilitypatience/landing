import { useContext } from "react";
import { UserContext } from "../../../app/page";
import Temp1 from "./temp1";
import Temp2 from "./temp2";

export default () => {
  const deviceWidth = useContext(UserContext);
  const list_data = [
    {
      title: "Submit your request",
      text: "Through our innovative client service portal, we guarantee quotes within 2 hours, not 2 days.",
    },
    {
      title: "Receive quote",
      text: "Review your project quote sent back through the service portal.",
    },
    {
      title: "Quote confirmation",
      text: "Confirm your quote and apply payment, against the quote.",
    },
    {
      title: "Project begin",
      text: "Your project starts immediately after paying your deposit, and watch your project unfold in real time.",
    },
  ];
  return (
    <>
      {/*the way*/}
      <div
        className="
          absolute 
          top-[7893px]
          left-[1px]
          w-[359px]  
          p-[16px]  
          flex 
          flex-col 
          items-start 
          min-[360px]:p-[88px] 
          min-[360px]:gap-[8px] 
          min-[360px]:h-[788px] 
          min-[360px]:w-[1441px] 
          min-[360px]:top-[4828px] 
          min-[360px]:right-[-3px] 
          // min-[360px]:flex-row
        "
      >
        {/* Frame1000003962 */}
        {
          deviceWidth > 360 ?<Temp1 list_data={list_data}/> : <Temp2 list_data={list_data}/>
        }
      </div>
    </>
  );
};
