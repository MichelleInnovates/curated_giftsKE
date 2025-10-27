//Import the global stylesheet
//Import '../styles/globals.css';
import React from 'react';

export default function MyApp({ Component, pageProps }) {
    return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />

    </>
  );
}  

//Inline styles to solve input errors
const GlobalStlyes = () => (
    <style jsx global>{`
    /*These styles would normally be in styles/globals.css*/
    
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Playfair+Display:wght@700&display=swap');

    body {
      font-family: 'Inter', sans-serif;
      color: #1a1a1a; /* Rich black */
    }

    .font-serif-heading {
      font-family: 'Playfair Display', serif;
    }
    
    .font-sans-body {
      font-family: 'Inter', sans-serif;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px); /* Subtler "glide" */
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .fade-in-section {
      animation: fadeIn 0.8s ease-out forwards;
      opacity: 0; /* Start hidden */
    }
    
    /* Apply staggered delay for children */
    .stagger-fade > * {
      animation: fadeIn 0.8s ease-out forwards;
      animation-delay: var(--delay, 0s);
      opacity: 0;
    }

    /* Tailwind base/components would be here in a real project */
    /* We'll add some basic resets for this preview */
    body, html {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    *, *:before, *:after {
      box-sizing: inherit;
     }
   }</style>
);

