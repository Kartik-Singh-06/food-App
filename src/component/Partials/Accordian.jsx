
import { useState } from "react";
import AccordianMenu from "./AccordianMenu";


const Accordian = ({data}) => {
   
const [toggle,setToggle] = useState(false)

const HandleAccordian =()=>{
  setToggle(!toggle)
}
   
  console.log(data);
  return (
   <>
    <div className="w-full  my-5 py-5 px-2 rounded-lg shadow-inner cursor-pointer border-b-[1.2vw]  border-[#e3e3e4]">
    {/* font part */}
    <div className="flex justify-between font-semibold  items-center  " onClick={HandleAccordian} >
      <h1>{data?.card?.card?.title} ({data?.card?.card?.itemCards?.length})</h1>
       {toggle ? (<span><i className=" text-xl ri-arrow-up-wide-line"></i></span>) : (<span><i className=" text-xl ri-arrow-down-wide-line"></i></span>)}
    </div>

      {toggle && <AccordianMenu  data={data} /> }
    </div>
   </>
  )
}

export default Accordian