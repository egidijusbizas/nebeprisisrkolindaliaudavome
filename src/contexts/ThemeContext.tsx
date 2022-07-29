import React, { createContext, useState } from 'react';

interface IThemeContext {
  darkMode: boolean;
  toggleDarkMode?: () => void;
}

const defaultState = {
  darkMode: false
};

const ThemeContext = createContext<IThemeContext>(defaultState);

interface Props {
  children: React.ReactNode;
}

const ThemeContextProvider: React.FC<Props> = (props: Props) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const toggleDarkMode = (): void => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>{props.children}</ThemeContext.Provider>
    </div>
  );
};

export { ThemeContext, ThemeContextProvider };
