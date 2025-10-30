import React from 'react';
import '../styles/global.css';

export default function MyApp({ Component, pageProps }) {
    return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Playfair+Display:wght@700&display=swap');

        body {
          font-family: 'Inter', sans-serif;
          color: #1a1a1a;
        }

        .font-serif-heading {
          font-family: 'Playfair Display', serif;
        }

        .font-sans-body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

