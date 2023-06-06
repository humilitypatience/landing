import Card from "./Card";

const CardContainer2 = () => {
  const cardcontents = [
    {
      head: "Transparent, Fair Pricing",
      text: "With our fixed pricing model and 25% deposit system, you know exactly what you're paying for."
    },
    {
      head: "Revenue Share Options",
      text: "Our unique business model allows you to opt for a revenue share, turning your project expenses into potential income."
    },
    {
      head: "Intuitive Client Service Portal",
      text: "Easy project initiation and automated acceptance criteria upload features ensure a hassle-free experience."
    }
  ]
  return (
    <div className="w-full flex flex-col items-start p-[8px] gap-[16px] order-1 min-[360px]:grow">
      {cardcontents.map(content => <Card {...content} />)}
    </div>
  )
}

export default CardContainer2