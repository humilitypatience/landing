export default ({ dir }) => {
  let ele = (
    <button className="absolute bg-white rounded-full w-[61px] h-[61px] left-[153px] top-[24px]">
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
  );
  if (dir === "right")
    ele = (
      <button className="absolute rounded-full bg-white w-[61px] h-[61px] left-[238px] top-[24px]">
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
    );
  return ele;
};
