
import QuestionIndex from "../Cards/Questions"
import CardDetails from "../Cards/Categories"
import InformationContent from "./InformationContent"
import NewsLetters from "../../NewsLetters"
import GistContent from "../Gist"


function ContentInformative() {
  return (
    <div>
        <InformationContent/>
        <CardDetails/>
        <GistContent/>
        <QuestionIndex/>
        <NewsLetters/>

    </div>
  )
}

export default ContentInformative