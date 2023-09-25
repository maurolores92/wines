import { useEffect } from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css'; 

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Redirigir a la página /home solo si la ruta actual es '/'
    if (router.pathname === '/') {
      router.push('/home');
    }
  }, [router.pathname]);

  return <Component {...pageProps} />;
}

export default MyApp;