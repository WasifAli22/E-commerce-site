// Import necessary dependencies
"use client"
import { useDispatch, useSelector } from "react-redux"
import { cartActions } from "@/store/slice/cartSlice"
import toast from 'react-hot-toast';
import { IProduct } from "./utils/mock";
import { RootState } from '@/store/store';
import { CartProduct, CartRootState } from "@/types/cart";

// Component to add products to the cart
const AddToCart = (product: { product: IProduct }) => {
    // Initialize Redux dispatch
    const dispatch = useDispatch()

    // Function to add item to the cart and display toast message
    const addItem = async () => {
        dispatch(cartActions.addToCart({ product: product.product, quantity: 1 }));
        toast.success("Product added to cart", {
            duration: 4000,
            position: 'top-right'
        });
        console.log("Product:", product.product);
    };

    // Select cart-related data from Redux store
    const cartItemQuantity = useSelector(
        (state: CartRootState) => state.cart.totalQuantity
    );
    const cartTotalAmount = useSelector(
        (state: CartRootState) => state.cart.totalAmount
    );
    const cartItems = useSelector((state: CartRootState) => state.cart.items);

    // Function to handle adding products to cart
    // const handleSubmit = async ( id : string , quantity : number ) => {
    //    try {
    //         const res = await fetch("/api/cart",{
    //             method : "POST",
    //             headers : {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 product_id : id,
    //                 quantity : quantity
    //             }),
    //         });
    //         if(res.ok) {
    //             toast.success("item added to cart",{
    //                 position : "top-right",
    //                 duration : 3000
    //             })
    //             const result = await res.json();
    //             console.log("item added to cart is :",result);
    //         }else {
    //             toast.error("Item not added in database")
    //         }  
    //    } catch (error) {
    //       console.log("There is an error with the post erq",error)
    //    }
    // }
    // Extract product IDs and quantities
    // const idAndQauntity : {product_id : string , quantity : number} = cartItems.reduce((result, item) => {
    //     result = {product_id : item._id , quantity : item.quantity};
    //     return result;
    //   }, {});

    // ###3# *** finally add products to cart and database  
    const handleAdd = async () => {
        await addItem();
        // await handleSubmit(idAndQauntity.product_id,idAndQauntity.quantity );
    };
    // check if cart item exit the it shows added
    const isItemExists = (id: string) => {
        return cartItems.some((item) => item._id === id)
    };
    return (
        <button onClick={addItem} className={`font-[600] ${!isItemExists(product.product._id) ? "bg-[#212121] hover:bg-white hover:text-black hover:border hover:border-black text-white" : " bg-[#212121] bg-opacity-90 text-white/90 pointer-events-none "} transition all w-[64%] xl:w-[48%] h-[42px] hover:border-solid px-2 py-1 rounded-md `}>
            {!isItemExists(product.product._id) ? "Add to Cart" : "Already added"}
        </button>
    )
}

export default AddToCart;
