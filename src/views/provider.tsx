"use client"
import { store , persister} from "@/store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import React from "react";


const Providers=({children}:{children:React.ReactNode}) =>{

    return(
        <Provider store={store}>
            <PersistGate loading={null} persistor={persister}>
                {children}
            </PersistGate>
            
        </Provider>
    )
}
export default Providers