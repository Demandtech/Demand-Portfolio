import { NextUIProvider } from "@nextui-org/system";

import { ThemeProvider } from "./contexts/ThemeContext";

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </ThemeProvider>
  );
}
