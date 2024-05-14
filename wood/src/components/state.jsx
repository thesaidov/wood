import { createContext } from "react";
import Navbar from "./navbar";
import { useState } from "react";
import Footer from "./footer"

export const UserContext = createContext()
export default function ContextProvider({children}) {
const [login, setLogin] = useState(false)
  return (
    <UserContext.Provider value={{login, setLogin}}>
        <Navbar/>
        {children}
        <Footer/>
    </UserContext.Provider>
  )
}


