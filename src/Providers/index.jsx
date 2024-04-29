import { createContext, useContext, useState } from 'react';

// Create the loading context
const LoadingContext = createContext();

// Create a provider component to manage the loading state
export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

// Custom hook to use the loading context
export const useLoading = () => {
  return useContext(LoadingContext);
};


