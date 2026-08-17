"use client";

import { createContext, useContext, useState, useCallback, useEffect } from "react";

type DevModeContextType = {
  devMode: boolean;
  toggleDevMode: () => void;
};

const DevModeContext = createContext<DevModeContextType>({
  devMode: false,
  toggleDevMode: () => {},
});

export function DevModeProvider({ children }: { children: React.ReactNode }) {
  const [devMode, setDevMode] = useState(false);

  const toggleDevMode = useCallback(() => {
    setDevMode((prev) => !prev);
  }, []);

  // Apply data-dev-mode attribute to <html> for global CSS theme switching
  useEffect(() => {
    const html = document.documentElement;
    if (devMode) {
      html.setAttribute("data-dev-mode", "true");
    } else {
      html.removeAttribute("data-dev-mode");
    }
  }, [devMode]);

  return (
    <DevModeContext.Provider value={{ devMode, toggleDevMode }}>
      {children}
    </DevModeContext.Provider>
  );
}

export function useDevMode() {
  return useContext(DevModeContext);
}
