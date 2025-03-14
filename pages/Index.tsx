import NavBar from "@/components/nabBar/NavBar";
import Image from "next/image";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-hidden font-[family-name:var(--font-geist-sans)]">
      {/* Navbar at the top */}
      <div
        className=" 
        p-10 xs:p-0"
      >
        <NavBar />
      </div>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="w-full text-center">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold">
            Welcome to My Website
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            This is a fully responsive layout with no horizontal scrolling.
          </p>
        </div>
      </main>

      {/* Footer at the bottom */}
      <footer className="w-full py-4 bg-gray-100 dark:bg-gray-800 text-center text-gray-600 dark:text-gray-300">
        © 2025 My Website. All rights reserved.
      </footer>
    </div>
  );
}
