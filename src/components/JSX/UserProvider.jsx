import { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [isLoggedIn, setLoggedin] = useState(false); // or initial user data

  return (
    <UserContext.Provider value={{ isLoggedIn, setLoggedin }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };