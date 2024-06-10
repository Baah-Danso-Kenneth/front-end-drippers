import { toast } from "react-toastify"
import Spinner from "../../components/Spinner"
import { useGetFashionInspoQuery } from "../../redux/RTKQueries/FashionStyle/fashionInspo"
import { FashionItem } from "../../types/fashion.interfaces"
import { useState } from "react"

const MEN_CATEGORY = 'men'

function MenPage() {
  const [isHover, setIsHover] = useState<boolean>(false)
  const {data, isLoading, error} = useGetFashionInspoQuery(undefined)
  const menDataItems = data ? data.filter((item: FashionItem)=>item.styles.category.name === MEN_CATEGORY) : []

  return (
    <div>
      {isLoading && (<Spinner/>)}
      {error && toast.error('Something went wrong')}

          { menDataItems.length > 0 ? (
            menDataItems.map((obj: FashionItem)=>{
              return(
                <div>
                  <p>{obj.title}</p>
                  <p>{obj.styles.category.name}</p>

                  <div onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)}>
                    {obj.images.map(({front_image, back_image})=>{
                      return(
                        <div>
                          <img src={isHover ? back_image : front_image} alt={isHover ? `${back_image}.text` : `${front_image}`} />
                        </div>
                      )
                    })}
                  </div>
                </div>  
              )
            })
          ) : " wild"} 

          </div>
  )
}

export default MenPage