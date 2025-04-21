import { ThemeProvider } from "@/components/theme-provider"
import { LandingPage } from "@/components/landing-page"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <LandingPage />
    </ThemeProvider>
  )
}
