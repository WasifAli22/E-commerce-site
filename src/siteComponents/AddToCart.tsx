"use client"
import { useDispatch } from "react-redux"
import { cartActions } from "@/store/slice/cartSlice"
const AddToCart = () => {
    const dispatch = useDispatch()
    const addItem=()=>{
        dispatch(cartActions.addToCart({quantity:1}))
    }
    return (
        <button onClick={addItem} className="bg-[#212121] ml-4 font-[600] transition all hover:bg-white hover:text-black hover:border hover:border-black w-[155px] h-[42px] hover:border-solid px-2 py-1 rounded-md text-white">
            Add To Cart
        </button>
    )
}
export default AddToCart