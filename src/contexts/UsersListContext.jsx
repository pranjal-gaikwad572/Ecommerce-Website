import { createContext, useState } from "react";


export const UsersListContext = createContext([]);

export function UsersListProvider({ children }) {
  const [usersList, setUsersList] = useState([
    {
      username: "xyzdd",
      password: "xyz",
    },
    {
      username: "xyzddd",
      password: "xyz",
    },
  ]);
  return (
    <UsersListContext.Provider value={[usersList,setUsersList]}>
      {children}
    </UsersListContext.Provider>
  );
}
