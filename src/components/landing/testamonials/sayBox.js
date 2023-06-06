import Titlebar from "./titlebar";
import Subtitle from "./subtitle";
import Textbar from "./textbar";
import Carouselbtn from "./btn/carouselbtn";
import Circle from "./btn/circle";
export default () => {
  return (
    // Frame 1000003969
    <div
      className="
        justify-center 
        items-start
        "
    >
      <Titlebar />
      <Textbar
        className="
        flex
        flex-row
        items-start
        p-[8px]
        gap-[8px]
        order-4
        h-[211px]
        w-[895px]
        text-[#6B7280]
            "
        text={
          "\"With Deployment Hero's expertise, we transformed our siloed operations into a streamlined, efficient system. They guided us seamlessly through the ERP implementation process,tailoring a solution to our unique needs. Now, our data is integrated, enhancing decision-making and operational efficiency.Their training and support have been exceptional, ensuring a smooth transition and ongoing success. I wholeheartedly recommend Deployment Hero - they're not just a vendor, but a true partner in business transformation.\""
        }
      />
      <div className="flex flex-row items-center p-0 w-[895px] h-[69px] orlder-3 justify-between">
        <div className="flex flex-col items-start gap-[18px] grow-1">
          <div className="w-[316px] h-[41px] flex flex-row justify-between items-center">
            <div className="w-[22px] h-[1px] bg-black">

            </div>
            <div className="font-medium text-[18px] leading-[40px] text-gray-800">
            Jane Smith COO, XYZ Industries
            </div>
          </div>
          <div className="flex flex-row gap-2 justify-between w-[97px] h-[11px] order-1">
            <Carouselbtn active={true} />
            <Carouselbtn active={false} />
            <Carouselbtn active={false} />
            <Carouselbtn active={false} />
            <Carouselbtn active={false} />
          </div>
        </div>
        {/* arrow btns */}
        <div className="grow-0 w-[141px] h-[61px] order-1 flex flex-row justify-between">
          <button className="bg-white rounded-full w-[61px] h-[61px]">
            <svg
              width="61"
              height="62"
              viewBox="0 0 61 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="30.5"
                cy="30.5"
                r="29.75"
                transform="matrix(-1 0 0 1 61 0.679688)"
                stroke="#6B7280"
                stroke-width="1.5"
              />
              <path
                d="M39 31.1797H22M22 31.1797L28.5 24.6797M22 31.1797L28.5 38.1797"
                stroke="#6B7280"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button className="rounded-full bg-white w-[61px] h-[61px]">
            <svg
              width="61"
              height="62"
              viewBox="0 0 61 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="30.5"
                cy="31.1797"
                r="29.5"
                stroke="#6366F0"
                stroke-width="2"
              />
              <path
                d="M22 31.1797H39M39 31.1797L32.5 24.6797M39 31.1797L32.5 38.1797"
                stroke="#6366F0"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
