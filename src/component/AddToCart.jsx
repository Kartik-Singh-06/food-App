import { useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddToCart = () => {
  const cart = useSelector((state) => state.cart.item);
 
  const [count, setCount] = useState(1);

  const [total, setTotal] = useState(
    cart.reduce((acc, item) => acc + (item?.card?.info?.price/100 || item?.card?.info?.defaultPrice
      / 100 || 0), 0)
  );
  const notify = () => toast.success("Payment Successful");
  return (
    <>
      <div className="max-w-screen-xl mx-auto h-[100vh] ">
        <div className="w-full h-full flex">
          <div className="w-4/6 ">
            <div className="box w-[90%] h-[15vw] mx-auto bg-white mt-[10vw] py-4 px-8 shadow-lg ">
              <h1 className="text-xl font-medium">Add</h1>
              <p className="text-zinc-500">
                To place your order now, log in to your existing account or sign
                up.
              </p>

              <div className="mt-7 flex gap-8">
                <button className="text-green-500 px-9 border-2 border-green-500 py-1">
                  have an account?
                  <br />
                  <span className="text-2xl font-medium">LOG IN</span>
                </button>
                <button className="bg-green-500 text-white px-9 border-2 border-green-500 py-1">
                  New to foodie?
                  <br />
                  <span className="font-medium text-2xl">SIGN UP</span>
                </button>
              </div>
            </div>

            <div className="mt-4 bg-white w-[90%] h-[5vw] mx-auto shadow-lg ">
              <h2 className="pt-6 px-10 text-xl text-zinc-400 font-medium">
                Delivery address
              </h2>
            </div>
            <div className="mt-4  w-[90%] h-[5vw] mx-auto bg-white shadow-lg ">
              <h2 className="pt-6 px-10 text-xl text-zinc-400 font-medium">
                Payment
              </h2>
            </div>
          </div>
          {/* main total section */}
          <div className="w-2/6 ">
            <div className="w-full h-[100%] bg-[#eeeded98] border-l-2 relative  ">
              <div className="w-full h-[32vw] absolute top-[6.3vw] ">
                {/* top */}
                <div className="w-full h-[5vw] shadow-lg border-b-[1px] border-zinc-300 bg-[#ffff]">
                  <h1 className="text-xl text-zinc-500 font-medium text-center pt-5">
                    Your selected food Items🍕
                  </h1>
                  
                </div>

                {/* middle */}
                <div className="w-full h-full bg-zinc-100 overflow-x-hidden overflow-y-auto ">
                  {cart.map((item, index) => (
                    <div
                      key={index}
                      className="w-full h-[5vw] flex justify-between px-3 border-b-[1px] border-zinc-300 bg-white mt-[1px] pt-4"
                    >
                      <h3 className="w-2/3 text-[1vw] font-medium text-zinc-700">
                        {item?.card?.info?.name}
                      </h3>

                      <p className=" w-1/3 text-center text-sm mt-2">
                        ₹
                        {count > 1
                          ? (item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/ 100) * count
                          : item?.card?.info?.price/100 || item?.card?.info?.defaultPrice / 100}
                      </p>
                    </div>
                  ))}
                </div>

                {/* total */}
                <div className="w-full h-[4vw] shadow-lg  bg-[#ffff]">
                  <div className="flex  justify-between items-center pt-4 text-lg font-medium px-2">
                    <h2>Total</h2>
                    <div className="flex gap-1">
                      <p className="text-xs mt-2 text-zinc-500">(+5% tax)</p>
                      <h2>₹{((total / 100) * 5 + total).toFixed(2)}</h2>
                    </div>
                  </div>
                </div>

                <div className="pb-10  mt-3">
                 {cart.length > 0 &&  <button
                    onClick={notify}
                    className="w-full h-[3vw] py-2 px-4 bg-green-600 text-white font-medium"
                  >
                    Pay
                  </button>}
                  <ToastContainer
                    position="top-right"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                    transition:Bounce
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToCart;
