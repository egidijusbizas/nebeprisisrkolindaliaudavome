import React, { createContext, useState } from 'react';

const ThemeContext = createContext(null);

const ThemeContextProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div>
      <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>{props.children}</ThemeContext.Provider>
    </div>
  );
};

export { ThemeContext, ThemeContextProvider };
