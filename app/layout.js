import localFont from "next/font/local";
import "./assets/css/style.css";
import "./assets/css/mediaqueries.css";
import "./globals.css";
import Head from "next/head";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

// Load custom fonts
const geistSans = localFont({
  src: "/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Saimon",
  description:
    "Welcome to Saimon's portfolio! Discover my skills in web development, design, and programming. Explore my projects and learn more about my work.",
  keywords:
    "Saimon, web developer, software developer, front-end development, full-stack development, programming, coding, portfolio, web projects, JavaScript, React, HTML, CSS, JavaScript, NextJs, React, TailwindCSS, Bootstrap, responsive design, developer portfolio, UHSC, SSC 2023, HSC 2025",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="zdUPNuU8cl5tovxUSu2ArF1BL3PuKZ1T3_yIra13vxg"
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar className="z-50" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
