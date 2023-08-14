"use client"
import { cartActions } from "@/store/slice/cartSlice";
import { CartRootState } from "@/types/cart";
import { IProduct } from "@/views/utils/mock";
import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineTrash , HiMinusSm } from 'react-icons/hi';
import toast from "react-hot-toast"; 

interface Props {
    product: IProduct;
  }
const Action : React.FC<Props> = ({ product } ) => {
    const dispatch = useDispatch();
    // here is our shopping list
    // const cartItems = useSelector((state: CartRootState) => state.cart.items);
    // const existingItem = cartItems.find((item) => item._id === id.id);
    // const {quantity , totalPrice , slug} = existingItem ? existingItem : { quantity : 1 , totalPrice : 0 , slug : {current : null} };
    
    const productQuantity = useSelector(
        (state: CartRootState) =>
          state.cart.items.find(
            (item) => item.slug.current === product.slug.current
          )?.quantity
      );
      const [counter, setCounter] = useState(productQuantity || 0);
      const productAmount = useSelector(
        (state: CartRootState) =>
          state.cart.items.find(
            (item) => item.slug.current === product.slug.current
          )?.totalPrice
      );
    function increment(product: IProduct) {
        setCounter((prev: number) => ++prev!);
        dispatch(cartActions.addToCart({ product: product, quantity: 1 }));
    }
    useEffect(() => {
        setCounter(productQuantity || 0);
    }, [productQuantity]);
    // function decrement(slug: string) {
    //     setCounter((prev: number) => --prev!);
    //     dispatch(cartActions.removeFromCart(slug));
    // };
    function decrement(slug: string) {
        if (counter === 0) {
          toast.error("Quantity cannot be negative.");
        } else {
          setCounter((prev: number) => --prev!);
          dispatch(cartActions.removeFromCart(slug));
        }
      }
      
      
    
    function onInputNumberChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        const newValue = +e.currentTarget.value;
        if (newValue >= 0 && newValue <= 10) {
          setCounter(newValue);
        } else if (newValue < 0) {
          setCounter(0);
        }
      }

    // function onInputNumberChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    //     if (+e.currentTarget.value >= 1 && +e.currentTarget.value <= 10) {
    //       setCounter(+e.currentTarget.value);
    //     }else if(+e.target.value == 0) {
    //         setCounter(0)
    //     }
    // }

  return (
    <>
      <p className=" text-base md:text-xl  font-bold  leading-4 tracking-wider  text-black/80 ">Total : <span className="text-black ease-in-out transition duration-150  ">${productAmount} </span></p> 
      <div className="flex px-4 items-center  font-bold leading-4 tracking-wider justify-center ">
        {counter === 1 ? (
            <div
                onClick={() => decrement(product.slug.current)}
                className="p-1"
              >
                <HiOutlineTrash  className="text-red-500 text-xl hover:cursor-pointer hover:text-red-600 "/>
            </div>
            ) : (
            <div
                 onClick={() => decrement(product.slug.current)}
                    className="p-1 icon "
                >
                <HiMinusSm className="" />
            </div>
        )}
        <input
              className="inline-block   w-[65px] pl-7 py-2 mx-1 border-[1px] border-gray-400"
              type="number"
              min={0}
              max={10}
              value={counter===null  ? 0 : counter }
              onChange={onInputNumberChangeHandler}
        />
        <button onClick={() => increment(product)} className="icon">+</button>
      </div>
    </>
  );
};

export default Action;
