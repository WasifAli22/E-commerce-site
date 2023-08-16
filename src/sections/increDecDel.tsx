"use client"
// Import necessary dependencies
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "@/store/slice/cartSlice";
import { CartRootState } from "@/types/cart";
import { IProduct } from "@/views/utils/mock";
import { HiOutlineTrash, HiMinusSm } from 'react-icons/hi';
import toast from "react-hot-toast"; 

// Define the component props
interface Props {
  product: IProduct;
}

// Define the Action component
const Action: React.FC<Props> = ({ product }) => {
  // Initialize dispatch function
  const dispatch = useDispatch();

  // Get the product quantity from the Redux store
  const productQuantity = useSelector(
    (state: CartRootState) =>
      state.cart.items.find(
        (item) => item.slug.current === product.slug.current
      )?.quantity
  );

  // Initialize the counter state with productQuantity or 0
  const [counter, setCounter] = useState(productQuantity || 0);

  // Get the product amount from the Redux store
  const productAmount = useSelector(
    (state: CartRootState) =>
      state.cart.items.find(
        (item) => item.slug.current === product.slug.current
      )?.totalPrice
  );

  // Increment the counter and dispatch addToCart action
  function increment(product: IProduct) {
    setCounter((prev: number) => ++prev!);
    dispatch(cartActions.addToCart({ product: product, quantity: 1 }));
  }

  // Update counter when productQuantity changes
  useEffect(() => {
    setCounter(productQuantity || 0);
  }, [productQuantity]);

  // Decrement the counter and dispatch removeFromCart action
  function decrement(slug: string) {
    if (counter === 0) {
      toast.error("Quantity cannot be negative.");
    } else {
      setCounter((prev: number) => --prev!);
      dispatch(cartActions.removeFromCart(slug));
    }
  }

  // Handle input number change
  function onInputNumberChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = +e.currentTarget.value;
    if (newValue >= 0 && newValue <= 10) {
      setCounter(newValue);
    } else if (newValue < 0) {
      setCounter(0);
    }
  }

  // Render the component JSX
  return (
    <>
      {/* Display total amount */}
      <p className="text-base md:text-xl font-bold mb-3 leading-4 tracking-wider text-black/80">Total : <span className="text-black ease-in-out transition duration-150">${productAmount}</span></p>
      <div className="flex px-4 items-center font-bold leading-4 tracking-wider justify-center">
        {/* Display minus button or trash icon based on counter */}
        {counter === 1 ? (
          <div onClick={() => decrement(product.slug.current)} className="p-1">
            <HiOutlineTrash className="text-red-500 text-xl hover:cursor-pointer hover:text-red-600" />
          </div>
        ) : (
          <div onClick={() => decrement(product.slug.current)} className="p-1 icon">
            <HiMinusSm className="" />
          </div>
        )}
        {/* Input for counter */}
        <input
          className="inline-block w-[65px] pl-7 py-2 mx-1 border-[1px] border-gray-400"
          type="number"
          min={0}
          max={10}
          value={counter === null ? 0 : counter}
          onChange={onInputNumberChangeHandler}
        />
        {/* Button to increment counter */}
        <button onClick={() => increment(product)} className="icon">+</button>
      </div>
    </>
  );
};

// Export the Action component
export default Action;
