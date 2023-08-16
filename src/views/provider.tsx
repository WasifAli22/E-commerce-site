"use client"
import { store , persister} from "@/store/store";
import { Provider } from "react-redux";
import  { Toaster } from 'react-hot-toast';
import { PersistGate } from "redux-persist/integration/react";


const Providers=({children}:{children:React.ReactNode}) =>{

    return(
        <Provider store={store}>
            <PersistGate  persistor={persister}>
                {children}
                <Toaster position="top-right" />
            </PersistGate>
            
        </Provider>
    )
}
export default Providers