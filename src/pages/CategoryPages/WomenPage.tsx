//import { useGetFashionInspoQuery } from "../../redux/RTKQueries/FashionStyle/styleApi";

import { useState } from "react";
import Spinner from "../../components/Spinner";
import { useGetFashionInspoQuery } from "../../redux/RTKQueries/FashionStyle/fashionInspo";
import { FashionItem } from "../../types/fashion.interfaces";

import { toast } from "react-toastify";

// const WOMEN_CATEGORY = 'women'

function WomenPage() {
  const { data, error, isLoading } = useGetFashionInspoQuery(undefined);
  const [isHovered, setHovered] = useState<boolean>(false)

  // const womenItems = data ? data.filter((item: FashionItem) => item.styles.category.toString() === WOMEN_CATEGORY) : [];
  

  
  return (
    <div>
      {error && toast.error("Something happened")}
      {isLoading && (
        <div>
          <Spinner />
        </div>
      )}

      {data.map((obj: FashionItem)=>{
        return(
          <div key={obj.id}>
              <h2>{obj.title}</h2>
              <p className="text-xs">{obj.styles.title}</p>
              {obj.images.map((image)=>{
                return(
                  <div onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}>
                    <img src={isHovered ? image.back_image : image.front_image} alt={`${image.front_image}.text`} />
                  </div>
                )
              })}
              <p>{obj.description}</p>
          </div>
        )
      })}
    </div>
  );
}

export default WomenPage;
