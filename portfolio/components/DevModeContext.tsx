"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";

type DevModeContextType = {
  devMode: boolean;
  transitioning: boolean;
  toggleDevMode: () => void;
};

const DevModeContext = createContext<DevModeContextType>({
  devMode: false,
  transitioning: false,
  toggleDevMode: () => {},
});

export function DevModeProvider({ children }: { children: React.ReactNode }) {
  const [devMode, setDevMode] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  const toggleDevMode = useCallback(() => {
    // Start transition overlay
    setTransitioning(true);

    // After the overlay animation covers the screen, flip the theme
    setTimeout(() => {
      setDevMode((prev) => !prev);
    }, 600);

    // After theme is applied and the reveal animation plays, hide overlay
    setTimeout(() => {
      setTransitioning(false);
    }, 1400);
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
    <DevModeContext.Provider value={{ devMode, transitioning, toggleDevMode }}>
      {children}
    </DevModeContext.Provider>
  );
}

export function useDevMode() {
  return useContext(DevModeContext);
}
