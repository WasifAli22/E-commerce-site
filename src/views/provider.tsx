"use client"
import { store , persister} from "@/store/store";
import { Provider } from "react-redux";
import  { Toaster } from 'react-hot-toast';
import { PersistGate } from "redux-persist/integration/react";
import Headers from "./layout/header";
import Footer from "./layout/footer";


const Providers=({children}:{children:React.ReactNode}) =>{

    return(
        <Provider store={store}>
            <PersistGate loading={null} persistor={persister}>
                <Headers />
                {children}
                <Toaster position="top-right" />
                <Footer />
            </PersistGate>
            
        </Provider>
    )
}
export default Providers