import React, { createContext, useContext, useEffect, useState } from "react";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeProps = {
  key: "theme",
  light: "light",
  dark: "dark",
} as const;

type Theme = typeof ThemeProps.light | typeof ThemeProps.dark;

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem(ThemeProps.key) as Theme | null;

    return storedTheme || ThemeProps.dark;
  });

  useEffect(() => {
    const userPrefersDark = window.matchMedia(
      `prefers-color-scheme: ${ThemeProps.dark})`
    ).matches;
    const storedTheme = localStorage.getItem(ThemeProps.key);

    if (!storedTheme) {
      setTheme(userPrefersDark ? ThemeProps.dark : ThemeProps.light);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(ThemeProps.key, theme);
    document.documentElement.classList.remove(
      ThemeProps.light,
      ThemeProps.dark
    );
    document.documentElement.classList.add(theme);
    setTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === ThemeProps.light ? ThemeProps.dark : ThemeProps.light
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
