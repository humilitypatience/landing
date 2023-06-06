import Libraryitem from "./LibraryItem"

const Library = () => {
  const itemContents = [
    {
      iconUrl: "/images/landing/view.png",
      head: "View",
      text: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      iconUrl: "/images/landing/pick.png",
      head: "Pick",
      text: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      iconUrl: "/images/landing/deploy.png",
      head: "Deploy",
      text: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ]
  return (
    <div className="w-full h-full flex flex-col items-start p-[8px] gap-[8px] grow">
      {itemContents.map(content => <Libraryitem {...content}/>)}
    </div>
  )
}

export default Library