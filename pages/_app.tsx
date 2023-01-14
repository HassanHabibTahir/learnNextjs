import type { AppProps } from "next/app";
import { ThemeProvider } from "theme-ui";
import Nav from "../src/components/nav";
import "../styles/globals.css";
import theme from "../theme/theme";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default MyApp;
