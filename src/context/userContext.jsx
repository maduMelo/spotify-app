import React from 'react';


export const UserContext = React.createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState(undefined);

  return (
    <UserContext.Provider value={{ user, setUser }}> {children} </UserContext.Provider>
  );
};
