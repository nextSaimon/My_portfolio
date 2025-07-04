"use client";
import Link from "next/link";
import FallingText from "./assets/FallingText/FallingText";
import DecryptedText from "./assets/DecryptedText/DecryptedText";

export default function Custom404() {
  return (
    <div className="relative h-screen w-full bg-white flex items-center justify-center overflow-hidden">
      {/* Falling Text Overlay */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
        <div className="w-full h-full z-[900]">
          <FallingText
            text={`Oops! Looks like this page got lost in cyberspace... 404 !`}
            highlightWords={["Oops", "404", "React Bits", "Page Not Found"]}
            highlightClass="text-cyan-500 font-bold"
            trigger="hover"
            backgroundColor="transparent"
            wireframes={false}
            gravity={0.3}
            fontSize="1.8rem"
            mouseConstraintStiffness={0.9}
          />
        </div>
      </div>

      {/* Not Found Box Below */}
      <div className="relative z-20 max-w-md w-full p-8 bg-gray-100 shadow-2xl rounded-2xl text-center">
        <h1 className="text-6xl font-extrabold text-indigo-600">404</h1>
        <DecryptedText
          text="Oops! The page you're looking for doesn't exist."
          speed={30}
          maxIterations={150}
          revealDirection="center"
          characters="!@#$%^&*()"
          animateOn="view"
          className="mt-4 text-lg text-gray-600"
          parentClassName="relative"
          sequential={true}
        />
        <br />
        <br />
        <DecryptedText
          text="The page might have been removed or you may have typed the wrong URL."
          speed={30}
          maxIterations={150}
          revealDirection="center"
          characters="!@#$%^&*()"
          animateOn="view"
          className="mt-4 text-lg text-gray-600"
          parentClassName="relative"
          sequential={true}
        />
        <Link href="/" passHref legacyBehavior>
          <a className="mt-6 inline-block px-6 py-3 text-white font-semibold bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-all duration-300">
            Go back to Home
          </a>
        </Link>
      </div>
    </div>
  );
}
