import QuestionIndex from "../Cards/Questions"
import InformationContent from "./InformationContent"
import NewsLetters from "../../NewsLetters"
import GistContent from "../Gist"


function ContentInformative() {
  return (
    <div>
        <InformationContent/>
        <GistContent/>
        <QuestionIndex/>
        <NewsLetters/>

    </div>
  )
}

export default ContentInformative