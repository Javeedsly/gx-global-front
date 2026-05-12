"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import React from "react";

// next-themes dark mode qırpılmasının (flicker) qarşısını almaq üçün 
// avtomatik <script> teqi əlavə edir. React 19 isə buna false-positive xəta verir.
// Bu kod sadəcə həmin yalançı xətanı development mühitində konsoldan gizlədir.
if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  const originalConsoleError = console.error;
  console.error = (...args: any[]) => {
    if (typeof args[0] === "string" && args[0].includes("Encountered a script tag")) {
      return;
    }
    originalConsoleError.apply(console, args);
  };
}

export function ThemeProvider({ 
  children, 
  ...props 
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}