import { useLocalStorage }from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = (key, initialValue) =>{
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue)

    useEffect(()=>{
        const body = document.querySelector("body")
        if(darkMode){
            body.classList.add("dark-mode")
        }
        if(!darkMode){
            body.classList.remove("dark-mode")
        }
    },[darkMode])

    return [darkMode, setDarkMode];
}