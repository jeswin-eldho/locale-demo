import React, { useContext, useState, useEffect, createContext } from 'react';

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  const [fetched, setFetched] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const url = 'https://kyupid-api.vercel.app/api/users';
      const response = await fetch(url);
      const data = await response.json();
      setUsers(data.users);
      setFetched(true);
      console.log(data);
    }
    fetchData();
  }, []);
  return (
    <div>
      {fetched ? (
        <UserContext.Provider
          value={{
            users,
          }}
        >
          {children}
        </UserContext.Provider>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('Context must be used within a Provider');
  }
  return context;
}
