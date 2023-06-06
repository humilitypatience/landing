import Image from "next/image";
import { UserContext } from "../../../app/page";
import { useContext } from "react";
export default function () {
  const deviceWidth = useContext(UserContext);
  if (deviceWidth >= 360) {
    return (
      <div
        className="
        order-1 
        grow-1 
        flex-none 
        w-[588.5px] 
        h-[501px] 
        "
      >
        {/* retangle 5822 */}
        <div
          className=" 
          absolute
          left-[53.4%]
          right-[22.88%]
          top-[56.63%]
          bottom-[3.65%]
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
          left-[64.28%]
          right-[0.76%]
          top-[19.53%]
          bottom-[22.04%]
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
          w-[137px]
          h-[144px]
          left-[762px]
          top-[57px]
          "
        >
          <svg
            width="139"
            height="144"
            viewBox="0 0 139 144"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="
            hidden
            min-[360px]:block"
          >
            <path
              d="M138.053 72C138.053 111.765 107.257 144 69.2677 144C31.2784 144 0.481934 111.765 0.481934 72C0.481934 32.2355 31.2784 0 69.2677 0C107.257 0 138.053 32.2355 138.053 72ZM8.28124 72C8.28124 107.256 35.5858 135.836 69.2677 135.836C102.95 135.836 130.254 107.256 130.254 72C130.254 36.7442 102.95 8.16376 69.2677 8.16376C35.5858 8.16376 8.28124 36.7442 8.28124 72Z"
              fill="#6366F0"
              fillOpacity="0.2"
            />
            <path
              d="M117.036 72C117.036 99.6142 95.6498 122 69.2684 122C42.8869 122 21.5005 99.6142 21.5005 72C21.5005 44.3858 42.8869 22 69.2684 22C95.6498 22 117.036 44.3858 117.036 72ZM29.9051 72C29.9051 94.7556 47.5286 113.203 69.2684 113.203C91.0081 113.203 108.632 94.7556 108.632 72C108.632 49.2444 91.0081 30.7973 69.2684 30.7973C47.5286 30.7973 29.9051 49.2444 29.9051 72Z"
              fill="#6366F0"
              fillOpacity="0.2"
            />
          </svg>
          <svg
            className="
            min-[360px]:hidden"
            width="78"
            height="78"
            viewBox="0 0 78 78"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M77.2179 38.9462C77.2179 60.4556 60.1059 77.8924 38.9971 77.8924C17.8884 77.8924 0.776367 60.4556 0.776367 38.9462C0.776367 17.4368 17.8884 0 38.9971 0C60.1059 0 77.2179 17.4368 77.2179 38.9462ZM5.11005 38.9462C5.11005 58.0167 20.2818 73.4764 38.9971 73.4764C57.7125 73.4764 72.8842 58.0167 72.8842 38.9462C72.8842 19.8757 57.7125 4.41594 38.9971 4.41594C20.2818 4.41594 5.11005 19.8757 5.11005 38.9462Z"
              fill="#6366F0"
              fillOpacity="0.2"
            />
            <path
              d="M65.5405 38.9459C65.5405 53.8829 53.6571 65.9918 38.9983 65.9918C24.3394 65.9918 12.4561 53.8829 12.4561 38.9459C12.4561 24.0088 24.3394 11.8999 38.9983 11.8999C53.6571 11.8999 65.5405 24.0088 65.5405 38.9459ZM17.126 38.9459C17.126 51.2548 26.9186 61.2332 38.9983 61.2332C51.078 61.2332 60.8705 51.2548 60.8705 38.9459C60.8705 26.6369 51.078 16.6585 38.9983 16.6585C26.9186 16.6585 17.126 26.6369 17.126 38.9459Z"
              fill="#6366F0"
              fillOpacity="0.2"
            />
          </svg>
        </div>
        {/* elipse 3894 */}
        <div
          className="
          absolute 
          w-[245.53px]
          h-[257px]
          left-[1019.47px]
          bottom-[0px]
          z-[-1]
          "
        >
          <svg
            width="246"
            height="257"
            viewBox="0 0 246 257"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M246 128.5C246 199.469 191.036 257 123.236 257C55.4357 257 0.472656 199.469 0.472656 128.5C0.472656 57.5314 55.4357 0 123.236 0C191.036 0 246 57.5314 246 128.5ZM14.3923 128.5C14.3923 191.422 63.1233 242.43 123.236 242.43C183.349 242.43 232.08 191.422 232.08 128.5C232.08 65.5782 183.349 14.57 123.236 14.57C63.1233 14.57 14.3923 65.5782 14.3923 128.5Z"
              fill="#F0F4F8"
            />
            <path
              d="M208.741 128.5C208.741 177.929 170.46 218 123.237 218C76.0141 218 37.7324 177.929 37.7324 128.5C37.7324 79.0705 76.0141 39 123.237 39C170.46 39 208.741 79.0705 208.741 128.5ZM52.7766 128.5C52.7766 169.233 84.3228 202.253 123.237 202.253C162.151 202.253 193.697 169.233 193.697 128.5C193.697 87.7674 162.151 54.7472 123.237 54.7472C84.3228 54.7472 52.7766 87.7674 52.7766 128.5Z"
              fill="#F0F4F8"
            />
          </svg>
        </div>
      </div>
    );
  } else {
    return (
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
    );
  }
}