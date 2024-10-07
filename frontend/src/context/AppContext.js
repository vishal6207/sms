import { createContext } from "react"
const getLocalStorageItem = (key, defaultValue) => {
    const storedValue = localStorage.getItem(key);
    try {
        return storedValue ? JSON.parse(storedValue) : defaultValue;
    } catch (error) {
        console.error(`Error parsing localStorage key "${key}":`, error);
        return defaultValue;
    }
};


export const AppContext = createContext({
    currentUser: getLocalStorageItem("currentUser", {}),
    currentTheme: getLocalStorageItem("currentTheme", "light"),
    apiUrl: "",
    hostUrl: ""
})