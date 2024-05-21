import { BsQuestionCircle } from "react-icons/bs";
import { PiCoatHangerFill } from "react-icons/pi";
import { FiMessageSquare } from "react-icons/fi";
import { QuestionProps } from "../../../../types/regular.interface";


const questions: QuestionProps[] = [
    {
        id: 1,
        icons: <BsQuestionCircle/>,
        title:'FAQs',
        description:'your qestions'
    },
    {
        id: 2,
        icons: <PiCoatHangerFill/>,
        title:'News',
        description:'Flavio ozone'
    },
    {
        id: 3,
        icons: <FiMessageSquare/>,
        title:'need help?',
        description:'contact our global customer service team'
    }
]

function Questions() {
  return (
    <div className="mx-10">
        <div className="grid grid-cols-3 gap-10 mb-20">
        {questions.map(({icons,id,title, description})=>{
            return(
                <div key={id} className="border p-5 rounded-md">
                 <div className="ml-3 space-y-3">
                  <span className="text-3xl">{icons}</span>
                  <h2>{title}</h2>
                  <p>{description}</p>
                </div>
                </div>
            )})}
        </div>
    </div>
  )
}

export default Questions