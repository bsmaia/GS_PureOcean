import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div className="app-container">
    <Navbar />
    <main className="main-content">
      <Component {...pageProps} />
    </main>
    <Footer />
  </div>
);

export default MyApp;

