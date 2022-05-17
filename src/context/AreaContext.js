import React, { useContext, useState, useEffect, createContext } from 'react';

const AreaContext = createContext();

export const AreaContextProvider = ({ children }) => {
  const [areas, setAreas] = useState(null);
  const [fetched, setFetched] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const url = 'https://kyupid-api.vercel.app/api/areas';
      const response = await fetch(url);
      const data = await response.json();
      setAreas(data);
      setFetched(true);
    }
    fetchData();
  }, []);
  return (
    <div>
      {fetched ? (
        <AreaContext.Provider
          value={{
            areas,
          }}
        >
          {children}
        </AreaContext.Provider>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export function useArea() {
  const context = useContext(AreaContext);
  if (context === undefined) {
    throw new Error('Context must be used within a Provider');
  }
  return context;
}
