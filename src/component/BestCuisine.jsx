import { useContext, useState } from "react";
import { ItemContext } from "../utils/Context";
import Button from "./Partials/Button";

const BestCuisine = () => {
  const [item] = useContext(ItemContext);
  const name = item?.cards[7]?.card?.card;
  const data = item?.cards[7]?.card?.card?.brands;

  const [visibleBtn, setVisibleButton] = useState(7);

  function handleClick() {
    setVisibleButton((prev) => (prev, data.title));
  }

  return item && (
    <>
      <div className="max-w-screen-xl mx-auto mb-7 ">
        <div className="mb-6 font-bold text-3xl">
          <h1>{name.title}</h1>
        </div>
        <div className="flex flex-wrap justify-center">
          {data.slice(0, visibleBtn).map((item, index) => (
            <Button key={index} value={item} />
          ))}
          {data.length > visibleBtn && (
            <button
              onClick={handleClick}
              className="w-[20%] shadow-lg text-center text-[#414141] cursor-pointer rounded-xl m-5 text-sm bg-zinc-100 py-4 font-semibold"
            >
              Show More...
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default BestCuisine;
