import React from "react";
import {useDispatch , useSelector} from "react-redux";
import { addItem,setRestaurant,removeItem } from "../../utils/cartSlice";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestroMenu";
import Nofood from "/Nofood.jpg" 



const AccordianMenu = ({ data }) => {
  const restaurant = useSelector((store) => store.cart.restaurant);
  const selectedItems = useSelector((store) => store.cart.item);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { restaurantInfo } = useRestaurantMenu(id);
  

  const handlerAddItem = (item) => {
    if (restaurant === undefined) {
      dispatch(setRestaurant(restaurantInfo));
    } else if (restaurant?.id !== restaurantInfo?.id) {
      dispatch(setRestaurant(restaurantInfo));
    }
    dispatch(addItem(item));
  };
  const handlerRemoveItem = (item) => {
    dispatch(removeItem(item));
  };
 
  // const itemsInCart = selectedItems.filter((selectedItem) => selectedItem.card.info.id === item.card.info.id)

  return (
    <>
      <div>
        
        <div className="py-2">
          {data.card?.card?.itemCards.map((item, index) => {
            const itemsInCart = selectedItems.filter((selectedItem) => selectedItem.card.info.id === item.card.info.id)
           return ( <div key={item?.card?.info?.id} className="border-b-[4px] py-5 px-4 flex justify-between ">
            <div className="w-5/6">
            <div className="font-semibold">{item.card.info.name}</div>
              <div className="font-semibold mt-2"><span className="font-semibold">₹</span> {item.card.info.price /100 || item.card.info.defaultPrice /100 }</div>
              <h3 className="text-sm text-zinc-400 mt-6">{item.card.info.description ? (item.card.info.description) : ("Savor the universally beloved meal experience with our product. Crafted to perfection, it enhances every bite with irresistible flavor and supreme satisfaction. Versatile and adaptable.") }</h3>
            </div>
            {/* image */}
             <div className="w-1/6 relative">
                <img src={ item.card.info.imageId ? (`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item.card.info.imageId}`) : (Nofood)} alt="" />

                {itemsInCart.length > 0 ? (
            <div className="min-w-[70px] w-[70px] absolute text-sm font-bold bottom-0 -left-4 md:-bottom-2 md:left-2 bg-white border text-green-600 border-gray-50 rounded-md uppercase shadow-lg grid grid-cols-12">
              <button onClick={() => handlerRemoveItem(item)} className="h-full col-span-4 p-2">
                -
              </button>
              <span className="col-span-4 p-2">{itemsInCart.length}</span>
              <button onClick={() => handlerAddItem(item)} className="h-full col-span-4 p-2">
                +
              </button>
            </div>
          ) : (
            <button
              onClick={() => handlerAddItem(item)}
              className="absolute text-sm font-bold bottom-0 -left-4 md:-bottom-2 md:left-2 bg-white border border-gray-50 px-6 py-1 rounded-md text-green-600 uppercase shadow-lg"
            >
              ADD
            </button>
          )}
             </div>
            </div>
          )})}
        </div>
      </div>
    </>
  );
};

export default AccordianMenu;
