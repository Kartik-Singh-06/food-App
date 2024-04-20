import { useContext } from "react";
import { ItemContext } from "../../utils/Context";

const MindShimmer = () => {
  
  return (
    <div className="max-w-screen-xl  border-b-[1px]   mt-4 py-4 pt-6 pb-8 mb-4 mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="mb-6 font-bold text-3xl ">What's on your mind?</h1>
         
        </div>
        <div className="flex gap-10 overflow-x-auto  ">
   
               <div className="w-[7vw] h-[7vw] rounded-full bg-zinc-300"></div>
               <div className="w-[7vw] h-[7vw] rounded-full bg-zinc-300"></div>
               <div className="w-[7vw] h-[7vw] rounded-full bg-zinc-300"></div>
               <div className="w-[7vw] h-[7vw] rounded-full bg-zinc-300"></div>
               <div className="w-[7vw] h-[7vw] rounded-full bg-zinc-300"></div>
               <div className="w-[7vw] h-[7vw] rounded-full bg-zinc-300"></div>
               <div className="w-[7vw] h-[7vw] rounded-full bg-zinc-300"></div>
               <div className="w-[7vw] h-[7vw] rounded-full bg-zinc-300"></div>
               <div className="w-[7vw] h-[7vw] rounded-full bg-zinc-300"></div>
     
        </div>
      </div>
    )
}

export default MindShimmer