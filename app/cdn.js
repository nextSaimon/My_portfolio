"use client"; // Marks this as a client component
import { useEffect } from "react";
import Head from "next/head";
import AOS from "aos"; // Importing AOS to initialize directly
import "aos/dist/aos.css"; // Importing AOS CSS

export default function CDNLinks() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 0,
      mirror: true,
    });
  }, []);

  return (
    <>
      <Head>
        {/* Font Awesome CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha384-ysb2Mv1G4zr2uhG3yd5Io09k2E1JmgoEImR1tJ+y8AqPbgiWPRTBfOe8b0n0/0Oe"
          crossOrigin="anonymous"
        />
      </Head>
    </>
  );
}
