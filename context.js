import React, {useState, useEffect, useContext} from 'react';
export const MyContext = React.createContext();

//Creating a provider for the context to take information from the entire application
const MyProvider = ({ children }) => {
    return (
        <MyContext.Provider value={{

        }}>
        {/* Adding children prop to take all children */}
        {children}

        </MyContext.Provider>
    )
}

export default MyProvider;