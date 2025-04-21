import { ThemeProvider } from "@/components/theme-provider"
import { LandingPage } from "@/components/landing-page"

export default function LandingRoute() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <LandingPage />
    </ThemeProvider>
  )
} 