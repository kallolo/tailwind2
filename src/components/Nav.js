import useDarkMode from "../hooks/useDarkMode";

const Nav = () => {
    const [colorTheme, setTheme] = useDarkMode();
    return (
        <div className="fixed top-0 bg-gradient-to-r from-indigo-600 to-purple-900 dark:from-gray-800 dark:to-gray-900 w-full p-1 sm:p-2 md:p-3 lg:p-4 shadow-2xl flex justify-between items-center">

            <span className="w-10 h-10 cursor-pointer text-white flex items-center justify-center transition duration-500">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </span>

            <span className="text-2xl flex justify-center items-center text-white">
                Website.com
            </span>

            <span onClick={() => setTheme(colorTheme)} className="w-8 h-8 sm:h-9 sm:w-9 md:w-10 md:h-10 bg-indigo-600 dark:bg-gray-800 block rounded-full shadow-lg cursor-pointer text-white flex items-center justify-center transition duration-500">
                {colorTheme === 'ligth' ?
                (<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" /></svg>)
                :
                (<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>)
                }
            </span>

        </div>
    );
}

export default Nav;