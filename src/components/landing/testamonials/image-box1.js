import Image from "next/image";

export default () => {
  return (
    <div
      className="
        w-[226px]
        h-[367.25px]
        relative
        min-[360px]:w-[320px]
        min-[360px]:h-[520px]
        "
    >
      {/* image */}
      <div
        className="
        absolute
        w-[172px]
        h-[172px]
        left-[70px]
        top-[0px]
        min-[360px]:w-[328px]
        min-[360px]:h-[520px]
          "
      >
        <svg width="172" height="172" viewBox="0 0 172 172" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M171.998 85.8096C171.998 133.201 133.58 171.619 86.1885 171.619C38.7972 171.619 0.378906 133.201 0.378906 85.8096C0.378906 38.4183 38.7972 0 86.1885 0C133.58 0 171.998 38.4183 171.998 85.8096ZM10.1085 85.8096C10.1085 127.827 44.1707 161.89 86.1885 161.89C128.206 161.89 162.269 127.827 162.269 85.8096C162.269 43.7918 128.206 9.72957 86.1885 9.72957C44.1707 9.72957 10.1085 43.7918 10.1085 85.8096Z" fill="#C6D1FD" fill-opacity="0.1"/>
      <path d="M146.575 85.8091C146.575 118.769 119.698 145.487 86.5431 145.487C53.3887 145.487 26.5117 118.769 26.5117 85.8091C26.5117 52.8497 53.3887 26.1309 86.5431 26.1309C119.698 26.1309 146.575 52.8497 146.575 85.8091ZM37.074 85.8091C37.074 112.969 59.2221 134.987 86.5431 134.987C113.864 134.987 136.012 112.969 136.012 85.8091C136.012 58.6488 113.864 36.631 86.5431 36.631C59.2221 36.631 37.074 58.6488 37.074 85.8091Z" fill="#C6D1FD" fill-opacity="0.2"/>
      <circle cx="85.8375" cy="85.4567" r="16.2438" fill="#C6D1FD"/>
      </svg>
      

        {/* <Image fill src="/images/circle-point.png" /> */}
      </div>

      <div className="absolute w-[218px] h-[295px] top-[72px] left-[16px]">
        {/* group 1000003920 */}
        <div
          className="
            absolute 
            w-[36px] 
            h-[28px] 
            left-[198.2px]
            top-[0px]
            rounded-[5px]
            min-[360px]:w-[51px]
            min-[360px]:h-[40px]
            min-[360px]:top-[102px]
             "
        >
          <Image alt="hand" src="/images/hand.png" fill />
        </div>

        {/* rectangle 5836 */}
        <div
          className="
            absolute 
            w-[210.23px] 
            h-[272.6px]
            left-[0px]
            top-[22.6px]
            rounded-[149px]
            min-[360px]:relative
            min-[360px]:w-[320px]
            min-[360px]:h-[418px]
            min-[360px]:top-[182px]
            min-[360px]:left-0
            "
        >
          <Image alt="client" fill src="/images/client.png" />
        </div>
      </div>
    </div>
  );
};
