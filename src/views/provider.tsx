// Import necessary modules and components
"use client"
import { store , persister} from "@/store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import React from "react";

// Component to provide Redux store and persistence to the app
const Providers = ({ children }: { children: React.ReactNode }) => {

    return (
        // Redux Provider wrapping the app with the Redux store
        <Provider store={store}>
            {/* PersistGate for persisting state across app restarts */}
            <PersistGate loading={null} persistor={persister}>
                {children} {/* Render the child components */}
            </PersistGate>
        </Provider>
    )
}

// Export the Providers component
export default Providers;
