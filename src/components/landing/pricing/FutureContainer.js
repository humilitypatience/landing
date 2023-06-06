import ListGroup from "./ListGroup";

const FutureContainer = () => {
  const lists = [
    "15% Revenue share of customised projects used",
    "Dedicated testing sandbox for verifying the customizations on any project",
    "Dedicated success manager",
    "Two scoping sessions per month",
    "Two priority projects per month",
    "Unlimited use of automatic Acceptance Criteria generation by ChatGPT",
    "Invitation to a Microsoft Teams channel for direct communication",
    "Option to invite multiple users to the platform to post projects",
    "Project Service Portal Access",
    "No Deposits required",
    "Access to deployment hero deployment management software to automate the release and deployments of your customisations"
  ]
  return (
    <div className="flex flex-col items-start px-[16px] py-0 gap-[24px] order-2 min-[360px]:w-[392px] min-[360px]:order-1">
      {lists.map(list => <ListGroup text={list} />)}
    </div>
  )
}

export default FutureContainer