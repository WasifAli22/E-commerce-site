"use client"
import { useDispatch } from "react-redux"
import { cartActions } from "@/store/slice/cartSlice"
import toast from 'react-hot-toast';
import { Iproduct } from "./utils/mock";

const AddToCart = (product : {product : Iproduct}) => {
    // console.log("this prodeuct detail is",data)
    const dispatch = useDispatch()
    const productData = {
        title: "ASDfasdf",
        _id: "ASDf",
        category: "ASDF",
        price: 123,
        care: "ASDfasdfasdm askd fhajksdhf",
        description: "asdfjaskldjf", 
        name: "asdfnasjkdf",
        image: "sadfnlasdf",
    }
    const addItem=()=>{
        dispatch(cartActions.addToCart({product : product.product, quantity:1}));
        toast.success("product added to cart",{
        duration: 4000,
        position: 'top-right'})
        console.log("product : : : ",product.product)
    };
    

    return (    
        <button onClick={addItem}  className="bg-[#212121] font-[600] transition all hover:bg-white hover:text-black hover:border hover:border-black lg:w-[155px] w-[49%] h-[42px] hover:border-solid px-2 py-1 rounded-md text-white">
            Add To Cart
        </button>
    )
}
export default AddToCart