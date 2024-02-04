import React from "react";
import { useAuthContext } from "../../store/AuthCtx";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart } = useAuthContext();

  function removeItemHandler(id) {
    removeFromCart(id);
  }

  return (
    <div className="absolute right-0 top-full flex flex-col bg-gray-100 z-20 w-[300px] p-4">
      {cart.items.length !== 0 && (
        <>
          <ul className="flex flex-col gap-4">
            {cart.items.map((cartItem) => {
              return (
                <li key={cartItem.id} className="flex gap-4 ">
                  <img className="w-[55px] h-[55px]" src={cartItem.img_url} alt="" />
                  <div className="grow">
                    <div className="font-bold">{cartItem.title}</div>
                    <div>
                      Kiekis: {cartItem.qty}{" "}
                      <span onClick={() => removeItemHandler(cartItem.id)} className="text-red-500 cursor-pointer ml-2">
                        (Ištrinti)
                      </span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="flex justify-between my-4">
            Kaina: <span>{cart.totalPrice}eur</span>
          </div>
          <Link className="bg-blue-600 py-1 px-4 rounded text-white inline-block text-center" to={"/"}>
            Krepšelis
          </Link>
        </>
      )}
      {!cart.items.length && <p className="text-center">Krepšelis tusčias</p>}
    </div>
  );
}
