import { createContext,useContext } from "react";

export const ThemeContext = createContext({
    themeMode: 'light',
    lightMode:()=>{},
    darkMode:()=> {}
})
// here we create a provider
export const ThemeProvider = ThemeContext.Provider

//here we create a custom hook

export default function useTheme(){
    return useContext(ThemeContext)
}