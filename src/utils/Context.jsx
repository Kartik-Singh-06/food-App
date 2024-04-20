import axios from "../utils/Axios";
import { createContext, useEffect, useState } from "react";

export const ItemContext = createContext()


const Context =(props)=>{
    const [item,setItem] = useState(null)
    const [menu,setMenu] = useState(null)
    const getItem = async() => {
        try{
             const {data} = await axios.get("/dapi/restaurants/list/v5?lat=27.8973944&lng=78.0880129&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")  
            console.log(data?.data);
             setItem(data?.data)
        }
        catch(err){
            console.error("Error :",err) 
    }
    }
    useEffect(()=>{
        getItem()
    },[])

    return(
        <ItemContext.Provider value={[item,setItem]}>
         {props.children}
        </ItemContext.Provider>
    )
}
export default Context;