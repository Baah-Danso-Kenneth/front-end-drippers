import { NewsProps } from "../../../types/regular.interface"
import Img1 from '../../../assets/regularImg/model_1.jpg';
import Img2 from '../../../assets/regularImg/model_2.jpg';

const news: NewsProps[] = [
    {
     id:1,
     image: Img1,
     title: 'photograper as lee brings tradition and style to the world',
     notification: 'culture',
     description: 's that dot the area, a small, unmarked gallery buzzes with activity. As the nearby factories close their doors and the street lamps dim, a diverse crowd gathers inside the unassuming space. They’re here to celebrate New York and Seoul-based photographer Peter Ash Lee’s first solo exhibition in'
    },
    {
    id:2,
    image: Img2,
    title: 'photograper as lee brings tradition and style ',
    notification: 'evolve',
    description: 's that dot the area, a small, unmarked gallery buzzes with activity. As the nearby factories close their doors and the street lamps dim, a diverse crowd gathers inside the unassuming space. They’re here to celebrate New York and Seoul-based photographer Peter Ash Lee’s first solo exhibition in'
    }
]

function Stories() {
  return (
    <div>
           <div>
        {news.map((info)=>{
            return(
                <div className="flex mb-10">
                  <div key={info.id} className="w-6/12">
                    <img className=" w-[500px] h-[350px] object-cover" src={info.image} alt={`${info.id}`} />
                  </div>

                  <div className="ml-5 space-y-5 w-6/12">
                    <h1 className="text-3xl">{info.title}</h1>
                    <p className="">{info.notification}</p>
                    <p className="">{info.description}</p>
                  </div>
                  </div>
            )
        })}
    </div>
     </div>
  )
}

export default Stories