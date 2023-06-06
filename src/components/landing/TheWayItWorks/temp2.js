
import List_item from "./list_item";
import Image from "next/image";
export default ({list_data}) => {
  return (
    <div
      className="
          flex
          flex-col
          items-start
          p-0
          gap-[40px]
          w-full
          min-[360px]:flex-row
          min-[360px]:items-end
          min-[360px]:gap-[88px]
          relative
          "
    >
      {/* frame277 */}
      <div
        className="
            flex
            flex-col
            items-start
            p-0
            gap-[40px]
            max-w-[589px]
            w-full
            min-[360px]:gap-[24px]
            min-[360px]:grow
            min-[360px]:
            "
      >
        {/* frame 282 */}
        <div
          className="
              flex
              flex-row
              items-start
              p-[8px]
              gap-[8px]
            "
        >
          <h2
            className="
                font-bold
                text-[24px]
                leading-[54px]
                tracking-tight
                text-[#374151]
              "
          >
            The way it works
          </h2>
        </div>
        {/* imagebox */}
        <div className="min-[360px]:hidden w-[327px] h-[271px] flex-none order-1 self-stretch grow-1">
        {/* retangle 5822 */}
        <div
          className=" 
            absolute
            left-[0%]
            right-[49.19%]
            top-[24.02%]
            bottom-[64.49%]
            rounded-[14px]
          "
        >
          <Image
            src="/images/work_img_1.png"
            fill
            alert="work"
            className="w-full h-full rounded-[14px]"
            alt="Picture of the author"
          />
        </div>
        {/* image */}
        <div
          className="
            absolute
            left-[23.21%]
            right-[1.62%]
            top-[13.27%]
            bottom-[69.79%]
            rounded-[14px]
            "
        >
          <Image
            src="/images/work_img_2.png"
            fill
            className="w-full h-full rounded-[17px]"
            alt="Picture of the author"
          />
        </div>
        {/* elipse 3892 */}
        <div
          className="
            absolute 
            w-[76.44px]
            h-[77.89px]
            left-[47.78px]
            top-[110px]
            z-[-1]
            "
        >
          <svg
            width="137"
            height="140"
            viewBox="0 0 137 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M137.001 70.4918C137.001 108.88 106.461 140 68.7877 140C31.1144 140 0.574219 108.88 0.574219 70.4918C0.574219 32.1035 31.1144 0.983643 68.7877 0.983643C106.461 0.983643 137.001 32.1035 137.001 70.4918ZM8.30864 70.4918C8.30864 104.527 35.386 132.119 68.7877 132.119C102.189 132.119 129.267 104.527 129.267 70.4918C129.267 36.4562 102.189 8.86486 68.7877 8.86486C35.386 8.86486 8.30864 36.4562 8.30864 70.4918Z"
              fill="#F0F4F8"
            />
            <path
              d="M116.298 70.4914C116.298 97.2287 95.0272 118.904 68.7879 118.904C42.5485 118.904 21.2773 97.2287 21.2773 70.4914C21.2773 43.754 42.5485 22.0791 68.7879 22.0791C95.0272 22.0791 116.298 43.754 116.298 70.4914ZM29.6366 70.4914C29.6366 92.5244 47.1652 110.386 68.7879 110.386C90.4105 110.386 107.939 92.5244 107.939 70.4914C107.939 48.4583 90.4105 30.597 68.7879 30.597C47.1652 30.597 29.6366 48.4583 29.6366 70.4914Z"
              fill="#F0F4F8"
            />
          </svg>
        </div>
        {/* elipse 3894 */}
        <div
          className="
            absolute 
            w-[136.5px]
            h-[139px]
            left-[190.6px]
            top-[241.98px]
            z-[-1]
            "
        >
          <svg
            width="137"
            height="140"
            viewBox="0 0 137 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M137.001 70.4918C137.001 108.88 106.461 140 68.7877 140C31.1144 140 0.574219 108.88 0.574219 70.4918C0.574219 32.1035 31.1144 0.983643 68.7877 0.983643C106.461 0.983643 137.001 32.1035 137.001 70.4918ZM8.30864 70.4918C8.30864 104.527 35.386 132.119 68.7877 132.119C102.189 132.119 129.267 104.527 129.267 70.4918C129.267 36.4562 102.189 8.86486 68.7877 8.86486C35.386 8.86486 8.30864 36.4562 8.30864 70.4918Z"
              fill="#F0F4F8"
            />
            <path
              d="M116.298 70.4914C116.298 97.2287 95.0272 118.904 68.7879 118.904C42.5485 118.904 21.2773 97.2287 21.2773 70.4914C21.2773 43.754 42.5485 22.0791 68.7879 22.0791C95.0272 22.0791 116.298 43.754 116.298 70.4914ZM29.6366 70.4914C29.6366 92.5244 47.1652 110.386 68.7879 110.386C90.4105 110.386 107.939 92.5244 107.939 70.4914C107.939 48.4583 90.4105 30.597 68.7879 30.597C47.1652 30.597 29.6366 48.4583 29.6366 70.4914Z"
              fill="#F0F4F8"
            />
          </svg>
        </div>
      </div>

        {/* {Frame1000003964 } */}
        <div
          className="
              w-full
              flex
              flex-col
              items-start
              p-0
              gap-[16px]
              order-2
              flex-none
              self-stretch
              grow-0
              min-[360px]:order-1
            "
        >
          {/* frame273 */}
          {list_data.map((val, i) => {
            return <List_item no={i + 1} title={val.title} text={val.text} />;
          })}
        </div>
      </div>
    </div>
  );
};
