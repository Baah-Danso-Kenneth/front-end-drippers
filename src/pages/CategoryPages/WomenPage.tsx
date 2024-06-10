//import { useGetFashionInspoQuery } from "../../redux/RTKQueries/FashionStyle/styleApi";

import { useState } from "react";
import Spinner from "../../components/Spinner";
import { useGetFashionInspoQuery } from "../../redux/RTKQueries/FashionStyle/fashionInspo";
import { FashionItem } from "../../types/fashion.interfaces";

import { toast } from "react-toastify";


const WOMEN_CATEGORY = 'women'

function WomenPage() {
  const { data, error, isLoading } = useGetFashionInspoQuery(undefined);
  const [isHovered, setHovered] = useState<boolean>(false)

  const womenItems = data ? data.filter((item: FashionItem) => item.styles.category.name === WOMEN_CATEGORY) : [];
  

  return (
    <div>
      {error && toast.error("Something happened")}
      {isLoading && (
        <div>
          <Spinner />
        </div>
      )}

      { womenItems.length > 0 ? (womenItems.map(( obj: FashionItem)=>{
        return(
          <div  key={obj.id}>
            <p>{obj.title}</p>
            <p>{obj.styles.category.name}</p>

            <div onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)} className="w-16">
              {obj.images.map(({front_image, back_image})=>{
                return(
                    <img src={isHovered ? back_image : front_image} alt={isHovered ? `${back_image}.text` : `${front_image}.text`}/>
                )
              })}
            </div>

          </div>
        )
      })) : <div>Women details not found</div>}

    </div>
  );
}

export default WomenPage;
