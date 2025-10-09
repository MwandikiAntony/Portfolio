import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ThemeProvider } from '../context/ThemeContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Component {...pageProps} />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
