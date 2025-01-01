import { NextUIProvider } from "@nextui-org/system";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import { ThemeProvider } from "./contexts/ThemeContext";

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <NextUIProvider>{children}</NextUIProvider>
      <Analytics />
      <SpeedInsights />
    </ThemeProvider>
  );
}
