import React, { ReactNode } from "react";
import NavBar from "@/components/nabBar/NavBar";
import Footer from "../footer/Footer";

interface RootComponentProps {
  children: ReactNode; // Accepts any valid React element as a child
}
export default function RootComponent({ children }: RootComponentProps) {
  return (
    <div
      className="flex flex-col 
      min-h-screen w-full 
      overflow-hidden 
      font-[family-name:var(--font-geist-sans)]"
    >
      {/* Navbar at the top */}
      <div className="w-full max-w-[1800px] mx-auto pt-10 pb-1 xs:p-0 relative z-50">
        <NavBar />
      </div>

      {/* Main Content */}
      <main
        className="
        flex-1 
        flex w-full 
        max-w-[1800px] 
      mx-auto 
      px-0 z-10"
      >
        {children}
      </main>

      {/* Footer at the bottom */}
      <div className="w-full max-w-[1800px] mx-auto">
        <Footer />
      </div>
    </div>
  );
}
