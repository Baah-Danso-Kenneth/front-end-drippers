import MaskUp from '../../../assets/regularImg/mask-up.jpeg';
import Up1 from '../../../assets/regularImg/ciage-belt.jpg';
import Up2 from '../../../assets/regularImg/ciaga.jpg';
import Up3 from '../../../assets/regularImg/ciaga1.jpg';
import Up4 from '../../../assets/regularImg/ciaga2.jpg';

const note=[
    {
        id:1,
        title:'ASHLEY WILLIAMS PIONEERED GIRLHOOD FASHION—NOW SHE’S BACK TO HERALD ITS NEXT ERA',
        image:MaskUp,
        type:'Fashion',
        date:'May 22',
    }
]

const trends=[
    {
        id:1,
        image:Up1,
        title:'photograper as lee brings tradition and style to the',
        type:'fashion'
    },
    {
        id:2,
        image:Up2,
        title:'photograper as lee brings tradition and style to the',
        type:'fashion'
    },
    {
        id:3,
        image:Up3,
        title:'photograper as lee brings tradition and style to the',
        type:'fashion'
    },
    {
        id:4,
        image:Up4,
        title:'photograper as lee brings tradition and style to the',
        type:'fashion'
    }
]

function Trends() {
  return (
    <div className="flex mb-10">
        <div className="w-5/12">
            {note.map(({id,date,image, type, title})=>{
                return(
                    <div key={id} className='space-y-5'>
                        <div >
                                <img className='h-[350px] object-cover' src={image} alt={`${id}`} />
                            </div>
                        <h1>{title}</h1>
                        <div className='flex gap-2'>
                            <p>{type}</p>
                            <p>{date}</p>
                        </div>
                    </div>
                )
            })}
        </div>

        <div className="w-7/12">
            {trends.map(({id, image, title, type})=>{
                return(
                    <div className='ml-5 flex items-center border-t-2 border-b-2'>
                        <div key={id}>
                            <img src={image} alt={`${id}`} />
                        </div>

                        <div className='space-y-10'>
                            <p>{title}</p>
                            <p>{type}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Trends