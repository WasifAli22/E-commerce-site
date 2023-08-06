"use client"
import { useDispatch , useSelector } from "react-redux"
import { cartActions } from "@/store/slice/cartSlice"
import toast from 'react-hot-toast';
import { Iproduct } from "./utils/mock";
import { RootState } from '@/store/store';
import { CartProduct, CartRootState } from "@/types/cart";

const AddToCart = (product : {product : Iproduct}) => {
    // console.log("this prodeuct detail is",data)
    const dispatch = useDispatch()
    const addItem=async ()=>{
        dispatch(cartActions.addToCart({product : product.product, quantity:1}));
        toast.success("product added to cart",{
        duration: 4000,
        position: 'top-right'})
        // console.log("product : : : ",product.product)
    };
    
    const cartItemQuantity = useSelector(
        (state: CartRootState) => state.cart.totalQuantity
    );
    const cartTotalAmount = useSelector(
        (state: CartRootState) => state.cart.totalAmount
    );
    const cartItems = useSelector((state: CartRootState) => state.cart.items);

    const handleSubmit = async ( id : string , quantity : number ) => {
       try {
            const res = await fetch("/api/cart",{
                method : "POST",
                headers : {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    product_id : id,
                    quantity : quantity
                }),
            });
            if(res.ok) {
                toast.success("item added to cart",{
                    position : "top-right",
                    duration : 3000
                })
                const result = await res.json();
                console.log("item added to cart is :",result);
            }else {
                toast.error("Item not added in database")
            }  
       } catch (error) {
          console.log("There is an error with the post erq",error)
       }
    }
    // Extract product IDs and quantities
    const idAndQauntity : {product_id : string , quantity : number} = cartItems.reduce((result, item) => {
        result = {product_id : item._id , quantity : item.quantity};
        return result;
      }, {});
      console.log("productIdAndQuantityObject",idAndQauntity)
    const handleAdd = async () => {
        await addItem();
        await handleSubmit(idAndQauntity.product_id,idAndQauntity.quantity );
    }
    return (   
        <button onClick={handleAdd}  className="bg-[#212121] font-[600] transition all hover:bg-white hover:text-black hover:border hover:border-black lg:w-[155px] w-[49%] h-[42px] hover:border-solid px-2 py-1 rounded-md text-white">
            Add To Cart
        </button>
    )
}
export default AddToCart