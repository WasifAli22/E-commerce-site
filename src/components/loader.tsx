import React, { ReactNode } from 'react';
import Skeleton from './Skeleton';

// Define the props interface for the SuspenseFallback component
interface SuspenseFallbackProps {
    children: ReactNode; // The content to be displayed or replaced by skeletons
    isLoading: boolean; // Indicates whether data is loading or not
}

// Component to provide a fallback UI while data is loading
const SuspenseFallback: React.FC<SuspenseFallbackProps> = ({ children, isLoading }) => {
    if (isLoading) {
        // Display a grid of Skeleton components while data is loading
        return (
            <div className='grid grid-cols-12 gap-5'>
                <Skeleton /> 
                <Skeleton /> 
                <Skeleton /> 
                <Skeleton />
            </div>
        );
    }
    // If data is not loading, render the original content
    return <>{children}</>;
};

export default SuspenseFallback;
