import { useState, useContext, createContext } from "react";
import useFetch from './useFetch';

const AppContext = createContext();

const AppProvider = ({children}) => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [query, setQuery] = useState('negroni');
    const {isLoading, data, isError, count} = useFetch(`s=${query}`);

    //Sidebar functions
    const openSideBar = () => {
        setIsSideBarOpen(true);
    };

    const closeSideBar = () => {
        setIsSideBarOpen(false);
    }

    //Ricerca cockatil, al cambiare della query abbiamo un nuovo render
    const searchCocktail = (input) => {
        setQuery(input);
    };

    //Aggiorno lo state con la posizione in cui ho cliccato sulla ricetta
    const getScrollPosition = (value) => {
        setScrollPosition(value);
    };

    //Reimposto lo state dello scrollPosition a 0
    const deleteScrollPosition = () => {
        setScrollPosition(0);
    };

    return (
        <AppContext.Provider
            value={{
                isSideBarOpen,
                openSideBar,
                closeSideBar,
                searchCocktail,
                getScrollPosition,
                deleteScrollPosition,
                scrollPosition,
                isLoading,
                isError,
                count,
                query,
                data
            }}
            >
                {children}
            </AppContext.Provider>
    );
};

const useGlobalContext = () => {
    return useContext(AppContext);
};

export {AppProvider, useGlobalContext};