"use client";
import Link from "next/link";
import DecryptedText from "@/styles/DecryptedText/DecryptedText";

export default function Custom404() {
  return (
    <div className="__container">
      <div className="__box">
        <h1 className="__title">404</h1>
        <DecryptedText
          text="Oops! This page doesn't exist."
          speed={30}
          maxIterations={150}
          revealDirection="center"
          characters="!@#$%^&*()"
          animateOn="view"
          className="__text"
          parentClassName="__parent"
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
          className="__text"
          parentClassName="__parent"
          sequential={true}
        />
        <Link href="/" className="__button">
          Go back to Home
        </Link>
      </div>

      <style jsx>{`
        .__container {
          position: relative;
          width: 100%;
          height: 50vh;
          background-color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .__box {
          position: relative;
          z-index: 20;
          width: 100%;
          max-width: 28rem;
          padding: 2rem;
          background-color: #f3f4f6;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          border-radius: 1.5rem;
          text-align: center;
          height: 300px;
        }

        .__title {
          font-size: 4rem;
          font-weight: 800;
          color: #4f46e5;
          margin: 0;
        }

        .__text {
          margin-top: 1rem;
          font-size: 1.125rem;
          color: #4b5563;
        }

        .__button {
          display: inline-block;
          margin-top: 1.5rem;
          padding: 0.75rem 1.5rem;
          color: white;
          font-weight: 600;
          background-color: #4f46e5;
          border-radius: 0.5rem;
          text-decoration: none;
          transition: background-color 0.3s ease;
        }

        .__button:hover {
          background-color: #4338ca;
        }

        .__parent {
          position: relative;
        }
      `}</style>
    </div>
  );
}
