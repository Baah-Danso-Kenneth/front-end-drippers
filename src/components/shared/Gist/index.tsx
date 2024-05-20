import Stories from "./Stories"
import Trends from "./Trends"


function GistContent() {
  return (
    <div className="mx-10">
        <div className="flex gap-10">
         <div className="w-7/12">
           <Stories/>
          </div>
        <div className="w-5/12">
        <Trends/>
        </div>
        </div>
    </div>
  )
}

export default GistContent