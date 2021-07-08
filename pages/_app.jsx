import { CSSReset, ThemeProvider } from '@chakra-ui/core';
import { AuthProvider } from '../lib/auth';
import customTheme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={customTheme}>
      <AuthProvider>
        <CSSReset />
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
