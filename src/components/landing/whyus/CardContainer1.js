import Card from "./Card";

const CardContainer1 = () => {
  const cardcontents = [
    {
      head: "Fast Effecient Service",
      text: "Get quotes within 2 hours, start your project immediately after paying your deposit, and watch your project unfold in real time."
    },
    {
      head: "Customization Library",
      text: "Explore pre-built customizations ready for immediate use. Plus, benefit from a revenue share if we list your project in our library."
    },
    {
      head: "Commitment to Your Success",
      text: "From our dedicated project success managers to our attractive offers for new signups, we're committed to delivering value at every step"
    }
  ]
  return (
    <div className="w-full flex flex-col items-start p-[8px] gap-[16px] min-[360px]:grow">
      {cardcontents.map(content => <Card {...content} />)}
    </div>
  )
}

export default CardContainer1