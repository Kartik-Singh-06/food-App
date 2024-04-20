import { useContext, useState } from "react"
import { ItemContext } from "../utils/Context"
import Button from "./Partials/Button";


const BestPlace = () => {
const [item]= useContext(ItemContext)
const name = item?.cards[6]?.card?.card;
const data = item?.cards[6]?.card?.card?.brands;
const[visibleButton,setVisibleButton] = useState(7)


const handleButtonClick =()=>{
  setVisibleButton(prev => (prev ,data.title)); 
}



  return item && (
    <>
     <div className="max-w-screen-xl mx-auto mb-7 ">
      <div className="mb-6 font-bold text-3xl">
        <h1>{name.title}</h1>
      </div>
        <div className="flex flex-wrap justify-center">
        {
          data.slice(0,visibleButton).map((item,index)=>(
            <Button key={index} value={item} />
          ))
        }
        {data.length > visibleButton && (
          <button className="w-[20%] shadow-lg text-center text-[#414141] cursor-pointer rounded-xl m-5 text-sm bg-zinc-100 py-4 font-semibold" onClick={handleButtonClick}>Show More..</button>
        )}
      
        </div>
     </div>
    </>
  )
}

export default BestPlace