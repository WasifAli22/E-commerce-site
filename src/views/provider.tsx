"use client"
import { store } from "@/store/store";
import { Provider, useDispatch } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from "react";
import { cartActions } from "@/store/slice/cartSlice"




const Providers=({children}:{children:React.ReactNode}) =>{
    
    return(
        <Provider store={store}>
            {children}
            <Toaster position="top-right" />
        </Provider>
    )
}
export default Providers