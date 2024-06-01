import { useEffect, useState } from "react"
import { CategoryProps } from "../../../../types/regular.interface"
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_API_URL || " "
const CATEGORY = "v1/categories"


function Categories() {
  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const navigate = useNavigate()

  useEffect(()=>{
    axios.get(`${BASE_URL}${CATEGORY}`)
    .then((response)=>{
        setCategories(response.data);
    })
    .catch(()=>{
      toast.error('yawa')
    })
  },[]);


  const handleCategoryClick=(name: string)=>{
    const path= `/welcome/drip/${name.toLowerCase()}`;
    navigate(path);
  }

  return (
    <div className='mx-10 pt-5 pb-20'>
    <div className='grid grid-cols-3 gap-10'>
        {categories.map(({id, name, image})=>{
            return(
                <div key={id} className='relative' onClick={()=>handleCategoryClick(name)}>
                    <div className='border'>
                      <img className="w-full h-[250px] object-cover" src={image} alt={`${name}${id}`} />
                    </div>

                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl uppercase'>
                      <p>{name}</p>
                    </div>
                </div>

            )
        })}
    </div>
    </div>
  )
}

export default Categories