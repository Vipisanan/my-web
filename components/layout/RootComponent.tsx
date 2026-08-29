import React, { ReactNode } from "react";
import NavBar from "@/components/nabBar/NavBar";
import Footer from "@/components/footer/Footer";

interface RootComponentProps {
  children: ReactNode;
}

export default function RootComponent({ children }: RootComponentProps) {
  return (
    <div className="flex min-h-screen w-full flex-col font-sans">
      <NavBar />
      <main className="mx-auto flex w-full max-w-[1160px] flex-1 px-7">
        {children}
      </main>
      <Footer />
    </div>
  );
}
