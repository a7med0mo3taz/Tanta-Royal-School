import { createContext, useContext, useEffect, useState } from "react";

const ModeContext = createContext();

export const ModeProvider = ({ children }) =>{
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const savedMode = localStorage.getItem('theme');
        if (savedMode === 'dark') setDarkMode(true);
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };
    return(
        <ModeContext.Provider 
        value={{
            darkMode ,
            setDarkMode ,
            toggleTheme
        }}
        >
            {children}
        </ModeContext.Provider>
    );
}
export const useModeContext = () => useContext(ModeContext);