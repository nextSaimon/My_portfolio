import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

export default function Home() {
  return (
    <>
      <Navbar />
      <Profile />
      <About />
      <Experience />
      <Contact />
    </>
  );
}
