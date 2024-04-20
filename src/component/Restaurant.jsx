import { useContext, useEffect, useState } from "react"
import { ItemContext } from "../utils/Context"
import { CiSearch } from "react-icons/ci";
import Cards from "./Partials/Cards";
import CardShimmer from "./Shimmer/CardShimmer";


const Restaurant = () => {
   const [item] = useContext(ItemContext) 
   const [restro,setRestro] = useState([]) 
   const [filterRestro,setFilterRestro] = useState([]) 
   const [btnisActive,setBtnisActive] = useState(false)
   const [searchText , setSearchText] = useState()

   useEffect(()=>{
      setRestro(item?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setFilterRestro(item?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
   }
      ,[item])

      const RatingActive =()=>{
         const Data = filterRestro.filter((res)=>{
             return res.info.avgRating >= 4.0;
        });
        setFilterRestro(Data);
        setBtnisActive(true);
     }
 // Filter Button not active the it will render all restaurant.
     const RatingNotActive = ()=>{
         setFilterRestro(restro);
         setBtnisActive(false);
     }



     const handleSearch =()=>{
      let filtersearch = restro.filter((item)=>(item.info.name.toLowerCase().includes(searchText.toLowerCase()))) 
      setFilterRestro(filtersearch);
     }
 
  return item ?
   (<>
      <div className="max-w-screen-xl  border-b-[1px]  mb-6 mt-4 pt-4 pb-9 px-6 mx-auto">
         <div className="mb-6 font-bold  text-3xl">
             <h1>Restaurants with online food delivery in city</h1>
             <div className="flex mt-6 items-center justify-start gap-4 ">
            <div className="search-bar border-[1.3px] px-4 py-2 
            border-zinc-400 rounded-xl flex gap-2 justify-center items-center bg-white">
            <input type="search" className=" text-sm font-normal bg-transparent outline-none hover:border-green-600"
             placeholder="Search Restaurants..." value={searchText} onChange={(e)=>(setSearchText(e.target.value))} />
             <button onClick={handleSearch}  className="text-sm font-normal text-zinc-600 "><CiSearch /></button>
            </div>
             <button onClick={btnisActive ? RatingNotActive : RatingActive } className="text-xs font-normal border-[1px] py-2 px-3 rounded-full border-zinc-200 shadow-md bg-white text-zinc-500 hover:border-zinc-400">Top Restro</button>
             </div>
              <div className="flex flex-wrap gap-16 mt-10 justify-center">
              { filterRestro && filterRestro.map((item,index)=>(
                 <Cards key={item.info.id} value={item.info} />
              ))} 
              </div>
  
         </div>
      </div>
     </>):(<CardShimmer />);
  
}

export default Restaurant