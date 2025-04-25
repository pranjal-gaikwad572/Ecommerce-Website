import { createContext, useState } from "react";
import useLocalStroage from "../hooks/useLocalStroage";


export const UsersListContext = createContext([]);

export function UsersListProvider({ children }) {
  const [usersList, setUsersList] = useLocalStroage('usersList',[]);
  return (
    <UsersListContext.Provider value={[usersList,setUsersList]}>
      {children}
    </UsersListContext.Provider>
  );
}
