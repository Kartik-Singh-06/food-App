import { useContext, useRef } from "react";
import { ItemContext } from "../../utils/Context";
import MindShimmer from "../Shimmer/MindShimmer";
import { Link } from "react-router-dom";

const MindSection = () => {
  const [item] = useContext(ItemContext);
  const scroll = useRef(null);
  const mind = item?.cards[0].card?.card?.gridElements?.infoWithStyle?.info;

  const scrollLeft = () => {
    if (scroll.current) {
      scroll.current.scrollLeft -= 1100;
    }
  };
  
  const scrollRight = () => {
    if (scroll.current) {
      scroll.current.scrollLeft += 1100;
    }
  };

  return (
    item ? (
      
       <div className="max-w-screen-xl mt-20  border-b-[1px] py-4  px-6 mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="mb-6 font-bold text-3xl ">What's on your mind?</h1>
          <div className=" ">
            <button
              onClick={scrollLeft}
              className="bg-slate-300   hover:bg-slate-400 p-2 mr-3 rounded-full"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                aria-hidden="true"
                strokeColor="rgba(2, 6, 12, 0.92)"
                fillColor="rgba(2, 6, 12, 0.92)"
              >
                <path
                  d="M7.46869 3.43394C7.79171 3.13249 8.29794 3.14998 8.59939 3.473C8.90083 3.79602 8.88334 4.30225 8.56033 4.60369L5.0839 7.84795C4.94511 7.97748 4.82252 8.0921 4.71414 8.19502L15.0937 8.19502C15.5355 8.19502 15.8937 8.5532 15.8937 8.99502C15.8937 9.43685 15.5355 9.79502 15.0937 9.79502L4.6665 9.79502C4.78625 9.90939 4.92436 10.0386 5.08389 10.1875L8.51791 13.3922C8.84092 13.6937 8.8584 14.1999 8.55695 14.5229C8.2555 14.8459 7.74927 14.8634 7.42626 14.5619L3.95463 11.3221C3.54648 10.9413 3.18179 10.601 2.92647 10.2871C2.64873 9.94573 2.41671 9.53755 2.41672 9.01769C2.41672 8.49783 2.64874 8.08965 2.92648 7.74824C3.18181 7.43439 3.54649 7.09412 3.95465 6.7133L7.46869 3.43394Z"
                  fill="rgba(2, 6, 12, 0.92)"
                  fill-opacity="0.92"
                ></path>
              </svg>
            </button>
            <button
              onClick={scrollRight}
              className="bg-slate-300   hover:bg-slate-400 p-2 rounded-full"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                aria-hidden="true"
                strokeColor="rgba(2, 6, 12, 0.92)"
                fillColor="rgba(2, 6, 12, 0.92)"
              >
                <path
                  d="M10.5164 3.43418C10.1934 3.13273 9.68714 3.15022 9.3857 3.47324C9.08425 3.79626 9.10174 4.30249 9.42476 4.60394L12.9012 7.84819C13.04 7.97772 13.1626 8.09234 13.2709 8.19527L2.89142 8.19527C2.44959 8.19527 2.09142 8.55344 2.09142 8.99527C2.09142 9.4371 2.44959 9.79527 2.89142 9.79527L13.3186 9.79527C13.1988 9.90964 13.0607 10.0388 12.9012 10.1877L9.46718 13.3924C9.14416 13.6939 9.12668 14.2001 9.42813 14.5231C9.72958 14.8462 10.2358 14.8636 10.5588 14.5622L14.0304 11.3224C14.4386 10.9415 14.8033 10.6012 15.0586 10.2874C15.3364 9.94598 15.5684 9.5378 15.5684 9.01793C15.5684 8.49807 15.3363 8.08989 15.0586 7.74849C14.8033 7.43463 14.4386 7.09437 14.0304 6.71354L10.5164 3.43418Z"
                  fill="rgba(2, 6, 12, 0.92)"
                  fill-opacity="0.92"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="w-full h-[24vh]  gap-5 flex  overflow-x-auto overflow-y-hidden" ref={scroll}>
        {mind.map(item=>(
          <div className="w-[10vw] flex-shrink-0 rounded-full h-[10vw]" key={item.id}>
           <Link>
             <img className="rounded-full  mix-blend-multiply" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${item.imageId}`} alt="" />
           </Link>
          </div>
        ))}
        </div>
      </div>
     
    ): (<MindShimmer/>)
  )
};

export default MindSection;
