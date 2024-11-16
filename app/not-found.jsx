import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex items-center justify-center mt-16  text-center">
      <div className="max-w-lg p-8 bg-gray-100 shadow-xl rounded-lg">
        <h1 className="text-6xl font-bold text-indigo-600">404</h1>
        <p className="mt-4 text-lg text-gray-500">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <p className="mt-6 text-sm text-gray-400">
          The page might have been removed or you may have typed the wrong URL.
        </p>
        <div className="mt-8 inline-block px-6 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition">
          <Link href="/">Go back to Home</Link>
        </div>
      </div>
    </div>
  );
}
