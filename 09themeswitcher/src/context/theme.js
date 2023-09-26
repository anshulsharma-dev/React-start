import { createContext , useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "Light",
    darkTheme: () => {},
    lightTheme: () => {},
})

// We can even give variables and methods inside of the createContext() function , as  an object


// This is the fast way of doing and setting context as down we are creating a self hook called "useTheme" and which exports useContext and ThemeContext in a single return , so we don't have to import 2 files again n again like we were doing in the previous project of contextApi

export const ThemeProvider = ThemeContext.Provider


export default function useTheme(){
    return useContext(ThemeContext)
}