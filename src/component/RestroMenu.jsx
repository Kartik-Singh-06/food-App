import { useEffect, useState } from "react";
import axios from "../utils/Axios";
import { useParams } from "react-router-dom";
import Switch from "react-switch";
import Accordian from "./Partials/Accordian";


const RestroMenu = () => {
  const { id } = useParams();
  const [checked, setChecked] = useState(false);
  const [menu, setMenu] = useState(null);
  

  const getRestro = async () => {
    const { data } = await axios.get(
      `/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.8973944&lng=78.0880129&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    console.log(data?.data);
    setMenu(data?.data);
  };

  useEffect(() => {
    getRestro();
  }, []);

  if (menu === null) {
    return <h1>No value Present</h1>;
  }
  
  const {
    name,
    cuisines,
    areaName,
    sla,
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
    expectationNotifiers,
  } = menu?.cards[2]?.card?.card?.info

  const item = menu?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers;

  const category = menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((filterCategory)=>(
    filterCategory?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  ))

  const handleChange = () => {
    setChecked(!checked);   
  };
  return (
    <>
      <div className="py-[10vw] px-80 bg-gradient-to-b from-[#f2f1f1ed] to-white">
        <div className="flex justify-between border-b-dot pb-4">
          <div>
            <h1 className="text-[1.7vw] text-[#353434] font-bold">{name}</h1>
            <p className="text-sm mt-1 text-zinc-500">{cuisines.join(", ")}</p>
            <p className="text-sm text-zinc-500">
              {areaName + ", "}
              {sla.lastMileTravelString}
            </p>
          </div>
          <div className="border-2 py-2 px-2 text-center text-green-700 rounded-md shadow-lg">
            <h1 className=" flex pb-2 color font-bold gap-1 justify-center align-middle text-center  border-b-2">
              <span className="mt-1  border-zinc-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </span>
              {avgRatingString}
            </h1>
            <h2 className="text-xs font-semibold mt-1 text-zinc-500">
              {totalRatingsString}
            </h2>
          </div>
        </div>
        <div className="flex gap-2  border-b-[1.4px] border-zinc-400 border-dashed pb-[1.5vw]">
          {/* <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/${expectationNotifiers[0]?.icon?.imageId}`}
            alt=""
          />
          <h1 className="text-zinc-500 text-sm">
            {expectationNotifiers[0]?.enrichedText}
          </h1> */}
        </div>
        <div className="flex gap-10  mt-4">
          <div>
            <h1 className="flex gap-1 text-[#353434] font-bold text-center align-middle">
              <span className="mt-1">
                <svg
                  class="RestaurantTimeCost_icon__8UdT4"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <circle
                    r="8.35"
                    transform="matrix(-1 0 0 1 9 9)"
                    stroke="#3E4152"
                    stroke-width="1.3"
                  ></circle>
                  <path
                    d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z"
                    fill="#3E4152"
                  ></path>
                </svg>
              </span >
              {sla.slaString}
            </h1>
          </div>
          <div>
            <h2 className="flex text-[#353434] gap-1 font-bold text-center align-middle">
              <span className="mt-1">
                <svg
                  class="RestaurantTimeCost_icon__8UdT4"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <circle
                    cx="9"
                    cy="9"
                    r="8.25"
                    stroke="#3E4152"
                    stroke-width="1.5"
                  ></circle>
                  <path
                    d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z"
                    fill="#3E4152"
                  ></path>
                </svg>
              </span>
              {costForTwoMessage}
            </h2>
          </div>
        </div>
        {/*Offer Section */}
        <div className=" flex items-center w-full h-[7vw] gap-6 mb-10  overflow-x-auto">
          {item.map((item, index) => (
            <div key={index} className="w-full">
              <div className="border-2 w-[15vw]   cursor-pointer px-4 shadow-lg  text-center rounded-md py-2 ">
                <h1 className=" font-medium text-[#504f4f]">
                  {item.info.header}
                </h1>
                <div className="flex w-full items-center justify-center text-center  mt-1 pb-1">
                  <h5 className=" font-semibold text-zinc-500 text-xs mr-1 ">
                    {item?.info?.couponCode === "NO CODE REQUIRED"
                      ? "NO CODE"
                      : item?.info?.couponCode}
                  </h5>
                  <h5 className="font-semibold text-zinc-500 text-xs">
                    {"| "}
                    {item?.info?.description}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* tooggle Switch */}
        {/* <div className="flex gap-2 border-b pb-8">
          <h1 className="font-semibold text-[#504f4f]">Veg Only : </h1>
          <Switch
            checked={checked}
            onChange={handleChange}
            
            inputProps={{ "aria-label": "controlled" }}
            size="small"
          /> 
        </div> */}
          {category?.map((item,index)=>(
            <Accordian key={index} data={item}  />
          ))}
      </div>
    </>
  );
};

export default RestroMenu;
