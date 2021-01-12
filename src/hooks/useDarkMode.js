const { useState, useEffect } = require("react")

export default function useDarkMode(){
    const [theme, setTheme] = useState(localStorage.theme);
    const colorTheme = theme === 'dark' ? 'ligth' : 'dark';
    useEffect(()=>{
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);
        localStorage.setItem('theme', theme)
    },[theme]);

    return [colorTheme, setTheme];
}