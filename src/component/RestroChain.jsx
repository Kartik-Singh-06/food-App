import { useContext, useRef } from "react";
import { ItemContext } from "../utils/Context";
import { info } from "autoprefixer";
import { Link } from "react-router-dom";

const RestroChain = () => {
  const [item] = useContext(ItemContext);
  const scroll = useRef(null);
  const chain =
    item?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  const scrollLeft = () => {
    if (scroll.current) {
      scroll.current.scrollLeft -= 1000;
    }
  };

  const scrollRight = () => {
    if (scroll.current) {
      scroll.current.scrollLeft += 1000;
    }
  };

  return (
    item && (
      <div className="max-w-screen-xl  border-b-[1px]  mb-6 mt-4 pt-4 pb-8 px-6 mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="mb-6 font-bold text-3xl ">
            Top restaurant chains in City
          </h1>
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
                  fillOpacity="0.92"
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
                  fillOpacity="0.92"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          className="flex mt-9 gap-5 overflow-x-auto overflow-y-hidden "
          ref={scroll}
        >
          {chain.map((item) => (
            <Link to={`/restaurant/${item.info.id}`} key={item.info.id} className="flex-shrink-0 w-[30%] ">
              <div className="  hover:scale-95 cursor-pointer w-full h-80">
                <div
                  className="img w-full  h-60 relative bg-green-500 rounded-lg"
                  style={{
                    background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2),rgba(0,0,0,.7)),url(https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.info.cloudinaryImageId}
                  )`,
                    backgroundPosition: "50% 45%",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    height: "66%",
                  }}
                >
                  <h1 className="absolute w-[70%] text-center  font-black text-white text-xl bottom-0 left-[50%] -translate-x-[50%] -translate-y-[50%] ">
                    {" "}
                    {item.info.aggregatedDiscountInfoV3 &&
                      item.info.aggregatedDiscountInfoV3.header}{" "}
                    {item.info.aggregatedDiscountInfoV3 &&
                      item.info.aggregatedDiscountInfoV3.subHeader}
                  </h1>
                </div>
                <div className="mt-1">
                  <h1 className="font-semibold truncate  px-1 text-[1.3vw] mb-[1px]">
                    {item.info.name}
                  </h1>
                  <div className="flex px-1 items-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      role="img"
                      aria-hidden="true"
                      strokeColor="rgba(2, 6, 12, 0.92)"
                      fillColor="rgba(2, 6, 12, 0.92)"
                    >
                      <circle
                        cx="10"
                        cy="10"
                        r="9"
                        fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
                      ></circle>
                      <path
                        d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                        fill="white"
                      ></path>
                      <defs>
                        <linearGradient
                          id="StoreRating20_svg__paint0_linear_32982_71567"
                          x1="10"
                          y1="1"
                          x2="10"
                          y2="19"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#21973B"></stop>
                          <stop offset="1" stopColor="#128540"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                    <h3 className="font-semibold mr-[3px]">
                      {item.info.avgRating}
                    </h3>
                    <h3 className="font-semibold">25-30 mins</h3>
                  </div>
                  <p className="text-zinc-500 truncate px-1 text-base">
                    {item.info.cuisines.join(", ")}
                  </p>
                  <p className="text-zinc-500 px-1 text-base">
                    {item.info.areaName}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    )
  );
};

export default RestroChain;
