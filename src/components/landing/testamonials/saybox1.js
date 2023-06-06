import Titlebar from "./titlebar";
import BtnGroup from "./btn-group";
import Subtitle from "./subtitle";
import Textbar from "./textbar";
export default () => {
  return (
    // Frame 1000003969
    <div
      className="
        justify-center 
        items-start
        min-[360px]:w-[895px]
        min-[360px]:h-[520px]
        min-[360px]:left-[460px]
        min-[360px]:top-[81px]
        "
    >
      <Titlebar />
      <BtnGroup
        no={1}
        className="
        flex
        flex-row
        items-center
        py-[24px]
        gap-[24px]
        order-2
        relative
            "
      />
      <Subtitle
        className="
        order-3
                w-full
                h-[80px]
                "
      />
      <Textbar
        className="
        flex
        flex-row
        items-start
        p-[8px]
        gap-[8px]
        order-4
        text-gray-500
            "
        text={
          "\"With Deployment Hero's expertise, we transformed our siloed operations into a streamlined, efficient system. They guided us seamlessly through the ERP implementation process,tailoring a solution to our unique needs. Now, our data is integrated, enhancing decision-making and operational efficiency.Their training and support have been exceptional, ensuring a smooth transition and ongoing success. I wholeheartedly recommend Deployment Hero - they're not just a vendor, but a true partner in business transformation.\""
        }
      />
      <BtnGroup
        no={1}
        className="
        flex
        flex-row
        items-center
        py-[24px]
        gap-[24px]
        order-5
        relative
            "
      />
    </div>
  );
};
