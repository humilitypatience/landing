import Carouselbtn from "./btn/carouselbtn";
import Circle from "./btn/circle";
export default ({ no, className }) => {
  let btngroup = [];
  for (let i = 1; i < 5; i++) {
    if (i == no) {
      btngroup.push(<Carouselbtn active={true} />);
    } else {
      btngroup.push(<Carouselbtn active={false} />);
    }
  }
  return (
    // frame1000003965
    <div className={className}>
      {/* carousel-btn group */}
      <div className="w-[97px] flex flex-row justify-between w-[129px] h-[11px]">
        {btngroup}
      </div>
      <div className="w-[146px] h-[61px] order-1" >
        <Circle/>
        <Circle dir={"right"}/>
      </div>
    </div>
  );
};
