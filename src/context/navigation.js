import { createContext, useState, useEffect } from 'react';

const NavigationContext = createContext();

function NavigationProvider({ children }) {
    // Setting the intial path as current path, suppose user 
    // goes in https://localhost:3000/asdgdfger
    // then current path will be /asdgfger
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    // Everything below is all about user clicking forward and back
    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener('popstate', handler);
        // Cleanup Listener
        return () => {
            window.removeEventListener('popstate', handler);
        }
    },[]);

    const navigate = (to) => {
        window.history.pushState({}, '', to);
        setCurrentPath(to);
    }

    return (
        <NavigationContext.Provider value={{currentPath, navigate}}>
            {children}
        </NavigationContext.Provider>
    );
}

export { NavigationProvider };
export default NavigationContext;
