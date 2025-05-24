import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>My Personal Website</title>
      </Head>
      <h1 className="text-4xl font-bold text-blue-600">Hello, I'm Kanale 👋</h1>
      <p className="mt-4 text-lg text-gray-700">
        Welcome to my personal website.
      </p>
    </div>
  );
}
