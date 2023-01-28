import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "next-themes";
import { FluentProvider, teamsLightTheme } from '@fluentui/react-components';

export default function App({ Component, pageProps }: AppProps) {
  return(
    <FluentProvider>
    <ThemeProvider enableSystem={true} attribute="class">
    <Component {...pageProps} />
    </ThemeProvider>
    </FluentProvider>
  )
}
