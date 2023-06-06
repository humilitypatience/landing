import ListGroup from "./ListGroup";

const ProjectContainer = () => {
  const lists = [
    "Project Service Portal Access",
    "Project by project pricing",
    "_",
    ""
  ]
  return (
    <div className="flex flex-col items-start px-[24px] py-0 gap-[24px] order-1 min-[360px]:w-[392px] min-[360px]:px-[40px] min-[360px]:order-none">
      <div className="flex flex-col items-start p-0 gap-[16px]">
        {lists.map(list => <ListGroup text={list} />)}
      </div>
    </div>
  )
}

export default ProjectContainer