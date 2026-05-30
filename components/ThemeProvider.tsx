"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type Theme = "light" | "dark" | "system";
type ResolvedTheme = "light" | "dark";
type ThemeAttribute = "class" | `data-${string}`;

type ThemeProviderProps = {
  children: ReactNode;
  attribute?: ThemeAttribute;
  defaultTheme?: Theme;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
  storageKey?: string;
};

type ThemeContextValue = {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  mounted: boolean;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function isTheme(value: string | null): value is Theme {
  return value === "light" || value === "dark" || value === "system";
}

function getSystemTheme(): ResolvedTheme {
  if (typeof window === "undefined") return "light";

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function resolveTheme(theme: Theme, enableSystem: boolean): ResolvedTheme {
  if (theme === "system") {
    return enableSystem ? getSystemTheme() : "light";
  }

  return theme;
}

function disableTransitionsTemporarily() {
  const style = document.createElement("style");

  style.appendChild(
    document.createTextNode(
      "*{transition:none!important;animation:none!important}"
    )
  );

  document.head.appendChild(style);
  window.getComputedStyle(document.body);

  window.setTimeout(() => {
    document.head.removeChild(style);
  }, 1);
}

function applyTheme(
  resolvedTheme: ResolvedTheme,
  attribute: ThemeAttribute,
  disableTransitionOnChange: boolean
) {
  const root = document.documentElement;

  if (disableTransitionOnChange) {
    disableTransitionsTemporarily();
  }

  if (attribute === "class") {
    root.classList.remove("light", "dark");
    root.classList.add(resolvedTheme);
  } else {
    root.setAttribute(attribute, resolvedTheme);
  }

  root.style.colorScheme = resolvedTheme;
}

export function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = "system",
  enableSystem = true,
  disableTransitionOnChange = true,
  storageKey = "theme",
}: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("light");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(storageKey);
    const initialTheme = isTheme(storedTheme) ? storedTheme : defaultTheme;
    const initialResolvedTheme = resolveTheme(initialTheme, enableSystem);

    setThemeState(initialTheme);
    setResolvedTheme(initialResolvedTheme);
    applyTheme(initialResolvedTheme, attribute, false);
    setMounted(true);
  }, [attribute, defaultTheme, enableSystem, storageKey]);

  useEffect(() => {
    if (!mounted) return;

    const nextResolvedTheme = resolveTheme(theme, enableSystem);

    setResolvedTheme(nextResolvedTheme);
    applyTheme(nextResolvedTheme, attribute, disableTransitionOnChange);
  }, [attribute, disableTransitionOnChange, enableSystem, mounted, theme]);

  useEffect(() => {
    if (!mounted || theme !== "system" || !enableSystem) return;

    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      const nextResolvedTheme = getSystemTheme();

      setResolvedTheme(nextResolvedTheme);
      applyTheme(nextResolvedTheme, attribute, disableTransitionOnChange);
    };

    media.addEventListener("change", handleChange);

    return () => {
      media.removeEventListener("change", handleChange);
    };
  }, [attribute, disableTransitionOnChange, enableSystem, mounted, theme]);

  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key !== storageKey) return;

      const nextTheme = isTheme(event.newValue) ? event.newValue : defaultTheme;

      setThemeState(nextTheme);
    };

    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, [defaultTheme, storageKey]);

  const setTheme = useCallback(
    (nextTheme: Theme) => {
      setThemeState(nextTheme);
      window.localStorage.setItem(storageKey, nextTheme);
    },
    [storageKey]
  );

  const value = useMemo(
    () => ({
      theme,
      resolvedTheme,
      mounted,
      setTheme,
    }),
    [mounted, resolvedTheme, setTheme, theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}