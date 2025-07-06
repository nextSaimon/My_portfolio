import "@/styles/css/style.css";
import "@/styles/css/mediaqueries.css";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Saimon",
  description:
    "Welcome to Saimon's portfolio! Discover my skills in web development, design, and programming. Explore my projects and learn more about my work.",
  keywords:
    "Saimon, web developer, software developer, front-end development, full-stack development, programming, coding, portfolio, web projects, JavaScript, React, HTML, CSS, JavaScript, NextJs, React, TailwindCSS, Bootstrap, responsive design, developer portfolio, UHSC, SSC 2023, HSC 2025",
  other: {
    "google-site-verification": "3P2pzOaMiJRrHdOKR7EbqByO3g1OlCgpzsrcHxu0mM8",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
