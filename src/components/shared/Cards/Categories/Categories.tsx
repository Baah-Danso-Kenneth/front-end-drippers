import CategoryImage1 from '../../../../assets/styles/category1.jpg'
import CategoryImage2 from '../../../../assets/styles/category2.jpg'
import CategoryImage3 from '../../../../assets/styles/category.jpg'
import { CategoryProps } from '../../../../types/regular.interface';


const categoriesDummyData: CategoryProps[] = [
    {
        id: 1,
        department: 'Womenwear',
        image: CategoryImage1
    },
    {
        id: 2,
        department: 'menwear',
        image: CategoryImage2
    },
    {
        id: 3,
        department: 'kidswear',
        image: CategoryImage3
    }
]



function Categories() {
  return (
    <div className='mx-10 pt-5 pb-20'>
    <div className='grid grid-cols-3 gap-10'>
        {categoriesDummyData.map(({id, department,image})=>{
            return(
                <div key={id} className='relative'>
                    <div className='border'>
                      <img className="w-full h-[250px] object-cover" src={image} alt={`${department}${id}`} />
                    </div>

                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl uppercase'>
                      <p>{department}</p>
                    </div>
                </div>

            )
        })}
    </div>
    </div>
  )
}

export default Categories