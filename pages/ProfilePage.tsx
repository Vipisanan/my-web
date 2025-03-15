import App from "@/pages/Index";
import Image from "next/image";

export default function ProfilePage() {
  return (
    <>
      <div className="w-full text-center">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold">
          Welcome to My Website
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          This is a fully responsive layout with no horizontal scrolling.
        </p>
      </div>
    </>
  );
}
