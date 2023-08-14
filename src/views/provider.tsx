"use client"
import { store , persister} from "@/store/store";
import { Provider, useDispatch } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';
import { fetchAndDispatchCartData } from "@/components/cartUtils";
import { PersistGate } from "redux-persist/integration/react";




const Providers=({children}:{children:React.ReactNode}) =>{

    return(
        <Provider store={store}>
            <PersistGate loading={null} persistor={persister}>
                {children}
                <Toaster position="top-right" />
            </PersistGate>
            
        </Provider>
    )
}
export default Providers